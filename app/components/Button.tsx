type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
};

const variants = {
  primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm",
  secondary: "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50",
  ghost: "text-orange-500 hover:bg-orange-50",
  danger: "bg-red-500 hover:bg-red-600 text-white",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm rounded-lg",
  md: "px-5 py-2.5 text-sm rounded-xl",
  lg: "px-6 py-3 text-base rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-colors cursor-pointer
        ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );
}
