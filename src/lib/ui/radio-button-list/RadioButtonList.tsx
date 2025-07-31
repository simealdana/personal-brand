import React from "react";
import { colors } from "@/lib/design-tokens/colors";
import { typography } from "@/lib/design-tokens/typography";
import { RadioButton } from "../radio-button";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioButtonListProps {
  label: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export const RadioButtonList: React.FC<RadioButtonListProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  required = false,
  className = "",
}) => {
  const labelStyle = {
    fontFamily: typography.fontFamily.secondary,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.semibold,
    color: colors.textTertiary,
  };

  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="text-sm sm:text-base" style={labelStyle}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </div>

      <div className="space-y-2">
        {options.map((option) => (
          <RadioButton
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            checked={value === option.value}
            onChange={(e) => handleChange(e.target.value)}
            required={required}
          />
        ))}
      </div>

      {error && <p className="text-red-500 text-xs sm:text-sm">{error}</p>}
    </div>
  );
};
