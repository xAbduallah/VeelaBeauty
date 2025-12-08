import React, { ButtonHTMLAttributes, forwardRef } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    fullWidth?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = "primary",
            size = "md",
            fullWidth = false,
            icon,
            iconPosition = "left",
            className = "",
            children,
            disabled,
            ...props
        },
        ref
    ) => {
        const baseStyles =
            "inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";

        const variantStyles = {
            primary:
                "bg-black text-white hover:bg-gray-800 active:bg-gray-900",
            secondary:
                "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700",
            outline:
                "border-2 border-black text-black bg-transparent hover:bg-black hover:text-white",
            ghost:
                "text-black bg-transparent hover:bg-secondary-100 active:bg-secondary-200",
        };

        const sizeStyles = {
            sm: "px-4 py-2 text-sm rounded-lg",
            md: "px-6 py-3 text-base rounded-lg",
            lg: "px-8 py-4 text-lg rounded-xl",
        };

        const widthStyles = fullWidth ? "w-full" : "";

        const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`;

        return (
            <button
                ref={ref}
                className={combinedStyles}
                disabled={disabled}
                {...props}
            >
                {icon && iconPosition === "left" && <span>{icon}</span>}
                {children}
                {icon && iconPosition === "right" && <span>{icon}</span>}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
