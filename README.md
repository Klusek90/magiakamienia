# Magia Kamienia — strona wizytówka

Vite + React + TypeScript. Każda podstrona to osobny plik HTML, więc strona działa na każdym zwykłym hostingu (bez konfiguracji serwera).

## Uruchomienie

```bash
npm install
npm run dev       # podgląd na http://localhost:5173
npm run build     # gotowa strona w folderze dist/ — ten folder wrzucasz na hosting
```

## Gdzie co jest

```
index.html                    strona główna (tytuł i opis dla Google)
kontakt/index.html            podstrona /kontakt/
polityka-prywatnosci/         podstrona /polityka-prywatnosci/
public/images/                zdjęcia — podmień plik o tej samej nazwie albo zmień ścieżkę w kodzie

src/
  content/
    site.ts                   e-mail, telefon, social media, menu
    products.ts               kafelki w sekcji „Kolekcja”
    gallery.ts                zdjęcia w sekcji „Galeria”
  styles/
    tokens.css                kolory, czcionki, odstępy — zmiana tu działa na całą stronę
    global.css                style bazowe
  components/
    layout/                   nagłówek, stopka, wspólny układ
    ui/                       małe klocki: przycisk, nagłówek sekcji, logo itd.
  pages/
    home/sections/            sekcje strony głównej — jeden plik .tsx + jeden .module.css na sekcję
    contact/                  strona kontaktu i formularz
    privacy/                  polityka prywatności
```

Zasada: listy, które będą się zmieniać (produkty, galeria, dane kontaktowe), są w `src/content`. Pozostałe teksty są bezpośrednio w pliku sekcji.

## Do uzupełnienia przed publikacją

- dane w nawiasach kwadratowych: `[EMAIL]`, `[TELEFON]`, `[MIASTO]` w `src/content/site.ts` oraz `[NAZWA FIRMY]`, `[ADRES]`, `[NIP]`, `[DATA]` w polityce prywatności,
- linki do Instagrama i Facebooka w `src/content/site.ts`,
- znak logo w `src/components/ui/Logo.tsx` i `public/favicon.svg` to uproszczony rysunek — najlepiej podmienić na wektor (SVG) od grafika,
- zdjęcia: obecne są w pełnej rozdzielczości z telefonu; warto je zmniejszyć (np. do 1600 px szerokości) i skompresować.

## Nowa podstrona

1. Skopiuj `kontakt/index.html` do nowego folderu, zmień `<title>` i ścieżkę w `<script>`.
2. Utwórz `src/pages/<nazwa>/main.tsx` i komponent strony (wzór: `src/pages/privacy`).
3. Dopisz plik HTML do `build.rollupOptions.input` w `vite.config.ts`.
