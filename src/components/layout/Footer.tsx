import { navLinks, site } from '@/content/site'
import { Logo } from '@/components/ui/Logo'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <Logo />
            <p className={styles.tagline}>{site.tagline}</p>
          </div>

          <div>
            <h2 className={styles.title}>Nawigacja</h2>
            <ul className={styles.list}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.title}>Kontakt</h2>
            <ul className={styles.list}>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone}`}>{site.phone}</a>
              </li>
              <li>{site.location}</li>
            </ul>
          </div>

          <div>
            <h2 className={styles.title}>Obserwuj</h2>
            <ul className={styles.list}>
              <li>
                <a href={site.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noreferrer">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} {site.name}. Wszystkie prawa zastrzeżone.
          </p>
          <a href="/polityka-prywatnosci/">Polityka prywatności</a>
        </div>
      </div>
    </footer>
  )
}
