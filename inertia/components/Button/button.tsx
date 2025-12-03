interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
}

export const Button = ({ children, variant = 'primary', type = 'button', icon }: ButtonProps) => {
  const commonClasses = 'cursor-pointer w-fit text-base gap-1'
  if (variant === 'primary') {
    return (
      <button
        className={`${commonClasses} hover:bg-black/80 transition-all shadow-[11px_27px_12px_rgba(0,0,0,0.01),6px_15px_10px_rgba(0,0,0,0.05),3px_7px_7px_rgba(0,0,0,0.09),1px_2px_4px_rgba(0,0,0,0.1)] duration-300 ease-in-out hover:scale-[1.02] bg-black text-white px-3.5 py-2.5 rounded-full inline-flex items-center`}
        type={type}
      >
        {children}
        {icon}
      </button>
    )
  }
  if (variant === 'secondary') {
    return (
      <button
        className={`${commonClasses} border font-normal border-black text-black px-3.5 py-2.5 rounded-full inline-flex items-center text-base`}
        type={type}
      >
        {children}
        {icon}
      </button>
    )
  }
}
