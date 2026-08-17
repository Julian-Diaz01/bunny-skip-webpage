import { Button } from '@/components/ui/button'

// Placeholder scaffold — page content/sections are built by a later card
// (build-landing-page). This just proves the stack is wired: Vite + React +
// TS + Tailwind + shadcn/ui, using the paper / night / sun brand tokens.
function App() {
  return (
    <main className="flex min-h-svh flex-col">
      <section className="flex flex-1 flex-col items-center justify-center gap-4 bg-paper px-6 py-16 text-paper-foreground">
        <h1 className="text-4xl font-medium">Bunny Skip</h1>
        <p className="max-w-md text-center font-body">
          Scaffold placeholder — paper panel.
        </p>
        <Button>Chrome Web Store</Button>
      </section>
      <section className="flex flex-1 flex-col items-center justify-center gap-4 bg-night px-6 py-16 text-night-foreground">
        <h2 className="text-3xl font-medium">How it works</h2>
        <p className="max-w-md text-center font-body">
          Scaffold placeholder — night panel.
        </p>
      </section>
      <section className="flex flex-1 flex-col items-center justify-center gap-4 bg-sun px-6 py-16 text-sun-foreground">
        <h2 className="text-3xl font-medium">Privacy manifesto</h2>
        <p className="max-w-md text-center font-body">
          Scaffold placeholder — sun panel.
        </p>
      </section>
    </main>
  )
}

export default App
