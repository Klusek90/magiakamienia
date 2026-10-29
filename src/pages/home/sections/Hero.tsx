import { Button } from '@/components/ui/Button'
import { Eyebrow } from '@/components/ui/Eyebrow'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero}>
      <img className={styles.image} src="/images/deska-czarna-zlote-zylki.jpg" alt="" fetchPriority="high" />

      <div className="container">
        <div className={styles.content}>
          <Eyebrow>Ręcznie wykonane w Polsce</Eyebrow>
          <h1 className={styles.title}>
            Kamień, w którym <em>zapisano czas</em>
          </h1>
          <p className={styles.lead}>
            Deski, patery i dekoracje wycinane i wykańczane ręcznie. Każdy egzemplarz ma własny rysunek żyłek — nie
            znajdziesz dwóch takich samych.
          </p>
          <div className={styles.actions}>
            <Button href="#kolekcja">Zobacz kolekcję</Button>
            <Button href="/kontakt/" variant="outline">
              Napisz do nas
            </Button>
          </div>
        </div>
      </div>

      <a href="#o-nas" className={styles.scrollHint}>
        Przewiń
      </a>
    </section>
  )
}
