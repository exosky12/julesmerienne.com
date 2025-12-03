import { Button } from '../Button/button'

const AvailableIcon = () => {
  return (
    <span className="relative -z-10 flex items-center justify-center w-[13px] h-[13px] rounded-full bg-[rgba(0,255,121,0.48)] mr-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgba(0,255,121,0.48)] opacity-75"></span>
      <span className="relative inline-flex rounded-full w-[7px] h-[7px] bg-[#00D665]"></span>
    </span>
  )
}

export const Available = () => {
  return (
    <Button icon={<AvailableIcon />} variant="secondary">
      Disponible
    </Button>
  )
}
