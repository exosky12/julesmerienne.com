import React, { useId } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label?: string
  error?: string
  textarea?: boolean
}

export const Input = ({
  label,
  error,
  className = '',
  textarea,
  type,
  id,
  ...props
}: InputProps) => {
  const generatedId = useId()
  const inputId = id || generatedId

  const baseClasses = `
    w-full bg-transparent border-b border-grey
    focus:outline-none focus:border-black transition-colors duration-200
    pb-2 text-lg text-black placeholder:text-grey/70
    ${error ? 'border-red-500' : ''}
    ${className}
  `

  return (
    <div className="flex flex-col gap-5.5 w-full">
      {label && (
        <label htmlFor={inputId} className="text-xl font-normal">
          {label}
        </label>
      )}
      {textarea || type === 'textarea' ? (
        <textarea
          id={inputId}
          className={`${baseClasses} min-h-[100px] resize-y`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={inputId}
          className={baseClasses}
          type={type}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {error && <span className="text-xs text-red-500 font-medium">{error}</span>}
    </div>
  )
}
