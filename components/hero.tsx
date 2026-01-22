"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/OdysseusLim",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/jhndyssslm/",
    label: "LinkedIn",
  },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 lg:py-0">
      <div className="space-y-6">
        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/10">
          <Image
            src="/profile.jpeg"
            alt="John Odysseus Lim"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="space-y-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            John Odysseus Lim
          </h1>
          <p className="text-xl md:text-2xl font-medium text-primary">
            Backend Developer & Data Scientist
          </p>
        </div>

        <p className="text-muted-foreground max-w-lg leading-relaxed">
          I build scalable backend systems and data pipelines. Specializing in
          Python, Django, real-time WebSocket applications, and machine learning
          solutions for complex problems.
        </p>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>Imus City, Cavite, Philippines</span>
          </div>
          <a
            href="mailto:jhndysslm@protonmail.com"
            className="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4 text-primary" />
            <span>jhndysslm@protonmail.com</span>
          </a>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <span>+63 915 596 4194</span>
          </div>
        </div>

        <nav className="pt-8">
          <ul className="space-y-3 text-sm font-medium uppercase tracking-wider">
            <li>
              <a
                href="#about"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all" />
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all" />
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all" />
                Skills
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <span className="w-8 h-px bg-muted-foreground group-hover:w-16 group-hover:bg-primary transition-all" />
                Education
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4 pt-6">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <link.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
