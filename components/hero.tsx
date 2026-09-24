"use client";

import Image from "next/image";
import { Github, Linkedin, Mail, MapPin, Phone, Terminal, Printer } from "lucide-react";

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

const contactInfo = [
  { icon: MapPin, text: "Imus City, Cavite, Philippines" },
  { icon: Mail, text: "jhndyssslm@protonmail.com", href: "mailto:jhndyssslm@protonmail.com" },
  { icon: Phone, text: "+63 915 596 4194", href: "tel:+639155964194" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

export function Hero() {
  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:w-[45%] lg:h-screen flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-16 lg:py-0">
      <div className="space-y-8 max-w-md mx-auto lg:mx-0 lg:ml-auto lg:mr-12">
        
        {/* Profile Picture & Print Card Row */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="relative group shrink-0">
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 via-primary/20 to-primary/50 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/40 shadow-xl shadow-primary/20">
              <Image
                src="/profile.jpeg"
                alt="John Odysseus Lim"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          <button
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-primary hover:text-primary-foreground bg-primary/10 hover:bg-primary border border-primary/30 rounded-xl transition-all duration-300 cursor-pointer shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Save / Print PDF</span>
          </button>
        </div>

        {/* Name and Title */}
        <div className="space-y-3 text-center lg:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            John Odysseus Lim
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-primary">
            <Terminal className="w-5 h-5 shrink-0" />
            <span className="text-lg md:text-xl font-medium">
              Computer Engineer
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-base leading-relaxed text-center lg:text-left">
          Computer Engineering graduate with hands-on full-stack internship experience in production web applications. Specializing in Python, deep learning architectures, real-time WebSockets, and embedded hardware integration.
        </p>

        {/* Navigation - Desktop only */}
        <nav className="hidden lg:block pt-4">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <span className="w-8 h-px bg-muted-foreground/50 group-hover:w-16 group-hover:bg-primary transition-all duration-300" />
                  <span className="text-sm font-medium tracking-wide uppercase">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Info */}
        <div className="space-y-3 pt-4">
          {contactInfo.map((item) => (
            <div key={item.text} className="flex items-center justify-center lg:justify-start gap-3 text-sm text-muted-foreground">
              <div className="w-8 h-8 rounded-lg bg-card/60 border border-border/50 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-primary/70" />
              </div>
              {item.href ? (
                <a href={item.href} className="hover:text-primary transition-colors">
                  {item.text}
                </a>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center lg:justify-start gap-3 pt-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
              aria-label={link.label}
            >
              <div className="absolute -inset-1 bg-primary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center gap-2 glass-card px-4 py-2.5 rounded-lg border border-border/50 group-hover:border-primary/50 transition-all duration-300">
                <link.icon className="w-5 h-5 text-primary" />
                <span className="font-medium text-sm text-foreground">{link.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}