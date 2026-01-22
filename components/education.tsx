"use client";

export function Education() {
  return (
    <section id="education" className="py-20 scroll-mt-20">
      <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-8">
        Education
      </h2>

      <div className="relative pl-6 border-l border-border">
        <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary" />
        
        <div className="space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
            <h3 className="text-lg font-semibold text-foreground">
              Technological Institute of the Philippines – Manila
            </h3>
            <span className="text-sm text-muted-foreground">
              2022 – 2026 (Tentative)
            </span>
          </div>
          
          <p className="text-muted-foreground">
            Bachelor of Science in Computer Engineering
          </p>
          
          <p className="text-primary font-medium">
            Data Science Track
          </p>
        </div>
      </div>
    </section>
  );
}
