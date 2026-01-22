"use client";

import { ExternalLink, FolderGit2, Lock } from "lucide-react";

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
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          <FolderGit2 className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-primary">
          Projects
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent" />
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className="group glass-card gradient-border rounded-2xl p-6 transition-all duration-300 hover:bg-card/60 hover:scale-[1.02] hover:glow-sm"
          >
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors group/link"
                    >
                      {project.title}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                    </a>
                  ) : (
                    <span className="font-bold text-lg text-foreground">
                      {project.title}
                    </span>
                  )}
                  {project.isPrivate && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground bg-secondary/80 border border-border/50 px-2.5 py-1 rounded-full">
                      <Lock className="h-3 w-3" />
                      Private
                    </span>
                  )}
                </div>
                {project.subtitle && (
                  <p className="text-sm text-primary/80 font-medium mt-1">
                    {project.subtitle}
                  </p>
                )}
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full border border-border/30 whitespace-nowrap">
                {project.date}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-5">
              {project.highlights.map((highlight, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground flex gap-3"
                >
                  <span className="text-primary mt-1 shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full transition-colors hover:bg-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
