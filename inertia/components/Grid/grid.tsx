interface GridLayersProps {
  variant?: number
  showFog?: boolean
}

export const GridLayers = ({ variant = 0, showFog = false }: GridLayersProps) => {
  // Grid cell size matches the design (~80px)
  const gridSize = '80px'

  const heroBlocks = [
    // Main blocks
    { col: 11, row: 8, color: 'rgba(217, 171, 82, 0.5)' },
    { col: 6, row: 11, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 15, row: 4, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 7, row: 7, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 14, row: 5, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 6, row: 4, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 14, row: 4, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 6, row: 7, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 5, row: 11, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 5, row: 12, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 3, row: 10, color: 'rgba(217, 171, 82, 0.2)' },

    // Top Group
    { col: 13, row: 2, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 12, row: 1, color: 'rgba(217, 171, 82, 0.15)' },

    // Top Left Group
    { col: 2, row: 2, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 1, row: 1, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 1, row: 2, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 2, row: 4, color: 'rgba(217, 171, 82, 0.2)' },

    // New scattered blocks
    { col: 9, row: 6, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 16, row: 9, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 4, row: 14, color: 'rgba(217, 171, 82, 0.1)' },
  ]

  const variant1 = [
    { col: 2, row: 3, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 15, row: 2, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 8, row: 6, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 12, row: 8, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 4, row: 10, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 14, row: 12, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 6, row: 14, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 10, row: 4, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 3, row: 8, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 16, row: 6, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 9, row: 11, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 13, row: 3, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 5, row: 5, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 11, row: 9, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 7, row: 13, color: 'rgba(217, 171, 82, 0.1)' },
  ]

  const variant2 = [
    { col: 14, row: 3, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 3, row: 5, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 9, row: 2, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 16, row: 8, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 5, row: 10, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 12, row: 12, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 2, row: 14, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 8, row: 4, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 11, row: 7, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 4, row: 9, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 15, row: 11, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 7, row: 13, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 13, row: 6, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 6, row: 2, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 10, row: 15, color: 'rgba(217, 171, 82, 0.15)' },
  ]

  const variant3 = [
    { col: 4, row: 2, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 12, row: 5, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 8, row: 8, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 15, row: 10, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 2, row: 12, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 6, row: 6, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 10, row: 3, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 14, row: 7, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 5, row: 14, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 11, row: 11, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 3, row: 9, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 16, row: 4, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 9, row: 13, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 7, row: 1, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 13, row: 15, color: 'rgba(217, 171, 82, 0.15)' },
  ]

  const variant4 = [
    { col: 16, row: 1, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 2, row: 5, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 10, row: 8, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 6, row: 12, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 14, row: 14, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 4, row: 3, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 12, row: 6, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 8, row: 10, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 3, row: 13, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 15, row: 4, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 7, row: 9, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 11, row: 2, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 5, row: 7, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 13, row: 11, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 9, row: 15, color: 'rgba(217, 171, 82, 0.15)' },
  ]

  const variant5 = [
    { col: 8, row: 4, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 13, row: 8, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 3, row: 12, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 11, row: 14, color: 'rgba(217, 171, 82, 0.25)' },
    { col: 6, row: 2, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 15, row: 6, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 2, row: 9, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 9, row: 11, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 14, row: 13, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 5, row: 3, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 12, row: 7, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 7, row: 10, color: 'rgba(217, 171, 82, 0.15)' },
    { col: 16, row: 5, color: 'rgba(217, 171, 82, 0.1)' },
    { col: 4, row: 15, color: 'rgba(217, 171, 82, 0.2)' },
    { col: 10, row: 1, color: 'rgba(217, 171, 82, 0.15)' },
  ]

  const getBlocks = () => {
    // Cycle through variants if number is larger than defined variants
    const v = variant % 6
    switch (v) {
      case 1:
        return variant1
      case 2:
        return variant2
      case 3:
        return variant3
      case 4:
        return variant4
      case 5:
        return variant5
      default:
        return heroBlocks
    }
  }

  const blocks = getBlocks()

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-white/50 opacity-75">
      {/* Background Blobs - Responsive positioning - Hidden on mobile for performance */}
      <div className="hidden sm:block absolute top-[-10%] left-[-20%] w-[70%] h-[50%] bg-linear-to-br from-white to-transparent blur-[100px] opacity-80" />
      <div className="hidden sm:block absolute bottom-[-10%] left-[-10%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-white to-transparent blur-[100px] opacity-80" />
      <div className="hidden sm:block absolute top-[-20%] right-[10%] w-[50%] h-[50%] bg-[#D9D9D9] blur-[150px] opacity-60 rotate-[-130deg]" />
      <div className="hidden sm:block absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-[#D9D9D9] blur-[100px] opacity-50" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.09]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #222020 1px, transparent 1px),
            linear-gradient(to bottom, #222020 1px, transparent 1px)
          `,
          backgroundSize: `${gridSize} ${gridSize}`,
        }}
      />

      {/* Grid Blocks Container */}
      <div
        className="absolute inset-0 grid transition-all duration-1000 ease-in-out"
        style={{
          gridTemplateColumns: `repeat(auto-fill, ${gridSize})`,
          gridTemplateRows: `repeat(auto-fill, ${gridSize})`,
        }}
      >
        {blocks.map((block, index) => (
          <div
            key={`${variant}-${index}`}
            style={{
              gridColumnStart: block.col,
              gridRowStart: block.row,
              backgroundColor: block.color,
            }}
            className="w-full h-full animate-in fade-in duration-700"
          />
        ))}
      </div>

      {showFog && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.55) 10%, rgba(255, 255, 255, 0.8) 30%, rgba(255, 255, 255, 0) 70%)',
          }}
        />
      )}
    </div>
  )
}
