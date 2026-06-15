import { ArrowRight, GitFork, Link2, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { meta } from "../data/portfolio";

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-block w-8 h-px bg-terra" />
            <span className="text-sm font-medium text-terra tracking-widest uppercase">
              {meta.location} — Available for work
            </span>
          </div>

          {/* Name */}
          <h1 className="font-display text-6xl md:text-7xl font-bold text-ink dark:text-night-text leading-tight mb-4">
            {meta.name}
          </h1>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-medium text-stone dark:text-night-muted mb-6">
            {meta.title}
          </h2>

          {/* Tagline */}
          <p className="text-lg text-stone dark:text-night-muted leading-relaxed mb-10 max-w-lg">
            {meta.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <Link
              to="/projects"
              className="flex items-center gap-2 bg-terra text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-terra/90 transition-colors shadow-sm"
            >
              View my work <ArrowRight size={16} />
            </Link>
            <Link
              to="/contact"
              className="flex items-center gap-2 border border-sand dark:border-night-surface text-ink dark:text-night-text px-6 py-3 rounded-xl text-sm font-semibold hover:bg-sand/60 dark:hover:bg-night-surface transition-colors"
            >
              Get in touch
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 text-sm font-medium text-stone dark:text-night-muted hover:text-terra transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone dark:text-night-muted hover:text-terra transition-colors text-sm"
            >
              <GitFork size={18} /> GitHub
            </a>
            <span className="w-px h-4 bg-sand dark:bg-night-surface" />
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-stone dark:text-night-muted hover:text-terra transition-colors text-sm"
            >
              <Link2 size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Decorative background element */}
        <div className="absolute top-32 right-8 md:right-24 w-64 h-64 rounded-full bg-terra/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-sand dark:bg-night-surface/40 blur-2xl pointer-events-none" />
      </div>
    </main>
  );
}
