import { site } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StoneVeins } from '@/components/ui/StoneVeins'
import styles from './ContactCta.module.css'

export function ContactCta() {
  return (
    <section className={styles.cta}>
      <StoneVeins />
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Zamówienia indywidualne"
            title={
              <>
                Szukasz wyjątkowego prezentu <em>albo deski na wymiar?</em>
              </>
            }
            intro="Napisz, czego potrzebujesz — dobierzemy kamień, kształt i rozmiar. Przygotowujemy też zestawy prezentowe i zamówienia dla firm."
            align="center"
          />
        </Reveal>
        <Reveal delay={150} className={styles.actions}>
          <Button href="/kontakt/">Napisz do nas</Button>
          <Button href={`tel:${site.phone}`} variant="outline">
            Zadzwoń
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
