export default function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-chip border border-border bg-surfaceAlt px-3 py-1 text-label font-semibold uppercase tracking-[0.12em] text-muted ${className}`}
    >
      {children}
    </span>
  )
}
