"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
  Children,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Types
interface SwiperProps {
  children: ReactNode;
  type?: "fullWidth" | "grid";
  showArrows?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  gridCols?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  gap?: number;
  showDots?: boolean;
  loop?: boolean;
  className?: string;
  arrowClassName?: string;
  dotClassName?: string;
  transitionDuration?: number;
  pauseOnHover?: boolean;
}

const Swiper: React.FC<SwiperProps> = ({
  children,
  type = "grid",
  showArrows = true,
  autoplay = false,
  autoplayDelay = 3000,
  gridCols = { mobile: 1, tablet: 2, desktop: 4 },
  gap = 16,
  showDots = true,
  loop = true,
  className = "",
  arrowClassName = "",
  dotClassName = "",
  transitionDuration = 500,
  pauseOnHover = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  const swiperRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const childrenArray = Children.toArray(children);
  const totalItems = childrenArray.length;

  // Calculate items per view based on viewport
  const getItemsPerView = useCallback(() => {
    if (type === "fullWidth") return 1;

    if (viewportWidth < 640) return gridCols.mobile || 1;
    if (viewportWidth < 1024) return gridCols.tablet || 2;
    return gridCols.desktop || 4;
  }, [type, viewportWidth, gridCols]);

  const itemsPerView = getItemsPerView();
  const totalSlides =
    type === "fullWidth" ? totalItems : Math.ceil(totalItems / itemsPerView);

  // Show arrows only if there's more than one item
  const shouldShowArrows = showArrows && totalItems > 1;
  const shouldShowDots = showDots && (type === "fullWidth" || totalSlides > 1);

  // Update viewport width
  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay || isPaused || totalItems <= 1) {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
      return;
    }

    autoplayRef.current = setInterval(() => {
      handleNext();
    }, autoplayDelay);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
        autoplayRef.current = null;
      }
    };
  }, [autoplay, isPaused, currentIndex, autoplayDelay, totalItems]);

  // Navigation handlers
  const handleNext = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev >= totalSlides - 1) {
        return loop ? 0 : prev;
      }
      return prev + 1;
    });

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [isTransitioning, totalSlides, loop, transitionDuration]);

  const handlePrev = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return loop ? totalSlides - 1 : prev;
      }
      return prev - 1;
    });

    transitionTimeoutRef.current = setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
  }, [isTransitioning, totalSlides, loop, transitionDuration]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      transitionTimeoutRef.current = setTimeout(() => {
        setIsTransitioning(false);
      }, transitionDuration);
    },
    [isTransitioning, currentIndex, transitionDuration]
  );

  // Touch and drag handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.touches[0].clientX);
    const offset = e.touches[0].clientX - touchStart;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const swipeThreshold = 50;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > swipeThreshold) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setDragOffset(0);
    setTouchStart(0);
    setTouchEnd(0);
    setIsPaused(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setTouchEnd(e.clientX);
    const offset = e.clientX - touchStart;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const swipeThreshold = 50;
    const distance = touchStart - touchEnd;

    if (Math.abs(distance) > swipeThreshold) {
      if (distance > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setDragOffset(0);
    setTouchStart(0);
    setTouchEnd(0);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      if (transitionTimeoutRef.current)
        clearTimeout(transitionTimeoutRef.current);
    };
  }, []);

  // Calculate transform
  const getTransform = () => {
    const baseTransform = -currentIndex * 100;
    const dragPercentage = isDragging
      ? (dragOffset / (swiperRef.current?.offsetWidth || 1)) * 100
      : 0;
    return `translateX(calc(${baseTransform}% + ${dragPercentage}px))`;
  };

  // Render content based on type
  const renderContent = () => {
    if (type === "fullWidth") {
      return (
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: getTransform(),
            transitionDuration: isDragging ? "0ms" : `${transitionDuration}ms`,
            cursor: isDragging ? "grabbing" : "grab",
          }}
        >
          {childrenArray.map((child, index) => (
            <div key={index} className="shrink-0 w-full">
              {child}
            </div>
          ))}
        </div>
      );
    }

    // Grid type
    return (
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: getTransform(),
          transitionDuration: isDragging ? "0ms" : `${transitionDuration}ms`,
          cursor: isDragging ? "grabbing" : "grab",
        }}
      >
        {Array.from({ length: totalSlides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="shrink-0 w-full"
            style={{
              paddingLeft: slideIndex === 0 ? 0 : gap / 2,
              paddingRight: slideIndex === totalSlides - 1 ? 0 : gap / 2,
            }}
          >
            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${itemsPerView}, minmax(0, 1fr))`,
                gap: `${gap}px`,
              }}
            >
              {childrenArray
                .slice(
                  slideIndex * itemsPerView,
                  (slideIndex + 1) * itemsPerView
                )
                .map((child, index) => (
                  <div key={slideIndex * itemsPerView + index}>{child}</div>
                ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => {
        if (pauseOnHover) setIsPaused(false);
        if (isDragging) handleMouseLeave();
      }}
    >
      {/* Main Swiper Container */}
      <div
        ref={swiperRef}
        className="overflow-hidden select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        {renderContent()}

        {/* Dots Pagination */}
        {shouldShowDots && (
          <div className="flex justify-center items-center gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                transition-all duration-300 rounded-full
                ${
                  currentIndex === index
                    ? "bg-primary-500 w-8 h-2"
                    : "bg-gray-300 hover:bg-gray-400 w-2 h-2"
                }
                ${dotClassName}
              `}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={currentIndex === index}
              />
            ))}
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {shouldShowArrows && (
        <>
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            disabled={!loop && currentIndex === 0}
            className={`
              absolute left-1 md:left-2 lg:left-3 top-1/2 -translate-y-1/2 z-10
              bg-white/90 hover:bg-white shadow-lg
              rounded-full p-1
              transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed
              hover:scale-110 active:scale-95
              group
              ${arrowClassName}
            `}
            aria-label="Previous slide"
          >
            <ChevronLeft className="text-gray-800 group-hover:text-primary-500 transition-colors" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={!loop && currentIndex === totalSlides - 1}
            className={`
              absolute right-1 md:right-2 lg:right-3 top-1/2 -translate-y-1/2 z-10
              bg-white/90 hover:bg-white shadow-lg
              rounded-full p-1
              transition-all duration-300
              disabled:opacity-30 disabled:cursor-not-allowed
              hover:scale-110 active:scale-95
              group
              ${arrowClassName}
            `}
            aria-label="Next slide"
          >
            <ChevronRight className="text-gray-800 group-hover:text-primary-500 transition-colors" />
          </button>
        </>
      )}

      <style jsx>{`
        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Swiper;
