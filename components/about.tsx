"use client";

export function About() {
  return (
    <section id="about" className="py-20 scroll-mt-20">
      <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-8">
        About
      </h2>

      <div className="space-y-4 text-muted-foreground leading-relaxed">
        <p>
          I&apos;m a Computer Engineering student at the{" "}
          <span className="text-foreground font-medium">
            Technological Institute of the Philippines
          </span>
          , specializing in the Data Science track. My passion lies at the
          intersection of{" "}
          <span className="text-foreground font-medium">
            backend development
          </span>{" "}
          and{" "}
          <span className="text-foreground font-medium">
            machine learning
          </span>
          , where I build systems that process and analyze data at scale.
        </p>

        <p>
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

        <p>
          When I&apos;m not coding, I&apos;m exploring new technologies,
          contributing to open-source projects, or diving into research papers
          on machine learning and distributed systems.
        </p>
      </div>
    </section>
  );
}
