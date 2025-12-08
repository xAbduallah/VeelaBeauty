import React, { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    helperText?: string;
    fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            fullWidth = false,
            className = "",
            id,
            ...props
        },
        ref
    ) => {
        const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

        return (
            <div className={`flex flex-col gap-1 ${fullWidth ? "w-full" : ""}`}>
                {label && (
                    <label
                        htmlFor={inputId}
                        className="text-sm font-medium text-secondary-700"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={`
            px-4 py-2.5 
            text-base 
            border rounded-lg 
            transition-all duration-200
            ${error
                            ? "border-error focus:border-error focus:ring-2 focus:ring-error/20"
                            : "border-secondary-300 focus:border-black focus:ring-2 focus:ring-black/10"
                        }
            disabled:bg-secondary-100 disabled:cursor-not-allowed
            placeholder:text-secondary-400
            ${fullWidth ? "w-full" : ""}
            ${className}
          `}
                    {...props}
                />
                {error && <span className="text-sm text-error">{error}</span>}
                {helperText && !error && (
                    <span className="text-sm text-secondary-500">{helperText}</span>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export default Input;
