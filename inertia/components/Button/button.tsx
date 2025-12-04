interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  icon?: React.ReactNode
}

export const Button = ({
  children,
  variant = 'primary',
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  const commonClasses = 'w-fit text-base gap-1 disabled:opacity-50 disabled:cursor-not-allowed'

  if (variant === 'primary') {
    return (
      <button
        className={`${commonClasses} cursor-pointer hover:bg-black/80 transition-all shadow-[11px_27px_12px_rgba(0,0,0,0.01),6px_15px_10px_rgba(0,0,0,0.05),3px_7px_7px_rgba(0,0,0,0.09),1px_2px_4px_rgba(0,0,0,0.1)] duration-300 ease-in-out hover:scale-[1.02] bg-black text-white px-3.5 py-2.5 rounded-full inline-flex items-center ${className}`}
        {...props}
      >
        {children}
        {icon}
      </button>
    )
  }
  if (variant === 'secondary') {
    return (
      <button
        className={`${commonClasses} cursor-pointer border font-normal border-black text-black px-3.5 py-2.5 rounded-full inline-flex items-center text-base ${className}`}
        {...props}
      >
        {children}
        {icon}
      </button>
    )
  }
  if (variant === 'outline') {
    return (
      <button
        className={`${commonClasses} border font-normal border-black text-black px-3.5 py-2.5 rounded-full inline-flex items-center text-base ${className}`}
        {...props}
      >
        {children}
        {icon}
      </button>
    )
  }

  return null
}
