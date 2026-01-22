import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";

export default function Home() {
  return (
    <div className="relative min-h-screen animated-gradient noise-overlay">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-125 h-125 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 lg:flex">
        {/* Left Side - Fixed Profile Sidebar */}
        <Hero />

        {/* Right Side - Scrollable Content */}
        <main className="lg:w-[55%] lg:ml-[45%] min-h-screen px-6 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-24">
          <div className="max-w-2xl space-y-24">
            <About />
            <Projects />
            <Skills />
            <Education />

            {/* Footer */}
            <footer className="pt-8 pb-4">
              <div className="glass-card gradient-border rounded-xl p-4 text-center text-sm text-muted-foreground">
                <p>
                  Built with{" "}
                  <a
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Next.js
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Tailwind CSS
                  </a>
                  . Deployed on{" "}
                  <a
                    href="https://pages.github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    GitHub Pages
                  </a>
                  .
                </p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
