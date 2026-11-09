"use client";

import { useState } from "react";
import { business } from "@/lib/data";
import { CheckIcon } from "./Icons";

const projectTypes = ["Kitchen", "Bathroom", "Roofing", "Deck / Porch", "Windows & Doors", "Addition / Basement", "Other"];
const budgets = ["Under $15k", "$15k – $30k", "$30k – $60k", "$60k – $100k", "$100k+", "Not sure yet"];
const timelines = ["As soon as possible", "Within 1–3 months", "3–6 months", "Just planning / researching"];

type Values = {
  name: string;
  phone: string;
  email: string;
  zip: string;
  types: string[];
  budget: string;
  timeline: string;
  details: string;
  contact: string;
};

const empty: Values = { name: "", phone: "", email: "", zip: "", types: [], budget: "", timeline: "", details: "", contact: "Phone call" };

function validate(v: Values) {
  const e: Partial<Record<keyof Values, string>> = {};
  if (v.name.trim().length < 2) e.name = "Please enter your name.";
  if (v.phone.replace(/\D/g, "").length < 10) e.phone = "Enter a 10-digit phone number.";
  if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
  if (!/^\d{5}$/.test(v.zip)) e.zip = "Enter a 5-digit ZIP.";
  if (v.types.length === 0) e.types = "Choose at least one project type.";
  if (!v.budget) e.budget = "Select a budget range.";
  if (!v.timeline) e.timeline = "Select a timeline.";
  return e;
}

const formatPhone = (raw: string) => {
  const d = raw.replace(/\D/g, "").slice(0, 10);
  if (d.length < 4) return d;
  if (d.length < 7) return `(${d.slice(0, 3)}) ${d.slice(3)}`;
  return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
};

export default function EstimateForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [files, setFiles] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [ref, setRef] = useState("");

  const set = <K extends keyof Values>(k: K, val: Values[K]) => {
    setV((p) => ({ ...p, [k]: val }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  const submit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate(v);
    setErrors(e);
    if (Object.keys(e).length) {
      const first = Object.keys(e)[0];
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setRef("KR-" + Math.floor(10000 + Math.random() * 89999));
      setStatus("done");
    }, 900);
  };

  const input =
    "mt-1.5 w-full rounded-md border bg-white px-3 py-2.5 text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-brand/30";
  const border = (k: keyof Values) => (errors[k] ? "border-red-500" : "border-ink/15 focus:border-brand");
  const err = (k: keyof Values) =>
    errors[k] ? (
      <p id={`e-${k}`} className="mt-1 text-sm text-red-600">
        {errors[k]}
      </p>
    ) : null;

  if (status === "done") {
    return (
      <div className="animate-fade-up rounded-2xl bg-white p-8 text-center shadow-xl ring-1 ring-black/5 sm:p-12" role="status">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckIcon className="h-8 w-8" />
        </div>
        <h3 className="font-display mt-5 text-3xl font-bold uppercase text-ink">Thanks, {v.name.split(" ")[0]}! Request received.</h3>
        <p className="mx-auto mt-3 max-w-md text-ink/70">
          Your reference number is <span className="font-semibold text-ink">{ref}</span>. A project consultant will reach you by{" "}
          {v.contact.toLowerCase()} within one business day to schedule your free in-home estimate.
        </p>
        <ul className="mx-auto mt-6 max-w-sm space-y-2 text-left text-sm text-ink/70">
          <li className="flex gap-2"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Project: {v.types.join(", ")}</li>
          <li className="flex gap-2"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Budget: {v.budget}</li>
          <li className="flex gap-2"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Timeline: {v.timeline}</li>
        </ul>
        <p className="mt-6 text-sm text-ink/60">
          Need us sooner? Call <a href={business.phoneHref} className="font-semibold text-brand-dark underline">{business.phone}</a>
        </p>
        <button
          onClick={() => {
            setV(empty);
            setFiles([]);
            setStatus("idle");
          }}
          className="mt-6 text-sm font-semibold text-ink/60 underline hover:text-ink"
        >
          Submit another request
        </button>
        <p className="mt-6 text-xs text-ink/40">Demo form — no data was sent.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="text-sm font-semibold">Full name *</label>
          <input id="f-name" autoComplete="name" value={v.name} onChange={(e) => set("name", e.target.value)} placeholder="Jordan Smith"
            aria-invalid={!!errors.name} aria-describedby={errors.name ? "e-name" : undefined} className={`${input} ${border("name")}`} />
          {err("name")}
        </div>
        <div>
          <label htmlFor="f-phone" className="text-sm font-semibold">Phone *</label>
          <input id="f-phone" type="tel" autoComplete="tel" value={v.phone} onChange={(e) => set("phone", formatPhone(e.target.value))} placeholder="(555) 555-0123"
            aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "e-phone" : undefined} className={`${input} ${border("phone")}`} />
          {err("phone")}
        </div>
        <div>
          <label htmlFor="f-email" className="text-sm font-semibold">Email *</label>
          <input id="f-email" type="email" autoComplete="email" value={v.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com"
            aria-invalid={!!errors.email} aria-describedby={errors.email ? "e-email" : undefined} className={`${input} ${border("email")}`} />
          {err("email")}
        </div>
        <div>
          <label htmlFor="f-zip" className="text-sm font-semibold">Project ZIP code *</label>
          <input id="f-zip" inputMode="numeric" autoComplete="postal-code" maxLength={5} value={v.zip} onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))} placeholder="44890"
            aria-invalid={!!errors.zip} aria-describedby={errors.zip ? "e-zip" : undefined} className={`${input} ${border("zip")}`} />
          {err("zip")}
        </div>
      </div>

      <fieldset className="mt-5">
        <legend className="text-sm font-semibold">What are you planning? * <span className="font-normal text-ink/50">(select all that apply)</span></legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {projectTypes.map((t, i) => {
            const on = v.types.includes(t);
            return (
              <button
                type="button"
                id={i === 0 ? "f-types" : undefined}
                key={t}
                aria-pressed={on}
                onClick={() => set("types", on ? v.types.filter((x) => x !== t) : [...v.types, t])}
                className={`rounded-full border px-3.5 py-2 text-sm transition ${
                  on ? "border-brand bg-brand text-white" : errors.types ? "border-red-400" : "border-ink/15 hover:border-ink/40"
                }`}
              >
                {on && "✓ "}
                {t}
              </button>
            );
          })}
        </div>
        {err("types")}
      </fieldset>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="f-budget" className="text-sm font-semibold">Estimated budget *</label>
          <select id="f-budget" value={v.budget} onChange={(e) => set("budget", e.target.value)}
            aria-invalid={!!errors.budget} className={`${input} ${border("budget")}`}>
            <option value="">Select a range</option>
            {budgets.map((b) => <option key={b}>{b}</option>)}
          </select>
          {err("budget")}
        </div>
        <div>
          <label htmlFor="f-timeline" className="text-sm font-semibold">Ideal start *</label>
          <select id="f-timeline" value={v.timeline} onChange={(e) => set("timeline", e.target.value)}
            aria-invalid={!!errors.timeline} className={`${input} ${border("timeline")}`}>
            <option value="">Select a timeline</option>
            {timelines.map((t) => <option key={t}>{t}</option>)}
          </select>
          {err("timeline")}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="f-details" className="text-sm font-semibold">Tell us about your project</label>
        <textarea id="f-details" rows={4} value={v.details} onChange={(e) => set("details", e.target.value)}
          placeholder="e.g. 1990s kitchen, want to remove the wall to the dining room and add an island…"
          className={`${input} border-ink/15 focus:border-brand`} />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <span className="text-sm font-semibold">Photos (optional)</span>
          <label className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-ink/25 px-3 py-3 text-sm text-ink/60 hover:border-brand hover:text-ink">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 16V4M6 10l6-6 6 6M4 20h16" /></svg>
            {files.length ? `${files.length} photo${files.length > 1 ? "s" : ""} attached` : "Add photos of the space"}
            <input type="file" accept="image/*" multiple className="sr-only" onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))} />
          </label>
        </div>
        <fieldset>
          <legend className="text-sm font-semibold">Best way to reach you</legend>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {["Phone call", "Text", "Email"].map((c) => (
              <label key={c} className={`cursor-pointer rounded-md border px-2 py-3 text-center text-sm ${v.contact === c ? "border-ink bg-ink text-white" : "border-ink/15"}`}>
                <input type="radio" name="contact" value={c} checked={v.contact === c} onChange={() => set("contact", c)} className="sr-only" />
                {c}
              </label>
            ))}
          </div>
        </fieldset>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-md bg-brand py-4 text-base font-bold text-white shadow-sm transition hover:bg-brand-dark disabled:opacity-70"
      >
        {status === "sending" ? "Sending your request…" : "Request My Free Estimate"}
      </button>
      <p className="mt-3 text-center text-xs text-ink/50">
        No obligation · We reply within 1 business day · Your info is never sold or shared
      </p>
    </form>
  );
}
