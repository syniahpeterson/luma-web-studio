import Button from "../../ui/Button";

function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      {/* Ambient purple glow */}
      <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-96 w-96 rounded-full bg-purple-700/10 blur-3xl" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black 0%, transparent 85%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 85%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Hero Content */}
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/5 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />

              <span className="text-xs font-medium uppercase tracking-[0.18em] text-purple-300">
                Luma Web Studio
              </span>
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Websites built to move your business forward.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#b7b7be] sm:text-xl">
              We design and develop modern, high-performing websites that help
              businesses build credibility, connect with customers, and grow
              online.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Start a Project</Button>

              <Button to="/work" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Visual Detail */}
          <div className="hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Outer glow */}
              <div className="absolute inset-8 rounded-full bg-purple-500/10 blur-3xl" />

              {/* Main visual */}
              <div className="absolute inset-10 rounded-3xl border border-white/10 bg-[#161619]/80 backdrop-blur-sm">
                <div className="flex h-full flex-col justify-between p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#7d7d85]">
                      Digital Experience
                    </span>

                    <span className="h-2 w-2 rounded-full bg-purple-400" />
                  </div>

                  <div>
                    <div className="h-2 w-2/3 rounded-full bg-white/10" />

                    <div className="mt-3 h-2 w-1/2 rounded-full bg-white/5" />

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="h-24 rounded-xl border border-white/10 bg-white/[0.03]" />
                      <div className="h-24 rounded-xl border border-purple-400/20 bg-purple-400/[0.06]" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs text-[#7d7d85]">
                      Design • Develop • Launch
                    </span>

                    <span className="text-xs font-medium text-purple-300">
                      Luma
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative orbit */}
              <div className="absolute inset-4 rounded-full border border-purple-400/10" />

              <div className="absolute right-2 top-1/4 h-3 w-3 rounded-full border border-purple-300/50 bg-purple-400/20" />

              <div className="absolute bottom-1/4 left-2 h-2 w-2 rounded-full bg-purple-400/60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
