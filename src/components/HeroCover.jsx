import Spline from '@splinetool/react-spline';
import { Rocket, Github } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative h-[85vh] md:h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950/80" />

      <div className="relative z-10 h-full">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 ring-1 ring-white/15 backdrop-blur">
              <Rocket className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-semibold tracking-tight">AutoDevOps One-Click</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80 pointer-events-auto">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#workflow" className="hover:text-white transition">How it works</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-2 ring-1 ring-white/15 transition hover:bg-white/15">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </nav>
        </header>

        <div className="mx-auto flex h-[calc(100%-76px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="pointer-events-none text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
            One-click deployments
            <span className="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">No YAML. No hassle.</span>
          </h1>
          <p className="pointer-events-none mt-5 max-w-2xl text-balance text-base text-white/80 sm:text-lg">
            Connect your GitHub repo and ship production-grade infrastructure, CI, and CD in seconds. Automated previews, zero-config pipelines, and environment management built in.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row pointer-events-auto">
            <a href="#workflow" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 font-medium text-neutral-900 shadow-lg shadow-black/20 transition hover:opacity-90">
              Get Started Free
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/10 px-5 py-3 font-medium text-white ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
