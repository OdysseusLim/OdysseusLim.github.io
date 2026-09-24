"use client";

import { Code2, Database, Cpu, Layout, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI, Deep Learning & Signal Processing",
    icon: Database,
    skills: [
      { name: "PyTorch & TensorFlow / Keras", description: "CNN-LSTM architectures, MobileNetV2 transfer learning, BiLSTM" },
      { name: "Computer Vision & Audio Processing", description: "OpenCV image pipelines, PyAudio, SciPy Butterworth filtering" },
      { name: "Machine Learning & Analytics", description: "Scikit-Learn, XGBoost, Random Forest, K-Means & Agglomerative Clustering" },
      { name: "Data Engineering", description: "NumPy, spatial alignment, class balancing, feature engineering" },
    ],
  },
  {
    title: "Software & Web Development",
    icon: Layout,
    skills: [
      { name: "Full-Stack Web (JS/Node)", description: "Vue.js, Node.js, Express, EJS Templating, Sass, Bootstrap" },
      { name: "Python Web Backends", description: "Django, Django REST Framework, WebSockets, Django Channels, Daphne" },
      { name: "Databases & ORM", description: "PostgreSQL, MySQL, Sequelize ORM, query optimization, ERD design" },
    ],
  },
  {
    title: "Embedded & Hardware Integration",
    icon: Cpu,
    skills: [
      { name: "Microcontrollers & SBCs", description: "Raspberry Pi 5, ESP32, Arduino Nano" },
      { name: "Sensor & Actuator Control", description: "HX711 load cells, 8-channel relay matrices, signal isolation" },
      { name: "Real-Time Control Systems", description: "State-driven algorithms, multi-variable control loops" },
    ],
  },
  {
    title: "Automation & Tooling",
    icon: Wrench,
    skills: [
      { name: "Web Scraping & Automation", description: "Playwright, BeautifulSoup4, JSON data pipelines" },
      { name: "DevOps & OS", description: "Docker, Git, GitHub, GitLab, Linux / Bash" },
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
          Technical Skills
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