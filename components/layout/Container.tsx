import React, { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode;
    className?: string;
    maxWidth?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container: React.FC<ContainerProps> = ({
    children,
    className = "",
    maxWidth = "xl",
}) => {
    const maxWidthClasses = {
        sm: "max-w-3xl",
        md: "max-w-5xl",
        lg: "max-w-7xl",
        xl: "max-w-[1440px]",
        full: "max-w-full",
    };

    return (
        <div
            className={`${maxWidthClasses[maxWidth]} mx-auto px-4 md:px-6 lg:px-8 ${className}`}
        >
            {children}
        </div>
    );
};

export default Container;
