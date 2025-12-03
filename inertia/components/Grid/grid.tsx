export const GridLayers = () => {
  // Grid cell size matches the design (~80px)
  const gridSize = '80px'

  const blocks = [
    // Main blocks
    { col: 11, row: 11, color: 'rgba(217, 171, 82, 0.5)' },
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
  ]

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none -z-10 bg-white/50">
      {/* Background Blobs - Responsive positioning */}
      <div className="absolute top-[-10%] left-[-20%] w-[70%] h-[50%] bg-gradient-to-br from-white to-transparent blur-[100px] opacity-80" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-transparent blur-[100px] opacity-80" />
      <div className="absolute top-[-20%] right-[10%] w-[50%] h-[50%] bg-[#D9D9D9] blur-[150px] opacity-60 rotate-[-130deg]" />
      <div className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] bg-[#D9D9D9] blur-[100px] opacity-50" />

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
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(auto-fill, ${gridSize})`,
          gridTemplateRows: `repeat(auto-fill, ${gridSize})`,
        }}
      >
        {blocks.map((block, index) => (
          <div
            key={index}
            style={{
              gridColumnStart: block.col,
              gridRowStart: block.row,
              backgroundColor: block.color,
            }}
            className="w-full h-full"
          />
        ))}
      </div>
    </div>
  )
}
