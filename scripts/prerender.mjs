// Manual/local dev tool — NOT run automatically during `npm run build`.
// Cloudflare Workers Builds' container is missing the shared libraries
// headless Chrome needs (libatk-1.0.so.0 and friends) and has no root/apt
// access to install them, so running a browser at build time isn't viable
// there. Instead: run `npm run prerender` locally after changing page copy.
// It builds the site, renders it in a local headless browser, extracts the
// rendered <div id="root">...</div> subtree, and splices that static
// snapshot into the *source* index.html. Vite's client entry uses
// createRoot().render(...), which always replaces the container's children,
// so this snapshot is purely a fallback for crawlers that don't execute
// JavaScript (most AI crawlers) — real browsers behave identically.
import { readFileSync, writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import puppeteer from "puppeteer"
import { preview } from "vite"

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const sourceIndexPath = path.join(rootDir, "index.html")

// Depth-aware scan for the </div> that closes the <div id="root"> opened at
// openStart — a plain indexOf("</div>") would stop at the first nested
// closing tag once the root already contains a previous snapshot.
function findMatchingDivClose(html, openStart) {
  const tagPattern = /<div\b[^>]*>|<\/div>/gi
  tagPattern.lastIndex = openStart
  let depth = 0
  let match
  while ((match = tagPattern.exec(html))) {
    if (match[0].startsWith("</")) {
      depth -= 1
      if (depth === 0) return match.index + match[0].length
    } else {
      depth += 1
    }
  }
  throw new Error("Unbalanced <div> tags while locating #root close")
}

async function main() {
  const server = await preview({
    root: rootDir,
    preview: { port: 0, strictPort: false },
  })
  const url = server.resolvedUrls.local[0]

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    })

    try {
      const page = await browser.newPage()
      await page.setViewport({ width: 1280, height: 900 })
      await page.goto(url, { waitUntil: "networkidle0" })
      await page.waitForSelector("#top h1", { timeout: 15000 })

      const rendered = await page.content()
      const rootStart = rendered.indexOf('<div id="root">')
      if (rootStart === -1) {
        throw new Error("Could not locate #root subtree in rendered output")
      }
      const rootEnd = findMatchingDivClose(rendered, rootStart)
      const snapshot = rendered.slice(rootStart, rootEnd).trim()

      const source = readFileSync(sourceIndexPath, "utf8")
      const sourceRootStart = source.indexOf('<div id="root">')
      if (sourceRootStart === -1) {
        throw new Error('Could not locate <div id="root"> in source index.html')
      }
      const sourceRootEnd = findMatchingDivClose(source, sourceRootStart)

      const updated =
        source.slice(0, sourceRootStart) + snapshot + source.slice(sourceRootEnd)
      writeFileSync(sourceIndexPath, updated)

      const bytes = Buffer.byteLength(snapshot)
      console.log(`Updated index.html #root snapshot (${(bytes / 1024).toFixed(1)} kB)`)
    } finally {
      await browser.close()
    }
  } finally {
    await new Promise((resolve) => server.httpServer.close(resolve))
  }
}

main().catch((err) => {
  console.error("Prerender failed:", err)
  process.exit(1)
})
