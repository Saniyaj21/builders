"use client";

import { useState } from "react";
import { estimatorRates } from "@/lib/data";

const fmt = (n: number) => "$" + (Math.round(n / 500) * 500).toLocaleString("en-US");

const finishes = [
  { label: "Builder-grade", mult: 0.85 },
  { label: "Mid-range", mult: 1 },
  { label: "Premium", mult: 1.35 },
];

export default function CostEstimator() {
  const [type, setType] = useState("kitchen");
  const [size, setSize] = useState(1);
  const [finish, setFinish] = useState(1);
  const r = estimatorRates[type];
  const m = r.sizes[size].mult * finishes[finish].mult;
  const low = r.min * m;
  const high = r.max * m;
  const monthly = Math.round((low * 0.0122) / 5) * 5; // ~8% APR, 120 months

  return (
    <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-dark">Ballpark cost calculator</p>
      <h3 className="font-display mt-1 text-2xl font-bold uppercase text-ink">What will my project cost?</h3>
      <p className="mt-1 text-sm text-ink/60">Based on 300+ Kestrel Ridge projects completed in Summit Valley, 2022–2026.</p>

      <div className="mt-6 space-y-5">
        <div>
          <label htmlFor="est-type" className="text-sm font-semibold text-ink">Project type</label>
          <select
            id="est-type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setSize(1);
            }}
            className="mt-1.5 w-full rounded-md border border-ink/15 bg-white px-3 py-2.5 text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          >
            {Object.entries(estimatorRates).map(([k, v]) => (
              <option key={k} value={k}>
                {v.label}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-semibold text-ink">Scope</legend>
          <div className="mt-1.5 grid gap-2">
            {r.sizes.map((s, i) => (
              <label
                key={s.label}
                className={`flex cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-sm transition ${
                  size === i ? "border-brand bg-brand/5 font-semibold" : "border-ink/15 hover:border-ink/30"
                }`}
              >
                <input type="radio" name="scope" checked={size === i} onChange={() => setSize(i)} className="accent-[#d97f14]" />
                {s.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-semibold text-ink">Finish level</legend>
          <div className="mt-1.5 grid grid-cols-3 gap-2">
            {finishes.map((f, i) => (
              <button
                type="button"
                key={f.label}
                onClick={() => setFinish(i)}
                aria-pressed={finish === i}
                className={`rounded-md border px-2 py-2.5 text-sm transition ${
                  finish === i ? "border-ink bg-ink font-semibold text-white" : "border-ink/15 hover:border-ink/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="mt-6 rounded-xl bg-charcoal p-5 text-white" aria-live="polite">
        <p className="text-xs uppercase tracking-widest text-white/60">Typical investment</p>
        <p className="font-display mt-1 text-4xl font-bold">
          {fmt(low)} <span className="text-white/50">–</span> {fmt(high)}
        </p>
        <p className="mt-2 text-sm text-white/70">
          or from <span className="font-semibold text-brand">~${monthly}/mo</span> with financing (on approved credit)
        </p>
      </div>
      <a href="#estimate" className="mt-4 block rounded-md bg-brand py-3 text-center font-semibold text-white transition hover:bg-brand-dark">
        Get an exact, fixed-price quote →
      </a>
      <p className="mt-2 text-center text-xs text-ink/50">Estimates are a starting point. Your written quote is free and locked in.</p>
    </div>
  );
}
