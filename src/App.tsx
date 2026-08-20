import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Manifesto } from "@/components/sections/Manifesto"
import { Nav } from "@/components/sections/Nav"
import { Platforms } from "@/components/sections/Platforms"

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
          <Manifesto />
        <Platforms />
      </main>
      <Footer />
    </>
  )
}

export default App
