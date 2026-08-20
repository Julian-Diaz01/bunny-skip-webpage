import macbookMock from "@/assets/illustrations/mackbook-mock.png"
import streamingPortalMock from "@/assets/illustrations/streaming-portal-mock.svg"
import bunnySkipApp from "@/assets/illustrations/bunny-skip-app.png"
import { cn } from "@/lib/utils"

interface LaptopBrowserMockProps {
  className?: string
}

function LaptopBrowserMock({ className }: LaptopBrowserMockProps) {
  return (
    <div
      role="img"
      aria-label="Illustration of a laptop computer with a generic browser window open on its screen, playing a video with the Bunny Skip rules panel open and a glowing auto-skip button — showing Bunny Skip running on a real computer, not a screenshot of any device or platform."
      className={cn("relative aspect-[3944/2564]", className)}
    >
      <img
        src={streamingPortalMock}
        alt=""
        aria-hidden="true"
        className="absolute rounded-[2%] object-fill"
        style={{
          left: "10.5%",
          top: "10.4%",
          width: "78.8%",
          height: "79%",
        }}
      />
      <img
        src={bunnySkipApp}
        alt=""
        aria-hidden="true"
        className="absolute rounded-[3%] object-cover shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
        style={{
          left: "50%",
          top: "25%",
          width: "32%",
          height: "40%",
        }}
      />
      <img
        src={macbookMock}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 size-full"
      />
    </div>
  )
}

export { LaptopBrowserMock }
