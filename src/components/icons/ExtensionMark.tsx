import * as React from "react"

// A generic browser-extension glyph (puzzle piece) used to label the Chrome
// Web Store CTA — deliberately not a reproduction of any browser's own
// trademarked logo.
function ExtensionMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M9.5 3.5a1.75 1.75 0 0 1 3.5 0V5h2.25A1.25 1.25 0 0 1 16.5 6.25V8.5h1.25a1.75 1.75 0 0 1 0 3.5H16.5v2.25a1.25 1.25 0 0 1-1.25 1.25H12.5v1.25a1.75 1.75 0 1 1-3.5 0V15.5H6.75A1.25 1.25 0 0 1 5.5 14.25V12H4.25a1.75 1.75 0 0 1 0-3.5H5.5V6.25A1.25 1.25 0 0 1 6.75 5H9.5Z" />
    </svg>
  )
}

export { ExtensionMark }
