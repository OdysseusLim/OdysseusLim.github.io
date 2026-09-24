"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Briefcase className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
          Work Experience
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      <div className="glass-card gradient-border rounded-2xl p-6 md:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-foreground">
              Web Developer Intern
            </h3>
            <p className="text-sm text-primary font-medium">
              ARKRAY Project – Xtreme Offshore Outsourcing Inc.
            </p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-border/30 whitespace-nowrap self-start">
            February – June 2026
          </span>
        </div>

        <ul className="space-y-2 pt-2 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <span className="text-primary mt-1">▸</span>
            <span>Enhanced a production full-stack web application (Vue.js, Node.js) for an international healthcare client by implementing new client-requested features to automate medical workflows.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">▸</span>
            <span>Built responsive, multi-language (Japanese/English) user interfaces using EJS templating, Sass, and Bootstrap to improve usability for global end users.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">▸</span>
            <span>Optimized PostgreSQL queries and updated database schemas to support feature rollouts and performance.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary mt-1">▸</span>
            <span>Authored comprehensive system documentation (Screen Definitions, ERDs, Sequence Diagrams) to align development teams and client expectations.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}