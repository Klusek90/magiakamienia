import { products } from '@/content/products'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import styles from './Collection.module.css'

export function Collection() {
  return (
    <section id="kolekcja" className={styles.collection}>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Kolekcja"
            title={
              <>
                Każda deska jest <em>jedyna w swoim rodzaju</em>
              </>
            }
            intro="Wykonujemy formy z kolekcji oraz zamówienia na wymiar — w wybranym kształcie, kolorze i rozmiarze."
          />
        </Reveal>

        <div className={styles.grid}>
          {products.map((product, index) => (
            <Reveal key={product.name} delay={(index % 3) * 120}>
              <article className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={product.image} alt={product.alt} loading="lazy" decoding="async" />
                </div>
                <p className={styles.number}>{String(index + 1).padStart(2, '0')}</p>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
