import { FeatureTiles } from "@/components/sections/FeatureTiles"
import { Footer } from "@/components/sections/Footer"
import { Hero } from "@/components/sections/Hero"
import { HowItWorks } from "@/components/sections/HowItWorks"
import { Install } from "@/components/sections/Install"
import { Manifesto } from "@/components/sections/Manifesto"
import { Platforms } from "@/components/sections/Platforms"

function App() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Platforms />
      <FeatureTiles />
      <Manifesto />
      <Install />
      <Footer />
    </main>
  )
}

export default App
