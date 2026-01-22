"use client";

import { User } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <User className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
          About
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      <div className="glass-card gradient-border rounded-2xl p-6 md:p-8 space-y-6">
        <p className="text-muted-foreground leading-relaxed">
          I&apos;m a Computer Engineering student at the{" "}
          <span className="text-foreground font-semibold px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
            Technological Institute of the Philippines
          </span>
          , specializing in the Data Science track. My passion lies at the
          intersection of{" "}
          <span className="text-primary font-medium">
            backend development
          </span>{" "}
          and{" "}
          <span className="text-primary font-medium">
            machine learning
          </span>
          , where I build systems that process and analyze data at scale.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          I specialize in building{" "}
          <span className="text-foreground font-medium">
            real-time applications
          </span>{" "}
          using Django Channels and WebSockets, creating responsive messaging
          systems with features like presence tracking and typing indicators. My
          work spans from developing{" "}
          <span className="text-foreground font-medium">web crawlers</span> for
          AI regulation research to implementing{" "}
          <span className="text-foreground font-medium">
            predictive models
          </span>{" "}
          for epidemiological data.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          When I&apos;m not coding, I&apos;m exploring new technologies,
          contributing to open-source projects, or diving into research papers
          on machine learning and distributed systems.
        </p>
      </div>
    </section>
  );
}
