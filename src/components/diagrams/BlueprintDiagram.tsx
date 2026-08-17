/**
 * Hand-authored blueprint-style schematic of the extension's mechanism:
 * a stored selector matches the page, the matched element is clicked once,
 * and chrome.storage.onChanged keeps the running content script in sync the
 * moment a rule is edited — no reload, no redeploy. Monoline strokes, one
 * weight, blueprint grid + registration ticks, in the sun/paper palette
 * against night. Original synthetic diagram, not a screenshot of any real
 * interface.
 */
function BlueprintDiagram() {
  return (
    <svg
      viewBox="0 0 640 780"
      role="img"
      aria-label="Blueprint diagram: a stored selector rule matches an element on the page, Bunny Skip clicks it once, and chrome.storage.onChanged keeps the rule live without a reload."
      className="h-auto w-full"
    >
      <defs>
        <pattern id="bp-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path
            d="M32 0H0V32"
            fill="none"
            stroke="var(--color-night-border)"
            strokeWidth="1"
          />
        </pattern>
        <marker
          id="bp-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M0 0L10 5L0 10Z" fill="var(--color-sun)" />
        </marker>
      </defs>

      <rect x="0" y="0" width="640" height="780" fill="url(#bp-grid)" />

      {/* registration corners */}
      {[
        [16, 16],
        [608, 16],
        [16, 748],
        [608, 748],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`} stroke="var(--color-sun-border)" strokeWidth="1.5">
          <path d={`M${x - 12} ${y}H${x + 12}`} />
          <path d={`M${x} ${y - 12}V${y + 12}`} />
        </g>
      ))}

      {/* connecting spine */}
      <path
        d="M320 148V262M320 358V472"
        stroke="var(--color-sun)"
        strokeWidth="2"
        strokeDasharray="3 7"
        markerEnd="url(#bp-arrow)"
      />

      {/* Node 1 — selector match */}
      <g transform="translate(320 84)">
        <circle r="58" fill="none" stroke="var(--color-sun)" strokeWidth="2" />
        <circle r="58" fill="none" stroke="var(--color-sun)" strokeWidth="1" strokeDasharray="1 6" transform="scale(1.28)" />
        <path
          d="M-20 0h10M10 0h10M0 -20v10M0 10v10"
          stroke="var(--color-sun)"
          strokeWidth="2"
        />
        <circle r="4" fill="var(--color-sun)" />
        <text
          y="94"
          textAnchor="middle"
          className="fill-paper font-display text-[15px] font-semibold uppercase"
          style={{ letterSpacing: "0.06em" }}
        >
          01 — Rule matches
        </text>
        <text
          y="116"
          textAnchor="middle"
          className="fill-paper/55 font-body text-[13px] italic"
        >
          stored selector, not code
        </text>
      </g>

      {/* Node 2 — click */}
      <g transform="translate(320 320)">
        <circle r="58" fill="none" stroke="var(--color-sun)" strokeWidth="2" />
        <circle r="26" fill="none" stroke="var(--color-sun)" strokeWidth="1.5" opacity="0.6" />
        <circle r="40" fill="none" stroke="var(--color-sun)" strokeWidth="1" strokeDasharray="1 6" opacity="0.5" />
        <path
          d="M-4 -18 L-4 14 L4 8 L10 20 L16 17 L10 5 L20 4 Z"
          fill="var(--color-sun)"
        />
        <text
          y="94"
          textAnchor="middle"
          className="fill-paper font-display text-[15px] font-semibold uppercase"
          style={{ letterSpacing: "0.06em" }}
        >
          02 — Clicks once
        </text>
        <text
          y="116"
          textAnchor="middle"
          className="fill-paper/55 font-body text-[13px] italic"
        >
          same as you would
        </text>
      </g>

      {/* Node 3 — stays live */}
      <g transform="translate(320 556)">
        <circle r="58" fill="none" stroke="var(--color-sun)" strokeWidth="2" />
        <circle r="58" fill="none" stroke="var(--color-sun)" strokeWidth="1" strokeDasharray="1 6" transform="scale(1.28)" />
        <path
          d="M-22 0a22 22 0 1 1 6 15"
          fill="none"
          stroke="var(--color-sun)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path d="M-16 21 L-16 9 L-4 9 Z" fill="var(--color-sun)" />
        <text
          y="94"
          textAnchor="middle"
          className="fill-paper font-display text-[15px] font-semibold uppercase"
          style={{ letterSpacing: "0.06em" }}
        >
          03 — Stays live
        </text>
        <text
          y="116"
          textAnchor="middle"
          className="fill-paper/55 font-body text-[13px] italic"
        >
          chrome.storage.onChanged
        </text>
      </g>

      <text
        x="320"
        y="732"
        textAnchor="middle"
        className="fill-paper/35 font-body text-[11px] uppercase"
        style={{ letterSpacing: "0.18em" }}
      >
        fig. 01 — match / click / sync loop
      </text>
    </svg>
  )
}

export { BlueprintDiagram }
