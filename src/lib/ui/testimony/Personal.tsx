import React from "react";
import { useTheme } from "../useTheme";
import { Star } from "lucide-react";
import Image from "next/image";

interface PersonalTestimonyProps {
  author: {
    name: string;
    title: string;
    initials: string;
  };
  rating?: number;
  className?: string;
  image?: string;
}

const PersonalTestimony: React.FC<PersonalTestimonyProps> = ({
  author,
  rating = 5,
  className = "",
  image,
}) => {
  const { colors, typography } = useTheme();

  return (
    <div className={`${className}`}>
      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          {image && (
            <Image
              src={image}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          {!image && (
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                backgroundColor: colors.primary,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              {author.initials}
            </div>
          )}
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-1 items-center ">
            <div
              style={{
                fontWeight: 700,
                color: colors.textSecondary,
                fontSize: "18px",
                textTransform: "uppercase",
                fontFamily: typography.fontFamily.primary,
                letterSpacing: "-0.02em",
              }}
            >
              {author.name}
            </div>
            {rating > 0 && (
              <div className="flex items-center space-x-0.5">
                {[...Array(rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    style={{ color: "#fbbf24", fill: "#fbbf24" }}
                  />
                ))}
              </div>
            )}
          </div>
          <div
            style={{
              fontSize: "14px",
              color: colors.textSecondary,
              fontFamily: typography.fontFamily.secondary,
              fontWeight: 500,
              letterSpacing: "-0.01em",
            }}
          >
            {author.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTestimony;
