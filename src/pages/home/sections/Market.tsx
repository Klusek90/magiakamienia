import { site } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cx } from '@/utils/cx'
import styles from './Market.module.css'

export function Market() {
  return (
    <section className={cx('theme-light', styles.market)}>
      <div className={cx('container', styles.grid)}>
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Spotkajmy się"
              title={
                <>
                  Dotknij kamienia <em>na targach rękodzieła</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={120} className={styles.body}>
            <p>
              Kamień najlepiej poznać dotykiem. Regularnie wystawiamy się na lokalnych targach i jarmarkach — możesz
              obejrzeć całą kolekcję, wybrać ulubiony wzór i porozmawiać o zamówieniu na wymiar.
            </p>
            <p>Najbliższe terminy ogłaszamy w mediach społecznościowych.</p>
          </Reveal>
          <Reveal delay={240} className={styles.actions}>
            <Button href="/kontakt/" variant="dark">
              Zapytaj o termin
            </Button>
            <a className={styles.link} href={site.instagram} target="_blank" rel="noreferrer">
              Instagram →
            </a>
          </Reveal>
        </div>

        <Reveal className={styles.media}>
          <img
            src="/images/targi-deski-dynie.jpg"
            alt="Kamienne deski i dynie na stoisku targowym"
            loading="lazy"
            decoding="async"
          />
        </Reveal>
      </div>
    </section>
  )
}
