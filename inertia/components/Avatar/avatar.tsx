export const Avatar = () => {
  return (
    <div className="w-full h-full">
      <img
        className="w-full h-full object-cover rounded-full shadow-[-273px_253px_149px_rgba(0,0,0,0.02),-154px_142px_126px_rgba(0,0,0,0.06),-68px_63px_93px_rgba(0,0,0,0.11),-17px_16px_51px_rgba(0,0,0,0.12)]"
        src="myself.png"
        alt="Photo de moi"
        width="128"
        height="128"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  )
}
