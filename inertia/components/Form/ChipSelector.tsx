interface ChipSelectorProps<T extends string | number> {
  label?: string
  options: { label: string; value: T }[]
  value: T[]
  onChange: (value: T[]) => void
  error?: string
}

export const ChipSelector = <T extends string | number>({
  label,
  options,
  value,
  onChange,
  error,
}: ChipSelectorProps<T>) => {
  const toggleOption = (optionValue: T) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="text-sm font-medium text-black/70 ml-1">{label}</label>}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = value.includes(option.value)
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggleOption(option.value)}
              className={`
                px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200
                border
                ${
                  isSelected
                    ? 'bg-black text-white border-black shadow-md transform scale-105'
                    : 'bg-white text-black/60 border-black/10 hover:border-black/30 hover:text-black/80'
                }
              `}
            >
              {option.label}
            </button>
          )
        })}
      </div>
      {error && <span className="text-xs text-red-500 ml-1 font-medium">{error}</span>}
    </div>
  )
}
