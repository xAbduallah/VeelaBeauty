import Link from "next/link";
import Image from "next/image";
import Swiper from "@/components/ui/Swiper";
import { heroBanners } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Banners() {
  return (
    <section id="banners" className="w-full">
      <Swiper
        type="fullWidth"
        autoplay={true}
        autoplayDelay={5000}
        showArrows={true}
        showDots={true}
        loop={true}
        pauseOnHover={true}
        transitionDuration={600}
        className="overflow-hidden"
      >
        {heroBanners.map((banner) => (
          <div
            key={banner.id}
            className="relative w-full h-[250px] md:h-[300px] lg:h-[500px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 opacity-90 mb-2">
              <Image
                src={banner.image}
                alt={banner.title}
                fill
                className="object-cover"
                priority={banner.id === "1"}
              />
            </div>
            {/* Content Overlay */}
            <div className="relative z-10 h-full flex items-center justify-start">
              <div className="container px-10">
                <div className="md:max-w-md lg:max-w-xl bg-black/5 rounded-sm p-4 backdrop-blur-sm border border-white/5 flex flex-col gap-1">
                  {banner.subtitle && (
                    <p className="text-sm md:text-base text-black font-semibold uppercase tracking-wider">
                      {banner.subtitle}
                    </p>
                  )}
                  <h1 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold leading-tight">
                    {banner.title}
                  </h1>
                  {banner.description && (
                    <p className="text-base md:text-lg lg:text-xl text-black">
                      {banner.description}
                    </p>
                  )}
                  {banner.buttonText && banner.buttonLink && (
                    <Button
                      variant="outline"
                      size="md"
                      fullWidth={false}
                      className="w-fit rounded-none"
                    >
                      <Link href={banner.buttonLink}>{banner.buttonText}</Link>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Swiper>
    </section>
  );
}
