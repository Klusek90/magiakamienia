import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { cx } from '@/utils/cx'
import styles from './About.module.css'

const features = [
  {
    title: 'Ręcznie cięte',
    text: 'Każdy element wycinamy, szlifujemy i wykańczamy ręcznie, z dbałością o krawędzie i detale.',
  },
  {
    title: 'Jedyne w swoim rodzaju',
    text: 'Rysunek żyłek jest niepowtarzalny. Twoja deska nie będzie miała bliźniaczki.',
  },
  {
    title: 'Na lata',
    text: 'Kamień jest twardy, odporny na wysoką temperaturę i bardzo łatwy w pielęgnacji.',
  },
]

export function About() {
  return (
    <section id="o-nas" className={cx('theme-light', styles.about)}>
      <div className={cx('container', styles.grid)}>
        <Reveal className={styles.media}>
          <img
            src="/images/kolekcja-desek.jpg"
            alt="Kolekcja kamiennych desek w różnych kolorach i kształtach"
            loading="lazy"
            decoding="async"
          />
        </Reveal>

        <div className={styles.text}>
          <Reveal>
            <SectionHeading
              eyebrow="O pracowni"
              title={
                <>
                  Rękodzieło, które <em>czuć w dłoni</em>
                </>
              }
            />
          </Reveal>
          <Reveal delay={120} className={styles.body}>
            <p>
              Magia Kamienia to niewielka pracownia, w której kamień zamienia się w przedmioty codziennego użytku.
              Każdą deskę wycinamy, szlifujemy i wykańczamy ręcznie — bez pośpiechu i bez kompromisów.
            </p>
            <p>
              Wybieramy płyty o najpiękniejszym rysunku: głęboką czerń ze złotymi żyłkami, mleczną biel przeciętą
              rdzawą nitką, ciepłe odcienie miedzi. Powstają z nich przedmioty, które cieszą oko przy stole i służą
              latami.
            </p>
          </Reveal>
        </div>
      </div>

      <div className={cx('container', styles.features)}>
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 120} className={styles.feature}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p>{feature.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
