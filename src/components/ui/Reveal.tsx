import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cx } from '@/utils/cx'
import styles from './Reveal.module.css'

type RevealProps = {
  children: ReactNode
  // Opóźnienie animacji w ms — przydatne przy kilku elementach obok siebie.
  delay?: number
  className?: string
}

// Delikatnie wysuwa zawartość, gdy pojawi się na ekranie.
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cx(styles.reveal, isVisible && styles.visible, className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
