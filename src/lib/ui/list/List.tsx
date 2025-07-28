import React from "react";
import { Span } from "../text";
import { Check } from "lucide-react";

interface ListItem {
  text: string;
  icon?: React.ReactNode;
}

interface ListProps {
  items: ListItem[];
  variant?: "withIcons" | "withoutIcons";
  icon?: React.ReactNode;
  className?: string;
  itemClassName?: string;
}

const List: React.FC<ListProps> = ({
  items,
  variant = "withIcons",
  icon = <Check size={20} />,
  className = "",
  itemClassName = "",
}) => {
  return (
    <ul className={`space-y-4 ${className}`}>
      {items.map((item, index) => (
        <li
          key={index}
          className={`flex items-center space-x-3 gap-1  ${itemClassName}`}
        >
          {variant === "withIcons" && <div>{item.icon || icon}</div>}
          <Span>{item.text}</Span>
        </li>
      ))}
    </ul>
  );
};

export default List;
