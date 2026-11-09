"use client";

import { useEffect, useState } from "react";
import { business } from "@/lib/data";
import { Logo, PhoneIcon } from "./Icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Our Process" },
  { href: "#reviews", label: "Reviews" },
  { href: "#area", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="hidden bg-charcoal text-xs text-white/75 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p>
            <span className="text-brand">●</span> Licensed &amp; insured · {business.license} · Serving Summit Valley since {business.founded}
          </p>
          <p>{business.hours}</p>
        </div>
      </div>
      <header
        className={`sticky top-0 z-40 border-b transition-colors ${
          scrolled ? "border-black/10 bg-white/95 shadow-sm backdrop-blur" : "border-transparent bg-white"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label={`${business.name} home`}>
            <Logo className="h-9 w-9" />
            <span className="leading-none">
              <span className="font-display block text-xl font-bold uppercase tracking-wide text-ink">{business.short}</span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-dark">Builders · Est. {business.founded}</span>
            </span>
          </a>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm font-medium text-ink/80">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-brand-dark">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a href={business.phoneHref} className="hidden items-center gap-2 text-sm font-semibold text-ink sm:flex">
              <PhoneIcon className="h-4 w-4 text-brand" />
              {business.phone}
            </a>
            <a
              href="#estimate"
              className="hidden rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark sm:inline-block"
            >
              Free Estimate
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10 lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <button className="absolute inset-0 bg-black/50" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div className="animate-fade-up absolute right-0 top-0 flex h-full w-[84%] max-w-sm flex-col bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-bold uppercase">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-black/10"
                aria-label="Close menu"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <ul className="mt-6 divide-y divide-black/5">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={() => setOpen(false)} className="block py-3.5 text-lg font-medium text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-auto space-y-3">
              <a href={business.phoneHref} className="flex items-center justify-center gap-2 rounded-md border border-ink/15 py-3 font-semibold">
                <PhoneIcon className="h-4 w-4 text-brand" /> Call {business.phone}
              </a>
              <a href="#estimate" onClick={() => setOpen(false)} className="block rounded-md bg-brand py-3 text-center font-semibold text-white">
                Get My Free Estimate
              </a>
              <p className="text-center text-xs text-ink/60">{business.license} · Fully insured</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
