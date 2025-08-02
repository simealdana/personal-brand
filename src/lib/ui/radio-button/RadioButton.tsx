import React, { forwardRef } from "react";
import { colors } from "@/lib/design-tokens/colors";
import { typography } from "@/lib/design-tokens/typography";

interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const labelStyle = {
      fontFamily: typography.fontFamily.secondary,
      fontSize: typography.fontSize.sm,
      fontWeight: typography.fontWeight.normal,
      color: colors.textTertiary,
    };

    return (
      <label className="flex items-center cursor-pointer">
        <input
          ref={ref}
          type="radio"
          className={`mr-2 sm:mr-3 text-purple-600 focus:ring-purple-500 ${className}`}
          style={{ accentColor: colors.primary }}
          {...props}
        />
        <span className="text-sm sm:text-base" style={labelStyle}>
          {label}
        </span>
        {error && (
          <p className="text-red-500 text-xs sm:text-sm ml-2">{error}</p>
        )}
      </label>
    );
  }
);

RadioButton.displayName = "RadioButton";
