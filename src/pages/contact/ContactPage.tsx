import { site } from '@/content/site'
import { Layout } from '@/components/layout/Layout'
import { PageHero } from '@/components/ui/PageHero'
import { Reveal } from '@/components/ui/Reveal'
import { cx } from '@/utils/cx'
import { ContactForm } from './ContactForm'
import styles from './ContactPage.module.css'

export function ContactPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Kontakt"
        title="Porozmawiajmy o kamieniu"
        lead="Zamówienie z kolekcji, deska na wymiar czy prezent dla bliskiej osoby — odpowiadamy zwykle w ciągu jednego dnia roboczego."
        image="/images/deska-czarna-brazowe-zylki.jpg"
      />

      <section className={styles.section}>
        <div className={cx('container', styles.grid)}>
          <Reveal className={styles.info}>
            <dl className={styles.details}>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </dd>
              </div>
              <div>
                <dt>Telefon</dt>
                <dd>
                  <a href={`tel:${site.phone}`}>{site.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Pracownia</dt>
                <dd>{site.location}</dd>
              </div>
              <div>
                <dt>Social media</dt>
                <dd className={styles.socials}>
                  <a href={site.instagram} target="_blank" rel="noreferrer">
                    Instagram
                  </a>
                  <a href={site.facebook} target="_blank" rel="noreferrer">
                    Facebook
                  </a>
                </dd>
              </div>
            </dl>

            <img
              className={styles.image}
              src="/images/deski-na-stojaku.jpg"
              alt="Kamienne deski na drewnianym stojaku"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <Reveal delay={150} className={styles.formCard}>
            <h2 className={styles.formTitle}>Napisz do nas</h2>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
