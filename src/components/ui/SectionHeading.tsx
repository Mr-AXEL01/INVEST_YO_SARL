interface SectionHeadingProps {
  label: string
  title: string
  subtitle?: string
  light?: boolean
}

export default function SectionHeading({ label, title, subtitle, light = false }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <div className="text-[13px] font-semibold tracking-[3px] uppercase text-accent mb-3">
        {label}
      </div>
      <h2
        className={`font-display text-[clamp(28px,4vw,44px)] font-bold leading-tight mb-4 ${
          light ? 'text-navy' : 'text-white'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[17px] max-w-[600px] mx-auto leading-relaxed ${
            light ? 'text-slate-500' : 'text-slate-400'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
