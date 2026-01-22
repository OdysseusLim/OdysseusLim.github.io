"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <GraduationCap className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
          Education
        </h2>
        <div className="flex-1 h-px bg-linear-to-r from-primary/50 to-transparent" />
      </div>

      <div className="glass-card gradient-border rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
        
        <div className="relative">
          {/* Timeline dot */}
          <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
          </div>
          
          <div className="pl-6 border-l-2 border-primary/30">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Technological Institute of the Philippines
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Manila, Philippines</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground bg-secondary/50 border border-border/50 px-3 py-1.5 rounded-full">
                  <Calendar className="h-3.5 w-3.5 text-primary" />
                  2022 – 2026 (Tentative)
                </span>
              </div>
              
              <div className="space-y-2 pt-2">
                <p className="text-muted-foreground font-medium">
                  Bachelor of Science in Computer Engineering
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-primary font-semibold">
                    Data Science Track
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
