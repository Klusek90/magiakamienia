// Kafelki w sekcji "Kolekcja" na stronie głównej. Zdjęcia leżą w public/images.
export type Product = {
  name: string
  description: string
  image: string
  alt: string
}

export const products: Product[] = [
  {
    name: 'Deski do krojenia',
    description: 'Twarda, gładka powierzchnia, która nie chłonie zapachów. Do pieczywa, warzyw i ziół.',
    image: '/images/deska-czarna-brazowe-zylki.jpg',
    alt: 'Czarna kamienna deska z brązowymi żyłkami',
  },
  {
    name: 'Deski do serwowania',
    description: 'Na sery, wędliny i przekąski. Kamień dłużej utrzymuje chłód podanych potraw.',
    image: '/images/deska-biala-rdzawe-zylki.jpg',
    alt: 'Biała kamienna deska z rdzawymi żyłkami',
  },
  {
    name: 'Patery owalne',
    description: 'Miękka linia owalu i wyrazista żyłka. Elegancka oprawa dla deserów i pralinek.',
    image: '/images/patera-owalna-biala.jpg',
    alt: 'Owalna biała patera z kamienia z brązową żyłką',
  },
  {
    name: 'Kamień rdzawy',
    description: 'Ciepły, ziemisty odcień przypominający patynę metalu. Pięknie gra z darami jesieni.',
    image: '/images/grzyby-na-desce-rdzawej.jpg',
    alt: 'Grzyby leśne na rdzawej kamiennej desce',
  },
  {
    name: 'Wąskie deski',
    description: 'Smukły format na tapas i sushi albo podstawka pod dzbanek i karafkę.',
    image: '/images/deska-czarna-miedziane-linie.jpg',
    alt: 'Wąska czarna deska z miedzianymi liniami',
  },
  {
    name: 'Dekoracje stołu',
    description: 'Kamienna baza pod świece i stroiki. Odświętny akcent na każdą okazję.',
    image: '/images/swieczki-na-desce.jpg',
    alt: 'Dwie białe świece i stroik na czarnej kamiennej desce',
  },
]
