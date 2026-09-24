"use client";

import { ExternalLink, FolderGit2, Lock, Award } from "lucide-react";

const projects = [
  {
    title: "C-BARS: Canine Behavioral Action Recognition System",
    subtitle: "Deep Learning & Video Processing Pipeline",
    date: "April 2026",
    description:
      "Engineered an end-to-end deep learning pipeline in PyTorch to classify canine behaviors from video into 5 behavioral categories.",
    highlights: [
      "Designed a composite CNN-LSTM architecture combining pre-trained MobileNetV2 for spatial feature extraction with a 2-layer Bidirectional LSTM (256 hidden units) to capture temporal motion across 16 sampled video frames",
      "Applied a layered fine-tuning strategy, freezing initial MobileNetV2 layers while fine-tuning downstream layers for domain-specific detection",
      "Built OpenCV preprocessing pipelines with real-time augmentation (random cropping, flips, color jitter) and inverse-frequency class weighting to handle dataset imbalance",
    ],
    tags: ["PyTorch", "MobileNetV2", "BiLSTM", "OpenCV", "Computer Vision", "Scikit-Learn"],
    isPrivate: true,
  },
  {
    title: "Fin-telligence: Automated Fish-Waste Hydrolysis System",
    subtitle: "Embedded Systems & Automated Control",
    date: "April 2026",
    description:
      "Designed a closed-loop automated control system using Raspberry Pi 5 and Arduino Nano to orchestrate a 20-hour multi-phase enzymatic hydrolysis process.",
    highlights: [
      "Developed state-driven Python algorithms utilizing HX711 load cell sensor data to perform real-time proportional mass-balancing of inputs",
      "Engineered a multi-variable environmental control matrix with an 8-channel relay module to manage dual-loop temperature regulation and timed mechanical shear cycles",
      "Designed electrical subsystems and handled power calculations using buck converters and logic-level converters for stable signal isolation",
    ],
    tags: ["Python", "Raspberry Pi 5", "Arduino Nano", "IoT", "Sensors", "Hardware Control"],
    isPrivate: true,
  },
  {
    title: "SpectraSense: Real-Time Acoustic Spectrogram Analysis System",
    subtitle: "Grundfos IS Data & AI Inclusion Hackathon — 3rd Place",
    date: "February 2026",
    badge: "3rd Place Winner",
    description:
      "Developed an AI-driven desktop application to diagnose industrial pump anomalies from live acoustic signatures, earning 3rd place at a national hackathon.",
    highlights: [
      "Implemented a real-time audio ingestion engine using PyAudio with a 12th-order SciPy Butterworth high-pass filter and adaptive normalization to isolate mechanical noise",
      "Deployed a pre-trained MobileNetV2 CNN classifier (TensorFlow/Keras) on downsampled spectrogram data to predict pump degradation states",
      "Designed an asynchronous Tkinter interface using Python threading to decouple audio capture from UI rendering, ensuring zero latency during model inference",
    ],
    tags: ["Python", "TensorFlow", "Keras", "PyAudio", "SciPy", "Tkinter", "Signal Processing"],
    isPrivate: false,
  },
  {
    title: "AI Regulations WebCrawler",
    subtitle: "Automated Policy Data Extraction",
    date: "August 2025",
    description:
      "Automated the collection of global AI policy data from international regulatory sources using web-crawling workflows.",
    highlights: [
      "Built web-crawling workflows using BeautifulSoup and Playwright, leveraging dynamic browser automation to scrape complex JavaScript-rendered pages",
      "Structured extracted data into JSON pipelines and automated PDF collection with full documentation of trials for reproducibility",
    ],
    tags: ["Python", "Playwright", "BeautifulSoup", "Web Scraping", "Automation"],
    isPrivate: true,
  },
  {
    title: "PeerQuest Website - Backend/Middleware",
    subtitle: "Real-Time Messaging Infrastructure",
    date: "June 2025",
    description:
      "Implemented the real-time messaging layer using WebSockets with Django Channels and Daphne, enabling stable bidirectional communication between users.",
    highlights: [
      "Developed Python middleware connecting frontend chat components to backend message handling, including presence tracking, typing indicators, and read receipts",
      "Containerized the backend with Docker to standardize development environments and simplify production deployment and scaling",
    ],
    tags: ["Django", "Django Channels", "WebSockets", "Daphne", "Docker", "ASGI"],
    githubUrl: "https://github.com/EmTech-PeerQuest/PeerQuestWebsite",
  },
  {
    title: "Malaria Trend Analysis & Predictive Modeling System",
    subtitle: "Supervised and Unsupervised Learning",
    date: "December 2024",
    description:
      "Analyzes and predicts global malaria case counts (2000-2021) using WHO data, supervised learning, and spatial clustering.",
    highlights: [
      "Trained regression models (GradientBoosting, XGBoost, Random Forest) to forecast malaria case counts, achieving 96-98% average cross-validated accuracy",
      "Applied unsupervised learning (Agglomerative Clustering, K-Means) to group countries based on multi-year malaria patterns with silhouette scores up to 0.39",
      "Designed a complete Python data pipeline including feature engineering, climate data extraction, and shapefile-based spatial alignment",
    ],
    tags: ["Python", "XGBoost", "Scikit-Learn", "K-Means", "Spatial Analysis", "Data Pipelines"],
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
        {projects.map((project) => (
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

                  {project.badge && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                      <Award className="h-3.5 w-3.5 text-amber-500" />
                      {project.badge}
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