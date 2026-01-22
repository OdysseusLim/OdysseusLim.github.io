"use client";

const skillCategories = [
  {
    title: "Backend & Real-Time Systems",
    skills: [
      { name: "Python", description: "Production-grade backend development" },
      { name: "Django & Django REST Framework", description: "API design, auth, middleware" },
      { name: "Django Channels & WebSockets", description: "Real-time messaging, presence tracking, typing indicators" },
      { name: "ASGI / Daphne", description: "Async server architecture and deployment" },
      { name: "PostgreSQL", description: "Relational modeling, indexing, query optimization" },
    ],
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      { name: "Scikit-learn", description: "Classical ML (Random Forest, Gradient Boosting, XGBoost)" },
      { name: "Feature Engineering & Model Evaluation", description: "Cross-validation, metrics, error analysis" },
      { name: "Unsupervised Learning", description: "K-Means, Agglomerative Clustering, dimensionality reduction" },
      { name: "Data Pipelines", description: "Preprocessing, scaling, reproducible experiments" },
    ],
  },
  {
    title: "Web & Infrastructure",
    skills: [
      { name: "Docker", description: "Containerized services, environment consistency" },
      { name: "Web Scraping & Automation", description: "Playwright, BeautifulSoup, dynamic content handling" },
      { name: "Git", description: "Version control, collaborative workflows" },
      { name: "Linux / Bash", description: "Deployment, server management" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 scroll-mt-20">
      <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-8">
        Core Competencies
      </h2>

      <div className="space-y-12">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              {category.title}
            </h3>
            <ul className="space-y-3">
              {category.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="group flex items-start gap-3 text-sm"
                >
                  <span className="text-primary mt-0.5">•</span>
                  <div>
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-muted-foreground">
                      {" "}
                      – {skill.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
