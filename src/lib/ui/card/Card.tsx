import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self";
  rel?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  onClick,
  href,
  target = "_self",
  rel,
}) => {
  const baseClasses =
    "bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={`${baseClasses} ${className} block no-underline`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
