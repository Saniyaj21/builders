"use client";

import { useState } from "react";

// Fictional service ZIPs for the demo business
const served = new Set(["44890", "44891", "44892", "44893", "44895", "44896", "44897", "44898", "44901", "44902", "44903", "44905"]);

export default function ZipCheck() {
  const [zip, setZip] = useState("");
  const [result, setResult] = useState<null | "yes" | "maybe" | "invalid">(null);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!/^\d{5}$/.test(zip)) return setResult("invalid");
        setResult(served.has(zip) ? "yes" : "maybe");
      }}
      className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10"
    >
      <label htmlFor="zip" className="text-sm font-semibold text-white">
        Do you work in my area?
      </label>
      <div className="mt-2 flex gap-2">
        <input
          id="zip"
          inputMode="numeric"
          maxLength={5}
          value={zip}
          onChange={(e) => {
            setZip(e.target.value.replace(/\D/g, ""));
            setResult(null);
          }}
          placeholder="Enter ZIP (try 44890)"
          className="min-w-0 flex-1 rounded-md border border-white/15 bg-white/10 px-3 py-2.5 text-white placeholder:text-white/40 focus:border-brand focus:outline-none"
        />
        <button className="rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark">Check</button>
      </div>
      <p className="mt-3 min-h-[1.25rem] text-sm" aria-live="polite">
        {result === "yes" && <span className="text-emerald-300">✓ Great news — {zip} is in our core service area. Estimates are free.</span>}
        {result === "maybe" && (
          <span className="text-amber-200">
            {zip} is outside our core area, but we take select projects beyond it. <a href="#estimate" className="underline">Tell us about yours.</a>
          </span>
        )}
        {result === "invalid" && <span className="text-red-300">Please enter a valid 5-digit ZIP code.</span>}
      </p>
    </form>
  );
}
