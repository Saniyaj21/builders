"use client";

import { useEffect, useState } from "react";

// Personalised mock-up: ?for=Titan-Home-Exteriors (hyphens = spaces) or ?for=Titan%20Home%20Exteriors
// swaps the demo business name for the prospect's across the page and shows a small banner.
const FULL = "Kestrel Ridge Builders";
const SHORT = "Kestrel Ridge";

function readName(): string | null {
  try {
    const raw = new URLSearchParams(window.location.search).get("for");
    if (!raw) return null;
    const name = raw.replace(/-/g, " ").replace(/\s+/g, " ").trim().slice(0, 60);
    return name.length >= 2 ? name : null;
  } catch {
    return null;
  }
}

function swapText(root: Node, full: string, short: string) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) nodes.push(walker.currentNode as Text);
  for (const n of nodes) {
    const v = n.nodeValue;
    if (v && v.includes(SHORT)) {
      n.nodeValue = v.split(FULL).join(full).split(SHORT).join(short);
    }
  }
  document.querySelectorAll<HTMLElement>("[alt],[title],[aria-label],[placeholder]").forEach((el) => {
    for (const attr of ["alt", "title", "aria-label", "placeholder"]) {
      const v = el.getAttribute(attr);
      if (v && v.includes(SHORT)) {
        el.setAttribute(attr, v.split(FULL).join(full).split(SHORT).join(short));
      }
    }
  });
}

export default function Personalize() {
  const [name, setName] = useState<string | null>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const n = readName();
    if (!n) return;
    // Reading the URL is only possible after mount (page is statically prerendered).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setName(n);
    const run = () => {
      swapText(document.body, n, n);
      if (document.title.includes(SHORT)) {
        document.title = document.title.split(FULL).join(n).split(SHORT).join(n);
      }
    };
    // Re-apply when client components render new text (modals, form success, filters).
    const obs = new MutationObserver(() => {
      obs.disconnect();
      run();
      obs.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
    });
    // Wait until React has finished hydrating every boundary, otherwise the swapped
    // text causes a hydration mismatch.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const start = () => {
      timer = setTimeout(() => {
        run();
        obs.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
      }, 150);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      window.removeEventListener("load", start);
      if (timer) clearTimeout(timer);
      obs.disconnect();
    };
  }, []);

  if (!name || hidden) return null;
  return (
    <div className="relative z-[60] flex items-center justify-center gap-3 bg-amber-400 px-4 py-2 text-center text-sm font-medium text-neutral-900 shadow">
      <span>
        Free mock-up prepared for <strong>{name}</strong> by Saniyaj Mallik. Photos and details are placeholders.
      </span>
      <button
        type="button"
        onClick={() => setHidden(true)}
        aria-label="Dismiss banner"
        className="rounded px-2 py-0.5 font-bold hover:bg-amber-300"
      >
        ×
      </button>
    </div>
  );
}
