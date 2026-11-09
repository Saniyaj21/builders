"use client";

import { useEffect, useMemo, useState } from "react";
import { img, projects, type Category, type Project } from "@/lib/data";
import { ClockIcon, PinIcon } from "./Icons";

const filters: ("All" | Category)[] = ["All", "Kitchen", "Bathroom", "Roofing", "Deck & Outdoor", "Windows & Doors", "Whole Home"];

export default function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const list = useMemo(() => (filter === "All" ? projects : projects.filter((p) => p.category === filter)), [filter]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const i = list.findIndex((p) => p.id === selected.id);
        const next = e.key === "ArrowRight" ? (i + 1) % list.length : (i - 1 + list.length) % list.length;
        setSelected(list[next]);
      }
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, list]);

  return (
    <div>
      <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0" role="toolbar" aria-label="Filter projects">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition ${
                filter === f ? "border-ink bg-ink text-white" : "border-ink/15 bg-white text-ink/80 hover:border-ink/40"
              }`}
            >
              {f} <span className={filter === f ? "text-white/60" : "text-ink/40"}>{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <li key={p.id} className="animate-fade-up">
            <button
              onClick={() => setSelected(p)}
              className="group block w-full overflow-hidden rounded-xl bg-white text-left shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(p.image, 800)}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-ink">
                  {p.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-bold uppercase text-ink">{p.title}</h3>
                <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink/60">
                  <span className="inline-flex items-center gap-1">
                    <PinIcon className="h-4 w-4" /> {p.town}, OH
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <ClockIcon className="h-4 w-4" /> {p.duration}
                  </span>
                </p>
                <span className="mt-3 inline-block text-sm font-semibold text-brand-dark group-hover:underline">View project details →</span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-label={selected.title}>
          <button className="absolute inset-0 bg-black/75" aria-label="Close project" onClick={() => setSelected(null)} />
          <div className="animate-fade-up relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-2xl bg-white sm:rounded-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img(selected.image, 1400)} alt={selected.title} className="aspect-[16/10] w-full object-cover" />
            <button
              onClick={() => setSelected(null)}
              className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="grid gap-6 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">{selected.category}</p>
                <h3 className="font-display mt-1 text-3xl font-bold uppercase text-ink">{selected.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/75">{selected.summary}</p>
              </div>
              <dl className="grid min-w-[200px] grid-cols-3 gap-4 rounded-lg bg-stone p-4 text-sm sm:grid-cols-1">
                <div>
                  <dt className="text-ink/50">Location</dt>
                  <dd className="font-semibold">{selected.town}, OH</dd>
                </div>
                <div>
                  <dt className="text-ink/50">Duration</dt>
                  <dd className="font-semibold">{selected.duration}</dd>
                </div>
                <div>
                  <dt className="text-ink/50">Investment</dt>
                  <dd className="font-semibold">{selected.budget}</dd>
                </div>
              </dl>
            </div>
            <div className="flex flex-col gap-3 border-t border-black/5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-sm text-ink/60">Planning something similar?</p>
              <a
                href="#estimate"
                onClick={() => setSelected(null)}
                className="rounded-md bg-brand px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark"
              >
                Get a free estimate for a project like this
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
