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
          I&apos;m a Computer Engineering graduate from{" "}
          <span className="text-foreground font-semibold px-1.5 py-0.5 rounded bg-primary/10 border border-primary/20">
            Technological Institute of the Philippines – Manila
          </span>
          , specializing in the Data Science track. I'm well versed in{" "}
          <span className="text-primary font-medium">
            Full-Stack Software Engineering
          </span>
          ,{" "}
          <span className="text-primary font-medium">
            AI/Machine Learning
          </span>
          , and{" "}
          <span className="text-primary font-medium">
            Embedded Systems
          </span>
          —building scalable, data-driven systems that solve real-world technical challenges.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Recently, as a Web Developer Intern at Xtreme Offshore Outsourcing, I enhanced production healthcare workflows using Vue.js, Node.js, and PostgreSQL. Beyond full-stack development, my technical work ranges from computer vision (CNN-LSTM action recognition) and acoustic signal processing for industrial anomaly detection to real-time WebSocket messaging and automated IoT control hardware.
        </p>

        <p className="text-muted-foreground leading-relaxed">
          Whether optimizing deep learning models, engineering dynamic web applications, or designing hardware-software control loops, I thrive on building end-to-end solutions that are efficient, robust, and impactful.
        </p>
      </div>
    </section>
  );
}