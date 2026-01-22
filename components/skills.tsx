"use client";

import { Code2, Database, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Backend & Real-Time Systems",
    icon: Server,
    skills: [
      { name: "Python", description: "Production-grade backend development" },
      { name: "Django & Django REST Framework", description: "API design, auth, middleware" },
      { name: "Django Channels & WebSockets", description: "Real-time messaging, presence tracking" },
      { name: "ASGI / Daphne", description: "Async server architecture" },
      { name: "PostgreSQL", description: "Relational modeling, query optimization" },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    icon: Database,
    skills: [
      { name: "Scikit-learn", description: "Random Forest, Gradient Boosting, XGBoost" },
      { name: "Feature Engineering", description: "Cross-validation, metrics, error analysis" },
      { name: "Unsupervised Learning", description: "K-Means, Agglomerative Clustering" },
      { name: "Data Pipelines", description: "Preprocessing, scaling, reproducible experiments" },
    ],
  },
  {
    title: "Web & Infrastructure",
    icon: Wrench,
    skills: [
      { name: "Docker", description: "Containerized services, environment consistency" },
      { name: "Web Scraping", description: "Playwright, BeautifulSoup" },
      { name: "Git", description: "Version control, collaborative workflows" },
      { name: "Linux / Bash", description: "Deployment, server management" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <Code2 className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
          Core Competencies
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      <div className="grid gap-6">
        {skillCategories.map((category) => (
          <div 
            key={category.title}
            className="glass-card gradient-border rounded-2xl p-6 transition-all duration-300 hover:bg-card/60"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20">
                <category.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {category.title}
              </h3>
            </div>
            
            <div className="grid gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-start gap-3 p-3 rounded-xl bg-secondary/30 border border-border/30 hover:bg-secondary/50 transition-colors group"
                >
                  <span className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0 group-hover:scale-125 transition-transform" />
                  <div className="flex-1 min-w-0">
                    <span className="font-medium text-foreground text-sm">
                      {skill.name}
                    </span>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
