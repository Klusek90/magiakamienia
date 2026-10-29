import { galleryImages } from '@/content/gallery'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import styles from './Gallery.module.css'

export function Gallery() {
  return (
    <section id="galeria" className={styles.gallery}>
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Galeria"
            title={
              <>
                Na co dzień <em>i od święta</em>
              </>
            }
            align="center"
          />
        </Reveal>

        <div className={styles.grid}>
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={(index % 3) * 100} className={styles.item}>
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
