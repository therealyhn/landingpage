import Chip from './Chip'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={`flex flex-col gap-4 ${alignment}`}>
      {eyebrow ? <Chip>{eyebrow}</Chip> : null}
      <h2 className="text-h2 font-display text-text">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-body text-muted">{description}</p>
      ) : null}
    </div>
  )
}
