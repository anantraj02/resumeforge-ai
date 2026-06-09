// Reusable Input Component
import { colors, borderRadius } from "@/lib/theme";

interface InputProps {
  type?: "text" | "email" | "password" | "number";
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  label?: string;
  autoComplete?: string;
}

export default function Input({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  onKeyPress,
  className = "",
  required = false,
  disabled = false,
  error = "",
  label = "",
  autoComplete = "",
}: InputProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        required={required}
        disabled={disabled}
        autoComplete={autoComplete}
        className={`
          w-full px-4 py-2.5 rounded-lg border-2 border-gray-200
          focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600
          transition-colors duration-200
          disabled:bg-gray-50 disabled:cursor-not-allowed
          text-gray-900 placeholder-gray-500
          text-base
          ${error ? "border-red-500 focus:border-red-500 focus:ring-red-500" : ""}
        `}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
