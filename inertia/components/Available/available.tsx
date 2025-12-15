import { useLanguage } from '~/context/LanguageContext'

const AvailableIcon = () => {
  return (
    <span className="relative -z-10 flex items-center justify-center w-[13px] h-[13px] rounded-full bg-[rgba(0,255,121,0.48)] mr-1">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[rgba(0,255,121,0.48)] opacity-75"></span>
      <span className="relative inline-flex rounded-full w-[7px] h-[7px] bg-[#00D665]"></span>
    </span>
  )
}

export const Available = () => {
  const { t } = useLanguage()
  return (
    <button className="border font-normal border-black text-black px-3.5 py-2.5 rounded-full inline-flex items-center text-base gap-2">
      {t.hero.available}
      <AvailableIcon />
    </button>
  )
}
