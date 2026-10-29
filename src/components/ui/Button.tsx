import type { ReactNode } from 'react'
import { cx } from '@/utils/cx'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  variant?: 'primary' | 'outline' | 'dark'
  // Z `href` renderuje się link, bez niego — zwykły <button>.
  href?: string
  type?: 'button' | 'submit'
}

export function Button({ children, variant = 'primary', href, type = 'button' }: ButtonProps) {
  const className = cx(styles.button, styles[variant])

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={className}>
      {children}
    </button>
  )
}
