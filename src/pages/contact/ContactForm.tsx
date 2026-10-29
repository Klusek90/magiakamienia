import { useState, type FormEvent } from 'react'
import { site } from '@/content/site'
import { Button } from '@/components/ui/Button'
import styles from './ContactForm.module.css'

const topics = ['Zamówienie z kolekcji', 'Deska na wymiar', 'Prezent / zamówienie firmowe', 'Inne']

// Formularz nie potrzebuje serwera: otwiera program pocztowy z gotową wiadomością.
// Żeby wiadomości wysyłały się bez tego kroku, podmień handleSubmit na usługę formularzy (np. Formspree).
export function ContactForm() {
  const [isSent, setIsSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const subject = `${data.get('topic')} — ${data.get('name')}`
    const body = `${data.get('message')}\n\n${data.get('name')}\n${data.get('email')}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setIsSent(true)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Imię</label>
          <input id="name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="topic">Temat</label>
        <select id="topic" name="topic">
          {topics.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Wiadomość</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" required />
        <span>
          Wyrażam zgodę na przetwarzanie moich danych w celu odpowiedzi na wiadomość. Szczegóły w{' '}
          <a href="/polityka-prywatnosci/">polityce prywatności</a>.
        </span>
      </label>

      <Button type="submit">Wyślij wiadomość</Button>

      {isSent && (
        <p className={styles.status} role="status">
          Otworzyliśmy Twój program pocztowy z gotową wiadomością. Jeśli nic się nie stało, napisz bezpośrednio na{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
    </form>
  )
}
