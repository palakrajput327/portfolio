import { useState } from "react";
import { Send, Mail, GitFork, Link2 } from "lucide-react";
import { meta } from "../data/portfolio";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Replace YOUR_FORM_ID below with your Formspree form ID
    // Sign up free at https://formspree.io to get one
    const FORMSPREE_ID = "YOUR_FORM_ID";

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="inline-block w-8 h-px bg-terra" />
            <span className="text-sm font-medium text-terra tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-ink dark:text-night-text">
            Let's talk
          </h1>
          <p className="text-stone dark:text-night-muted mt-3 text-lg max-w-xl">
            Have a project in mind or just want to connect? My inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-ink dark:text-night-text mb-1.5">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-sand dark:bg-night-surface text-ink dark:text-night-text placeholder-stone/60 dark:placeholder-night-muted/60 border border-transparent focus:border-terra/50 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink dark:text-night-text mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 rounded-xl bg-sand dark:bg-night-surface text-ink dark:text-night-text placeholder-stone/60 dark:placeholder-night-muted/60 border border-transparent focus:border-terra/50 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink dark:text-night-text mb-1.5">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-sand dark:bg-night-surface text-ink dark:text-night-text placeholder-stone/60 dark:placeholder-night-muted/60 border border-transparent focus:border-terra/50 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="flex items-center gap-2 bg-terra text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-terra/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
            >
              {status === "sending" ? (
                "Sending..."
              ) : status === "sent" ? (
                "Message sent ✓"
              ) : (
                <>Send message <Send size={15} /></>
              )}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-500">Something went wrong. Try emailing me directly.</p>
            )}
          </form>

          {/* Right side — contact info */}
          <div className="space-y-6">
            <a
              href={`mailto:${meta.email}`}
              className="flex items-center gap-4 bg-sand dark:bg-night-surface rounded-2xl p-5 hover:bg-terra/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-terra/10 flex items-center justify-center">
                <Mail size={18} className="text-terra" />
              </div>
              <div>
                <p className="text-xs text-stone dark:text-night-muted mb-0.5">Email</p>
                <p className="text-sm font-medium text-ink dark:text-night-text group-hover:text-terra transition-colors">
                  {meta.email}
                </p>
              </div>
            </a>

            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-sand dark:bg-night-surface rounded-2xl p-5 hover:bg-terra/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-terra/10 flex items-center justify-center">
                <GitFork size={18} className="text-terra" />
              </div>
              <div>
                <p className="text-xs text-stone dark:text-night-muted mb-0.5">GitHub</p>
                <p className="text-sm font-medium text-ink dark:text-night-text group-hover:text-terra transition-colors">
                  {meta.github.replace("https://", "")}
                </p>
              </div>
            </a>

            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-sand dark:bg-night-surface rounded-2xl p-5 hover:bg-terra/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-terra/10 flex items-center justify-center">
                <Link2 size={18} className="text-terra" />
              </div>
              <div>
                <p className="text-xs text-stone dark:text-night-muted mb-0.5">LinkedIn</p>
                <p className="text-sm font-medium text-ink dark:text-night-text group-hover:text-terra transition-colors">
                  {meta.linkedin.replace("https://", "")}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
