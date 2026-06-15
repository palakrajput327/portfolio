import { GitFork, ExternalLink, Tag } from "lucide-react";
import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-px bg-terra" />
            <span className="text-sm font-medium text-terra tracking-widest uppercase">Projects</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-night-text">
            Things I've built
          </h1>
          <p className="text-stone dark:text-night-muted mt-3 text-lg max-w-xl">
            A selection of projects I'm proud of. Each one taught me something new.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.id}
              className="project-card group bg-sand dark:bg-night-surface rounded-2xl overflow-hidden shadow-card cursor-pointer"
            >
              {/* Image / placeholder */}
              <div className="h-44 bg-cream dark:bg-night-bg flex items-center justify-center overflow-hidden">
                {p.image ? (
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-display text-5xl font-bold text-sand dark:text-night-surface select-none">
                    {p.title.charAt(0)}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-ink dark:text-night-text mb-2 group-hover:text-terra transition-colors">
                  {p.title}
                </h3>
                <p className="text-stone dark:text-night-muted text-sm leading-relaxed mb-4">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-cream dark:bg-night-bg text-stone dark:text-night-muted"
                    >
                      <Tag size={10} className="text-terra" />
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-stone dark:text-night-muted hover:text-terra transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GitFork size={15} /> Code
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-stone dark:text-night-muted hover:text-terra transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={15} /> Live demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
