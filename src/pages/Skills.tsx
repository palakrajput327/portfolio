import { Layers, Server, Database, Wrench } from "lucide-react";
import { skills } from "../data/portfolio";

const categoryIcons: Record<string, React.ReactNode> = {
  Frontend: <Layers size={18} className="text-terra" />,
  Backend: <Server size={18} className="text-terra" />,
  Database: <Database size={18} className="text-terra" />,
  "DevOps & Tools": <Wrench size={18} className="text-terra" />,
};

export default function Skills() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-px bg-terra" />
            <span className="text-sm font-medium text-terra tracking-widest uppercase">Skills</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-night-text">
            My toolkit
          </h1>
          <p className="text-stone dark:text-night-muted mt-3 text-lg max-w-xl">
            Technologies I work with daily and trust to ship production software.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-sand dark:bg-night-surface rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                {categoryIcons[group.category] || <Layers size={18} className="text-terra" />}
                <h3 className="font-semibold text-ink dark:text-night-text">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-cream dark:bg-night-bg text-ink dark:text-night-text border border-sand dark:border-night-bg/40 hover:border-terra/40 hover:text-terra transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
