import React, { forwardRef } from "react";
import { colors } from "@/lib/design-tokens/colors";
import { typography } from "@/lib/design-tokens/typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const labelStyle = {
      fontFamily: typography.fontFamily.secondary,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.semibold,
      color: colors.textTertiary,
    };

    const inputStyle = {
      fontFamily: typography.fontFamily.secondary,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.normal,
      color: colors.textTertiary,
    };

    return (
      <div className="space-y-2">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm sm:text-base"
            style={labelStyle}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors text-sm sm:text-base ${className}`}
          style={inputStyle}
          {...props}
        />
        {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
