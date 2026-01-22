"use client";

import { ExternalLink, Lock } from "lucide-react";

const projects = [
  {
    title: "AI Regulations WebCrawler",
    date: "August 2025",
    description:
      "Conducted structured research on global AI regulations by developing automated tools to gather data from international policy trackers, regulatory databases, and associated documents.",
    highlights: [
      "Built and refined web-crawling workflows using BeautifulSoup and Playwright, transitioning to dynamic browser automation to handle pages with complex JavaScript-rendered content",
      "Organized extracted information into structured JSON formats, automated PDF collection, and documented all trials including debugging steps to ensure data accuracy",
    ],
    tags: ["Python", "BeautifulSoup", "Playwright", "Web Scraping", "Automation"],
    isPrivate: true,
  },
  {
    title: "PeerQuestWebsite - Backend/Middleware",
    subtitle: "Real-Time Messaging",
    date: "June 2025",
    description:
      "Implemented the real-time messaging layer using WebSockets with Django Channels and Daphne, enabling stable bidirectional communication between users.",
    highlights: [
      "Developed the middleware logic that bridges the frontend chat components with the backend message handling, including presence tracking, typing events, and message delivery/read statuses",
      "Containerized the backend using Docker to streamline deployment, ensure consistent environments, and simplify scaling for production",
    ],
    tags: ["Django", "WebSockets", "Django Channels", "Daphne", "Docker", "ASGI"],
    githubUrl: "https://github.com/EmTech-PeerQuest/PeerQuestWebsite",
  },
  {
    title: "Malaria Trend Analysis",
    subtitle: "Supervised and Unsupervised Learning",
    date: "December 2024",
    description:
      "Analyzes and predicts malaria cases (2000-2021) using supervised and unsupervised learning. Uses WHO data to cluster countries by trends and forecast case counts with KMeans and regression.",
    highlights: [
      "Developed and trained regression models (GradientBoosting, XGBoost, and Random Forest) to forecast malaria case counts, achieving an average 96-98% relative accuracy across cross-validated predictions",
      "Applied unsupervised learning techniques (Agglomerative Clustering, K-Means, dimensionality reduction) to group countries based on multi-year malaria patterns, supported by silhouette scores up to 0.39",
      "Designed and managed the full data pipeline, including feature engineering, climate data extraction, spatial alignment using shapefiles, preprocessing, and scalable model deployment strategies",
    ],
    tags: ["Python", "KMeans", "Regression", "WHO Data", "Data Analysis"],
    githubUrl: "https://github.com/OdysseusLim/Supervised-UnsupervisedLearningMalaria",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 scroll-mt-20">
      <h2 className="text-sm font-bold uppercase tracking-wider text-primary mb-8">
        Projects
      </h2>

      <div className="space-y-12">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50"
          >
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-secondary/50" />

            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {project.date}
            </header>

            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug text-foreground">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold leading-tight group/link text-lg hover:text-primary transition-colors"
                  >
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 font-semibold leading-tight text-lg">
                    {project.title}
                    {project.isPrivate && (
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground bg-secondary px-2 py-0.5 rounded-full">
                        <Lock className="h-3 w-3" />
                        Private
                      </span>
                    )}
                  </span>
                )}
                {project.subtitle && (
                  <span className="block text-sm text-muted-foreground font-normal mt-1">
                    {project.subtitle}
                  </span>
                )}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary mt-1.5 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag}>
                    <span className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
