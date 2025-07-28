import { BlueCheckIcon } from "../icons";
import Image from "next/image";
import { useTheme } from "../useTheme";
import { H2 } from "../heading";
import { Span } from "../text";

interface LogoProps {
  title: string;
  subtitle?: string;
  showVerifiedIcon?: boolean;
  showRocketIcon?: boolean;
}

export default function Logo({
  title,
  subtitle,
  showVerifiedIcon = true,
  showRocketIcon = false,
}: LogoProps) {
  const { colors } = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <div>
        <div
          style={{
            border: `2px solid ${colors.accent}`,
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2px",
          }}
        >
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center space-x-2">
          <H2>{title}</H2>
          {showVerifiedIcon && <BlueCheckIcon />}
        </div>
        {subtitle && (
          <Span>
            {subtitle}
            {showRocketIcon && " 🚀"}
          </Span>
        )}
      </div>
    </div>
  );
}
