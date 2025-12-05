import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string
  error?: string
  textarea?: boolean
}

export const Input = ({ label, error, className = '', textarea, type, ...props }: InputProps) => {
  const baseClasses = `
    w-full bg-transparent border-b border-grey
    focus:outline-none focus:border-black transition-colors duration-200
    pb-2 text-lg text-black placeholder:text-grey/50
    ${error ? 'border-red-500' : ''}
    ${className}
  `

  return (
    <div className="flex flex-col gap-5.5 w-full">
      {label && <label className="text-xl font-normal">{label}</label>}
      {textarea || type === 'textarea' ? (
        <textarea
          className={`${baseClasses} min-h-[100px] resize-y`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={baseClasses}
          type={type}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  )
}
