import { useEffect, useState } from 'react'
import { navLinks, site } from '@/content/site'
import { Logo } from '@/components/ui/Logo'
import { cx } from '@/utils/cx'
import styles from './Header.module.css'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Otwarte menu mobilne blokuje przewijanie strony i zamyka się klawiszem Esc.
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    if (!isMenuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={cx(styles.header, (isScrolled || isMenuOpen) && styles.solid)}>
      <div className={cx('container', styles.inner)}>
        <a href="/" aria-label={`${site.name} — strona główna`} onClick={closeMenu}>
          <Logo />
        </a>

        <nav className={styles.desktopNav} aria-label="Główna nawigacja">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span className={styles.menuIcon} data-open={isMenuOpen} />
        </button>
      </div>

      <nav id="mobile-menu" className={styles.mobileNav} data-open={isMenuOpen} inert={!isMenuOpen} aria-label="Menu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.mobileLink} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <div className={styles.mobileContact}>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`tel:${site.phone}`}>{site.phone}</a>
        </div>
      </nav>
    </header>
  )
}
