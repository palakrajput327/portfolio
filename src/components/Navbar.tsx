import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { meta } from "../data/portfolio";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 dark:bg-night-bg/80 backdrop-blur-md border-b border-sand dark:border-night-surface">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 font-display text-xl font-semibold text-ink dark:text-night-text">
          <Code2 size={20} className="text-terra" />
          <span>{meta.name.split(" ")[0]}<span className="text-terra">.</span></span>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-terra bg-terra/10"
                    : "text-stone dark:text-night-muted hover:text-ink dark:hover:text-night-text hover:bg-sand/60 dark:hover:bg-night-surface"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg text-stone dark:text-night-muted hover:text-terra hover:bg-sand/60 dark:hover:bg-night-surface transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((o) => !o)}
            className="md:hidden p-2 rounded-lg text-stone dark:text-night-muted hover:text-terra hover:bg-sand/60 dark:hover:bg-night-surface transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-sand dark:border-night-surface bg-cream dark:bg-night-bg px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-terra bg-terra/10"
                    : "text-stone dark:text-night-muted hover:text-ink dark:hover:text-night-text hover:bg-sand/60 dark:hover:bg-night-surface"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
