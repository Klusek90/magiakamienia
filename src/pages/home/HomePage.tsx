import { Layout } from '@/components/layout/Layout'
import { About } from './sections/About'
import { Collection } from './sections/Collection'
import { ContactCta } from './sections/ContactCta'
import { Gallery } from './sections/Gallery'
import { Hero } from './sections/Hero'
import { Market } from './sections/Market'
import { Process } from './sections/Process'

// Kolejność sekcji strony głównej — żeby przestawić sekcję, przestaw linię.
export function HomePage() {
  return (
    <Layout>
      <Hero />
      <About />
      <Collection />
      <Process />
      <Gallery />
      <Market />
      <ContactCta />
    </Layout>
  )
}
