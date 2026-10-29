import styles from './StoneVeins.module.css'

// Dekoracyjne, świecące żyłki jak na tle logo. Rozciąga się na cały rodzica (position: relative).
export function StoneVeins() {
  return (
    <svg className={styles.veins} viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <filter id="vein-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g filter="url(#vein-glow)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
        <path strokeWidth="2" d="M-20 120 L110 180 L170 250 L250 290 L290 410 L370 460 L410 590 L510 670 L550 810 L610 920" />
        <path strokeWidth="1" d="M290 410 L210 470 L180 560 L90 610" />
        <path strokeWidth="1" d="M410 590 L470 560 L560 580" />
        <path strokeWidth="2" d="M1460 60 L1340 150 L1290 240 L1180 290 L1120 410 L1020 460 L980 550 L880 630 L850 760" />
        <path strokeWidth="1" d="M1120 410 L1210 450 L1260 540 L1360 580 L1460 570" />
        <path strokeWidth="1" d="M1290 240 L1240 160 L1250 60 L1210 -20" />
      </g>
    </svg>
  )
}
