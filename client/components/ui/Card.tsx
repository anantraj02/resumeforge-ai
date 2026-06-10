interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className = "",
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border border-slate-200
        shadow-md
        p-6
        ${
          hoverable
            ? "hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            : ""
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}