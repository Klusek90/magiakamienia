import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cx } from '@/utils/cx'
import styles from './Process.module.css'

const steps = [
  {
    title: 'Wybór kamienia',
    text: 'Selekcjonujemy płyty o najciekawszym rysunku i kolorze. To one decydują o charakterze deski.',
  },
  {
    title: 'Precyzyjne cięcie',
    text: 'Wycinamy formę: prostokąt, owal lub kształt przygotowany na indywidualne zamówienie.',
  },
  {
    title: 'Szlif krawędzi',
    text: 'Zaokrąglamy narożniki i ręcznie wygładzamy każdą krawędź, aż będzie miła w dotyku.',
  },
  {
    title: 'Wykończenie',
    text: 'Czyścimy, sprawdzamy każdy detal i starannie pakujemy — gotowe do użycia lub na prezent.',
  },
]

export function Process() {
  return (
    <section className={cx('theme-light', styles.process)}>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Jak powstają"
            title={
              <>
                Od surowej płyty <em>do Twojego stołu</em>
              </>
            }
          />
        </Reveal>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delay={index * 120} className={styles.step}>
                <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p>{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
