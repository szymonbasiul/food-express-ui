type InputProps = {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  icon?: React.ReactNode;
  error?: string;
  hint?: string;
  className?: string;
};

export default function Input({
  label,
  placeholder,
  type = "text",
  value,
  icon,
  error,
  hint,
  className = "",
}: InputProps) {
  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{icon}</div>
        )}
        <input
          type={type}
          defaultValue={value}
          placeholder={placeholder}
          className={`w-full rounded-xl border px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 outline-none transition
            focus:border-orange-400 focus:ring-2 focus:ring-orange-100
            ${error ? "border-red-400 bg-red-50" : "border-gray-200 bg-white"}
            ${icon ? "pl-10" : ""}`}
        />
      </div>
      {error && <p className="text-xs text-red-500">{error}</p>}
      {hint && !error && <p className="text-xs text-gray-400">{hint}</p>}
    </div>
  );
}
