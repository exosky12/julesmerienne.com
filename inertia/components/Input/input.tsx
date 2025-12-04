import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
}

export const Input = ({ label, error, className = '', ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-sm font-medium text-black/70 ml-1">{label}</label>}
      <input
        className={`
          w-full px-4 py-3 rounded-xl bg-white border border-black/5 
          focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black/20
          placeholder:text-black/30 text-black transition-all duration-200
          shadow-[0px_2px_4px_rgba(0,0,0,0.02)]
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <span className="text-xs text-red-500 ml-1 font-medium">{error}</span>}
    </div>
  )
}
