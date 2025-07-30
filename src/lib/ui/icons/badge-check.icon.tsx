import React from "react";

interface BadgeCheckIconProps {
  width?: number;
  height?: number;
  className?: string;
}

const BadgeCheckIcon: React.FC<BadgeCheckIconProps> = ({
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* White badge background with star-like outline */}
      <path
        d="M12 2L14.5 8.5L21 9L16 14L17.5 20.5L12 17L6.5 20.5L8 14L3 9L9.5 8.5L12 2Z"
        fill="white"
        stroke="#8C52FF"
        strokeWidth="1"
      />
      {/* Purple checkmark */}
      <path
        d="M9 12L11 14L15 10"
        stroke="#8C52FF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BadgeCheckIcon;
