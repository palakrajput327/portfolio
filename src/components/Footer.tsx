import { GitFork, Link2, ExternalLink } from "lucide-react";
import { meta, stats } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-sand dark:border-night-surface mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats bar */}
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-sand dark:bg-night-surface rounded-xl px-5 py-3 hover:bg-terra/10 transition-colors group"
          >
            <GitFork size={20} className="text-stone dark:text-night-muted group-hover:text-terra transition-colors" />
            <div>
              <p className="text-xs text-stone dark:text-night-muted">GitHub</p>
              <div className="flex gap-4 mt-0.5">
                <span className="text-sm font-semibold text-ink dark:text-night-text font-mono">{stats.githubRepos} <span className="font-normal text-stone dark:text-night-muted text-xs">repos</span></span>
                <span className="text-sm font-semibold text-ink dark:text-night-text font-mono">{stats.githubStars} <span className="font-normal text-stone dark:text-night-muted text-xs">stars</span></span>
              </div>
            </div>
            <ExternalLink size={14} className="text-stone dark:text-night-muted ml-1 opacity-50 group-hover:opacity-100" />
          </a>

          <a
            href={meta.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-sand dark:bg-night-surface rounded-xl px-5 py-3 hover:bg-terra/10 transition-colors group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-stone dark:text-night-muted group-hover:text-terra transition-colors">
              <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="currentColor"/>
            </svg>
            <div>
              <p className="text-xs text-stone dark:text-night-muted">LeetCode</p>
              <div className="flex gap-4 mt-0.5">
                <span className="text-sm font-semibold text-ink dark:text-night-text font-mono">{stats.leetcodeSolved} <span className="font-normal text-stone dark:text-night-muted text-xs">solved</span></span>
                <span className="text-sm font-semibold text-ink dark:text-night-text font-mono">{stats.leetcodeRating} <span className="font-normal text-stone dark:text-night-muted text-xs">rating</span></span>
              </div>
            </div>
            <ExternalLink size={14} className="text-stone dark:text-night-muted ml-1 opacity-50 group-hover:opacity-100" />
          </a>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-stone dark:text-night-muted">
            © {new Date().getFullYear()} {meta.name}. Crafted with care.
          </p>
          <div className="flex items-center gap-3">
            <a href={meta.github} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-stone dark:text-night-muted hover:text-terra hover:bg-sand/60 dark:hover:bg-night-surface transition-colors">
              <GitFork size={18} />
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer"
              className="p-2 rounded-lg text-stone dark:text-night-muted hover:text-terra hover:bg-sand/60 dark:hover:bg-night-surface transition-colors">
              <Link2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
