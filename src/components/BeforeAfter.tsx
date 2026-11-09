"use client";

import { useCallback, useRef, useState } from "react";
import { beforeAfter, img } from "@/lib/data";

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const item = beforeAfter[active];

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2" role="tablist" aria-label="Before and after projects">
        {beforeAfter.map((b, i) => (
          <button
            key={b.id}
            role="tab"
            aria-selected={i === active}
            onClick={() => {
              setActive(i);
              setPos(50);
            }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              i === active ? "bg-brand text-white" : "bg-white/10 text-white/80 hover:bg-white/20"
            }`}
          >
            {b.label}
          </button>
        ))}
      </div>

      <div
        ref={ref}
        className="relative aspect-[4/3] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-xl bg-black/30 shadow-2xl sm:aspect-[16/9]"
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img(item.after, 1400)} alt={`${item.label} — after`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(item.before, 1400)} alt={`${item.label} — before`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
        </div>

        <span className="absolute left-3 top-3 rounded bg-black/70 px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">Before</span>
        <span className="absolute right-3 top-3 rounded bg-brand px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-white">After</span>

        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos)}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Drag to compare before and after"
          className="peer sr-only"
        />
        <div className="pointer-events-none absolute inset-y-0 peer-focus-visible:[&>div:last-child]:ring-4 peer-focus-visible:[&>div:last-child]:ring-brand" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -ml-px w-0.5 bg-white shadow" />
          <div className="absolute top-1/2 -ml-5 -mt-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-charcoal text-white shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 6-6 6 6 6M15 6l6 6-6 6" />
            </svg>
          </div>
        </div>

      </div>
      <p className="mt-4 text-sm text-white/70">
        <span className="font-semibold text-white">{item.town}, OH —</span> {item.note}
      </p>
    </div>
  );
}
