import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PurchaseButtonProps {
  className?: string;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const PurchaseButton = ({ className, href, onClick }: PurchaseButtonProps) => {
  const commonProps = {
    size: "lg" as const,
    className: cn(
      "px-8 py-4 bg-black text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(79,70,229,0.8)] hover:bg-gray-800 hover:shadow-[0_0_25px_rgba(109,40,217,0.9)] transform transition-all duration-300 ease-in-out",
      className
    ),
  };

  if (href) {
    return (
      <Button {...commonProps} asChild>
        <Link href={href}>Purchase</Link>
      </Button>
    );
  }

  return (
    <Button {...commonProps} onClick={onClick}>
      Purchase
    </Button>
  );
};

export default PurchaseButton;
