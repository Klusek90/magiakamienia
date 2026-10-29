import { Eyebrow } from './Eyebrow'
import { StoneVeins } from './StoneVeins'
import styles from './PageHero.module.css'

type PageHeroProps = {
  eyebrow: string
  title: string
  lead?: string
  image?: string
}

// Nagłówek podstron (kontakt, polityka prywatności).
export function PageHero({ eyebrow, title, lead, image }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      {image ? <img className={styles.image} src={image} alt="" fetchPriority="high" /> : <StoneVeins />}
      <div className="container">
        <div className={styles.content}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className={styles.title}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
        </div>
      </div>
    </section>
  )
}
