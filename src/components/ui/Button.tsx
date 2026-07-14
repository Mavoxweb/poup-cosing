import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyle = "inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none rounded-premium-sm text-center";
  
  const variants = {
    primary: "bg-primary-900 text-white hover:bg-primary-950 active:scale-[0.98] shadow-premium hover:shadow-premium-hover focus-visible:ring-2 focus-visible:ring-primary-700",
    secondary: "border border-neutral-border text-primary-900 hover:bg-surface-blue hover:border-primary-700 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-primary-700",
    accent: "bg-accent-600 text-white hover:bg-accent-700 active:scale-[0.98] shadow-premium hover:shadow-premium-hover focus-visible:ring-2 focus-visible:ring-accent-500",
    text: "text-primary-900 hover:text-primary-700 hover:underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-primary-700"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export default Button;
