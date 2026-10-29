import { site } from '@/content/site'
import { Layout } from '@/components/layout/Layout'
import { PageHero } from '@/components/ui/PageHero'
import styles from './PrivacyPage.module.css'

// Szablon polityki — przed publikacją uzupełnij dane w nawiasach kwadratowych i zweryfikuj treść.
export function PrivacyPage() {
  return (
    <Layout>
      <PageHero eyebrow="Informacje prawne" title="Polityka prywatności" lead="Ostatnia aktualizacja: [DATA]" />

      <section className={styles.section}>
        <article className="container">
          <div className={styles.content}>
            <h2>1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych jest [NAZWA FIRMY], [ADRES], NIP: [NIP] (dalej: „Administrator”).
              Kontakt w sprawach danych osobowych: <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>

            <h2>2. Jakie dane przetwarzamy</h2>
            <p>Przetwarzamy wyłącznie dane, które przekazujesz nam samodzielnie, w szczególności:</p>
            <ul>
              <li>imię i adres e-mail podane w formularzu kontaktowym lub w wiadomości e-mail,</li>
              <li>numer telefonu, jeśli się z nami kontaktujesz telefonicznie,</li>
              <li>dane potrzebne do realizacji zamówienia (np. adres dostawy).</li>
            </ul>

            <h2>3. Cele i podstawy przetwarzania</h2>
            <ul>
              <li>odpowiedź na wiadomość — art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes),</li>
              <li>realizacja zamówienia — art. 6 ust. 1 lit. b RODO (wykonanie umowy),</li>
              <li>obowiązki księgowe i podatkowe — art. 6 ust. 1 lit. c RODO (obowiązek prawny).</li>
            </ul>

            <h2>4. Okres przechowywania</h2>
            <p>
              Dane przechowujemy przez czas potrzebny do obsługi zapytania lub zamówienia, a następnie przez okres
              wymagany przepisami prawa (np. podatkowego).
            </p>

            <h2>5. Odbiorcy danych</h2>
            <p>
              Dane mogą być przekazywane wyłącznie podmiotom wspierającym nas technicznie (hosting strony, poczta
              e-mail) oraz firmom kurierskim — w zakresie niezbędnym do realizacji zamówienia.
            </p>

            <h2>6. Twoje prawa</h2>
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia
              oraz wniesienia sprzeciwu. Przysługuje Ci także prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych
              Osobowych.
            </p>

            <h2>7. Pliki cookies i usługi zewnętrzne</h2>
            <p>
              Strona nie używa plików cookies do celów marketingowych ani analitycznych. Czcionki ładowane są z usługi
              Google Fonts, co wiąże się z przekazaniem adresu IP do Google. [UZUPEŁNIJ, jeśli dodasz analitykę lub
              inne narzędzia.]
            </p>

            <h2>8. Zmiany polityki</h2>
            <p>
              Polityka może być aktualizowana. Aktualna wersja jest zawsze dostępna na tej stronie.
            </p>
          </div>
        </article>
      </section>
    </Layout>
  )
}
