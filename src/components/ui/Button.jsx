const base =
  'inline-flex items-center justify-center gap-2 rounded-chip px-6 py-3 text-body font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

const variants = {
  primary:
    'bg-accent text-ink hover:bg-accentDeep hover:text-ink shadow-glow',
  secondary:
    'border border-border bg-transparent text-text hover:border-accent hover:text-accent',
}

export default function Button({
  children,
  className = '',
  href,
  target,
  rel,
  variant = 'primary',
  type = 'button',
}) {
  const styles = `${base} ${variants[variant] || variants.primary} ${className}`

  if (href) {
    return (
      <a className={styles} href={href} target={target} rel={rel}>
        {children}
      </a>
    )
  }

  return (
    <button className={styles} type={type}>
      {children}
    </button>
  )
}
