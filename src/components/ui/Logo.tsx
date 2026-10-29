import { cx } from '@/utils/cx'
import styles from './Logo.module.css'

// Uproszczony znak z logo (kwadrat + spirala). Docelowo podmień na wektor od grafika.
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="92" height="92" rx="10" />
        <path d="M46 46 A4 4 0 0 1 54 46 A8 8 0 0 1 38 46 A12 12 0 0 1 62 46 A16 16 0 0 1 30 46 A20 20 0 0 1 70 46 C70 66 56 80 36 86" />
      </g>
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cx(styles.logo, className)}>
      <LogoMark className={styles.mark} />
      <span className={styles.wordmark}>
        <span>Magia</span>
        <span>Kamienia</span>
      </span>
    </span>
  )
}
