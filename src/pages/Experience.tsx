import { Briefcase } from "lucide-react";
import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-px bg-terra" />
            <span className="text-sm font-medium text-terra tracking-widest uppercase">Experience</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-night-text">
            Where I've worked
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative max-w-2xl">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-sand dark:bg-night-surface" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <div key={i} className="relative flex gap-8">
                {/* Dot */}
                <div className="flex-shrink-0 w-8 flex items-start justify-center pt-1">
                  <div className="w-3 h-3 rounded-full bg-terra border-2 border-cream dark:border-night-bg ring-2 ring-terra/30" />
                </div>

                {/* Content */}
                <div className="bg-sand dark:bg-night-surface rounded-2xl p-5 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-ink dark:text-night-text">{item.role}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <Briefcase size={13} className="text-terra" />
                        <span className="text-sm text-terra font-medium">{item.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-stone dark:text-night-muted bg-cream dark:bg-night-bg px-3 py-1 rounded-lg">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-stone dark:text-night-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
