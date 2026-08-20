// Post-build step: renders the built SPA in a headless browser and bakes
// the resulting DOM into dist/index.html. Vite's client entry uses
// createRoot().render(...), which always replaces the container's children,
// so this is purely additive — real browsers behave identically, while
// crawlers that don't execute JavaScript (most AI crawlers) now see the
// actual page content instead of an empty <div id="root">.
import { writeFileSync } from "node:fs"
import { fileURLToPath } from "node:url"
import path from "node:path"
import puppeteer from "puppeteer"
import { preview } from "vite"

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)))
const distIndexPath = path.join(rootDir, "dist", "index.html")

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

      const html = await page.content()
      writeFileSync(distIndexPath, html)

      const bytes = Buffer.byteLength(html)
      console.log(`Prerendered dist/index.html (${(bytes / 1024).toFixed(1)} kB)`)
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
