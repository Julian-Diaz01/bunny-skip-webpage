function AuraGrain() {
  return (
    <div className="aura-grain" aria-hidden="true">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.25"
            numOctaves="2"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="0.181 0.608 0.061 0 0.075
                  0.181 0.608 0.061 0 0.075
                  0.181 0.608 0.061 0 0.075
                  0     0     0     1 0"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
    </div>
  )
}

export { AuraGrain }
