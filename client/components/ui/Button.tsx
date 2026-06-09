export default function Button({
  children,
  className = "",
  ...props
}: any) {
  return (
    <button
      {...props}
      className={`
        px-6 py-3
        rounded-xl
        bg-blue-600
        text-white
        font-semibold
        hover:bg-blue-700
        transition
        shadow-md
        ${className}
      `}
    >
      {children}
    </button>
  );
}