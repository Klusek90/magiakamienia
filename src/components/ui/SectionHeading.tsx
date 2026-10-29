import type { ReactNode } from 'react'
import { cx } from '@/utils/cx'
import { Eyebrow } from './Eyebrow'
import styles from './SectionHeading.module.css'

type SectionHeadingProps = {
  eyebrow: string
  // Fragment w <em> wyświetli się kursywą w kolorze akcentu.
  title: ReactNode
  intro?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, intro, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={cx(styles.heading, align === 'center' && styles.center)}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={styles.title}>{title}</h2>
      {intro && <p className={styles.intro}>{intro}</p>}
    </header>
  )
}
