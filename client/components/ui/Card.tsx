// Reusable Card Component
import { colors, shadows, borderRadius } from "@/lib/theme";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "sm" | "md" | "lg";
  hoverable?: boolean;
  onClick?: () => void;
}

export default function Card({
  children,
  className = "",
  padding = "md",
  hoverable = false,
  onClick,
}: CardProps) {
  const paddingStyles = {
    sm: "p-3",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-lg border border-gray-200
        ${paddingStyles[padding]}
        ${hoverable ? "hover:shadow-lg cursor-pointer transition-shadow duration-200" : "shadow-md"}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
      style={{
        boxShadow: shadows.md,
      }}
    >
      {children}
    </div>
  );
}
