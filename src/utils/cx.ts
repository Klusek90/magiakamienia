// Łączy klasy CSS, pomijając puste: cx('a', isActive && 'b') → 'a b'
export function cx(...classNames: Array<string | false | null | undefined>) {
  return classNames.filter(Boolean).join(' ')
}
