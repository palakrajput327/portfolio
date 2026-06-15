import { MapPin, Calendar, Coffee } from "lucide-react";
import { meta, about } from "../data/portfolio";

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Page header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-px bg-terra" />
            <span className="text-sm font-medium text-terra tracking-widest uppercase">About</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-night-text">
            A little about me
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — avatar + quick facts */}
          <div className="space-y-6">
            {/* Avatar */}
            <div className="w-48 h-48 rounded-2xl bg-sand dark:bg-night-surface flex items-center justify-center overflow-hidden">
              {about.avatar ? (
                <img src={about.avatar} alt={meta.name} className="w-full h-full object-cover" />
              ) : (
                <span className="font-display text-6xl text-terra font-bold">
                  {meta.name.charAt(0)}
                </span>
              )}
            </div>

            {/* Quick facts */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-stone dark:text-night-muted">
                <MapPin size={16} className="text-terra flex-shrink-0" />
                <span className="text-sm">{meta.location}</span>
              </div>
              <div className="flex items-center gap-3 text-stone dark:text-night-muted">
                <Calendar size={16} className="text-terra flex-shrink-0" />
                <span className="text-sm">Open to full-time & freelance</span>
              </div>
              <div className="flex items-center gap-3 text-stone dark:text-night-muted">
                <Coffee size={16} className="text-terra flex-shrink-0" />
                <span className="text-sm">Fuelled by chai ☕</span>
              </div>
            </div>
          </div>

          {/* Right — bio */}
          <div>
            <p className="text-stone dark:text-night-muted leading-relaxed text-lg mb-6 whitespace-pre-line">
              {about.bio}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: "Years coding", value: "3+" },
                { label: "Projects shipped", value: "15+" },
                { label: "LeetCode solved", value: "200+" },
                { label: "Cups of tea", value: "∞" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-sand dark:bg-night-surface rounded-xl p-4"
                >
                  <p className="font-display text-3xl font-bold text-terra">{stat.value}</p>
                  <p className="text-sm text-stone dark:text-night-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
