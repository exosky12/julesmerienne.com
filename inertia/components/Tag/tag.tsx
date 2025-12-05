import { cn } from '~/lib/utils'

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  variant?: 'normal' | 'sm'
  appearance?: 'filled' | 'outline'
  className?: string
}

export const Tag = ({
  text,
  variant = 'normal',
  appearance = 'filled',
  className,
  ...props
}: TagProps) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors'

  const variants = {
    normal: 'px-3.5 py-2.5 text-sm',
    sm: 'px-2 py-1.5 text-sm',
  }

  const appearances = {
    filled: 'bg-black text-white border border-black',
    outline: 'text-black border border-black',
  }

  return (
    <span
      className={cn(
        baseClasses,
        variants[variant],
        appearances[appearance],
        props.onClick && 'cursor-pointer hover:opacity-80',
        className
      )}
      {...props}
    >
      {text}
    </span>
  )
}
