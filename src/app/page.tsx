/* eslint-disable @next/next/no-img-element */
import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import Gallery from "@/components/Gallery";
import CostEstimator from "@/components/CostEstimator";
import EstimateForm from "@/components/EstimateForm";
import ZipCheck from "@/components/ZipCheck";
import {
  ArrowIcon,
  AwardIcon,
  BroomIcon,
  CheckIcon,
  ClockIcon,
  DocIcon,
  Logo,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ShieldIcon,
  StarIcon,
  UserIcon,
} from "@/components/Icons";
import { business, faqs, img, services, steps, testimonials, towns } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: business.name,
  telephone: business.phone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "418 Foundry Street",
    addressLocality: "Millbrook",
    addressRegion: "OH",
    postalCode: "44890",
    addressCountry: "US",
  },
  areaServed: towns.map((t) => `${t.name}, OH`),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "312" },
  openingHours: "Mo-Fr 07:30-17:30",
};

function Stars({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <span className="flex text-brand" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} className={className} />
      ))}
    </span>
  );
}

function SectionHead({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-brand" : "text-brand-dark"}`}>{eyebrow}</p>
      <h2 className={`font-display mt-2 text-4xl font-bold uppercase leading-[0.95] sm:text-5xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-white/70" : "text-ink/70"}`}>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />

      <main id="top" className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-charcoal text-white">
          <img
            src={img("1570129477492-45c003edd2be", 1920)}
            alt="White craftsman home with wraparound porch renovated by Kestrel Ridge Builders"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16191e]/95 via-[#16191e]/75 to-[#16191e]/20" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="animate-fade-up">
              <a href="#reviews" className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm backdrop-blur hover:bg-white/15">
                <Stars className="h-3.5 w-3.5" />
                <span className="font-semibold">4.9</span>
                <span className="text-white/70">from 312 homeowner reviews</span>
              </a>
              <h1 className="font-display mt-5 text-5xl font-extrabold uppercase leading-[0.92] sm:text-6xl lg:text-7xl">
                Remodeling done right.
                <br />
                <span className="text-brand">On budget. On schedule.</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Kitchens, bathrooms, roofing, decks, windows &amp; doors for Millbrook and Greater Summit Valley homeowners. One
                fixed-price quote, one dedicated project manager, and a 10-year workmanship warranty — in writing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#estimate" className="inline-flex items-center justify-center gap-2 rounded-md bg-brand px-7 py-4 font-bold text-white shadow-lg transition hover:bg-brand-dark">
                  Get My Free Estimate <ArrowIcon className="h-5 w-5" />
                </a>
                <a href="#projects" className="inline-flex items-center justify-center rounded-md border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10">
                  See Our Work
                </a>
              </div>
              <p className="mt-4 text-sm text-white/60">
                Or call <a href={business.phoneHref} className="font-semibold text-white underline-offset-2 hover:underline">{business.phone}</a> — we answer live, Mon–Fri.
              </p>
            </div>

            <ul className="grid grid-cols-2 gap-3 text-sm lg:grid-cols-1">
              {[
                { icon: ShieldIcon, t: "Licensed & insured", s: `${business.license} · $2M liability` },
                { icon: AwardIcon, t: "10-year warranty", s: "On all workmanship, in writing" },
                { icon: DocIcon, t: "Fixed-price quotes", s: "No surprise change orders" },
                { icon: ClockIcon, t: "22 years local", s: "1,400+ projects since 2004" },
              ].map(({ icon: Icon, t, s }) => (
                <li key={t} className="flex items-start gap-3 rounded-lg bg-white/10 p-3.5 backdrop-blur-sm ring-1 ring-white/10">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>
                    <span className="block font-semibold">{t}</span>
                    <span className="block text-white/65">{s}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CREDENTIALS STRIP */}
        <section aria-label="Credentials" className="border-b border-black/5 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 py-5 text-sm font-semibold uppercase tracking-wider text-ink/45 sm:px-6">
            <span>EPA Lead-Safe Certified</span>
            <span className="hidden sm:inline">·</span>
            <span>Certified Roofing Installer</span>
            <span className="hidden sm:inline">·</span>
            <span>A+ Accredited Business</span>
            <span className="hidden sm:inline">·</span>
            <span>Remodelers Assoc. Member</span>
            <span className="hidden sm:inline">·</span>
            <span>Summit Valley Best of 2025</span>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHead
              eyebrow="What we build"
              title="Every room. Inside and out."
              text="Real starting prices and real timelines — because you deserve to know before anyone sets foot in your house."
            />
            <a href="#estimate" className="shrink-0 font-semibold text-brand-dark hover:underline">Not sure where to start? Ask us →</a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <article key={s.title} className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition hover:shadow-lg">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img(s.image, 800)} alt={`${s.title} remodeling`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 flex justify-between bg-gradient-to-t from-black/75 to-transparent p-4 pt-10 text-sm text-white">
                    <span>From <strong className="text-base">{s.from}</strong></span>
                    <span className="inline-flex items-center gap-1"><ClockIcon className="h-4 w-4" /> {s.timeline}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase text-ink">{s.title === "Whole Home" ? "Additions & Whole Home" : s.title === "Kitchen" ? "Kitchen Remodeling" : s.title === "Bathroom" ? "Bathroom Remodeling" : s.title}</h3>
                  <p className="mt-2 text-ink/70">{s.blurb}</p>
                  <ul className="mt-4 space-y-1.5 text-sm text-ink/80">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2"><CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{p}</li>
                    ))}
                  </ul>
                  <a href="#estimate" className="mt-auto pt-5 text-sm font-semibold text-brand-dark hover:underline">Get a {s.title.toLowerCase()} estimate →</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* BEFORE / AFTER */}
        <section className="blueprint-bg text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <SectionHead
                light
                eyebrow="Before & after"
                title="Drag the slider. See the difference."
                text="Photos from real Kestrel Ridge job sites — no renderings, no stock “afters”. Every project is documented from demo day to final walkthrough."
              />
              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
                {[
                  ["1,400+", "Projects completed"],
                  ["96%", "Finished on or ahead of schedule"],
                  ["0", "Unresolved complaints"],
                ].map(([n, l]) => (
                  <div key={l}>
                    <dt className="font-display text-4xl font-bold text-brand">{n}</dt>
                    <dd className="mt-1 text-sm text-white/65">{l}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <BeforeAfter />
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
          <SectionHead
            eyebrow="Recent projects"
            title="Built in your neighborhood"
            text="Filter by project type and tap any project to see the scope, timeline and investment range."
          />
          <div className="mt-10">
            <Gallery />
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="bg-stone">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
            <SectionHead
              eyebrow="How it works"
              title="A clear process. No surprises."
              text="Most remodeling horror stories come from vague quotes and silent contractors. We built our process to prevent both."
            />
            <ol className="relative mt-14 grid gap-8 md:grid-cols-5 md:gap-5 md:before:absolute md:before:inset-x-0 md:before:top-6 md:before:h-0.5 md:before:bg-ink/10 md:before:content-['']">
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-4 md:block">
                  <span className="font-display relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-charcoal text-xl font-bold text-white ring-4 ring-stone">
                    {i + 1}
                  </span>
                  <div className="md:mt-5">
                    <h3 className="font-display text-xl font-bold uppercase text-ink">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY US + ESTIMATOR */}
        <section className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHead
              eyebrow="Why Kestrel Ridge"
              title="The contractor your neighbors recommend"
              text="We're a family-owned crew of 28 — carpenters, tile setters and roofers who are on our payroll, not random subs."
            />
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                { icon: UserIcon, t: "One project manager", d: "Your PM's cell number from day one. They're on site every day work happens." },
                { icon: DocIcon, t: "Line-item, fixed quotes", d: "Every material and labor cost spelled out. The number you sign is the number you pay." },
                { icon: BroomIcon, t: "Clean-site promise", d: "Floor protection, dust walls and a broom-swept site every evening. Every time." },
                { icon: ShieldIcon, t: "Permits & inspections", d: "We pull permits, schedule inspections and keep every document for your records." },
              ].map(({ icon: Icon, t, d }) => (
                <div key={t} className="rounded-xl bg-white p-5 ring-1 ring-black/5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand-dark"><Icon className="h-5 w-5" /></span>
                  <h3 className="mt-4 font-semibold text-ink">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-5 rounded-xl bg-charcoal p-5 text-white">
              <img src={img("1621905252507-b35492cc74b4", 300)} alt="Marcus Hale, owner of Kestrel Ridge Builders" loading="lazy" className="h-20 w-20 shrink-0 rounded-full object-cover ring-2 ring-brand" />
              <div>
                <p className="text-sm italic leading-relaxed text-white/80">“I grew up two streets from our shop. If I wouldn’t build it that way in my own home, we don’t build it that way in yours.”</p>
                <p className="mt-2 text-sm font-semibold">Marcus Hale <span className="font-normal text-white/60">· Owner &amp; Master Carpenter</span></p>
              </div>
            </div>
          </div>
          <CostEstimator />
        </section>

        {/* TESTIMONIALS */}
        <section id="reviews" className="bg-white">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionHead eyebrow="Reviews" title="Homeowners say it best" />
              <div className="flex items-center gap-4 rounded-xl bg-stone px-5 py-4">
                <span className="font-display text-5xl font-bold text-ink">4.9</span>
                <div>
                  <Stars />
                  <p className="mt-1 text-sm text-ink/60">312 verified reviews across Google, Houzz &amp; Angi</p>
                </div>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-xl bg-background p-6 ring-1 ring-black/5">
                  <Stars />
                  <blockquote className="mt-4 flex-1 leading-relaxed text-ink/80">“{t.text}”</blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-black/5 pt-4">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-sm font-bold text-white">
                      {t.name.replace("The ", "").charAt(0)}
                    </span>
                    <span className="text-sm">
                      <span className="block font-semibold text-ink">{t.name}</span>
                      <span className="block text-ink/55">{t.project} · {t.town}, OH</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICE AREA */}
        <section id="area" className="blueprint-bg text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionHead
                light
                eyebrow="Service area"
                title="Proudly local to Summit Valley"
                text="Our crews are based in Millbrook, so we’re never more than 40 minutes from your project — and we never disappear after the final invoice."
              />
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2">
                {towns.map((t) => (
                  <li key={t.name} className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="inline-flex items-center gap-2"><PinIcon className="h-4 w-4 text-brand" />{t.name}</span>
                    <span className="text-white/45">{t.time}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ZipCheck />
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
              <svg viewBox="0 0 400 400" className="h-full w-full">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#d97f14" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#d97f14" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="200" cy="200" r="190" fill="url(#glow)" />
                {[60, 110, 160].map((r) => (
                  <circle key={r} cx="200" cy="200" r={r} fill="none" stroke="white" strokeOpacity="0.15" strokeDasharray="4 6" />
                ))}
                <path d="M20 250 Q120 220 200 200 T380 140" stroke="white" strokeOpacity="0.25" strokeWidth="3" fill="none" />
                <path d="M150 20 Q170 120 200 200 T260 380" stroke="white" strokeOpacity="0.25" strokeWidth="3" fill="none" />
                {[
                  [140, 160, "Cedar Grove"], [265, 165, "Ashford"], [120, 260, "Lakeview"], [240, 285, "Northgate"],
                  [300, 90, "Pine Hollow"], [70, 120, "Oak Park"], [320, 300, "Hillcrest"], [200, 360, "Summit Falls"],
                ].map(([x, y, n]) => (
                  <g key={n as string}>
                    <circle cx={x as number} cy={y as number} r="5" fill="white" />
                    <text x={(x as number) + 9} y={(y as number) + 4} fill="white" fillOpacity="0.75" fontSize="12">{n}</text>
                  </g>
                ))}
                <circle cx="200" cy="200" r="14" fill="#d97f14" />
                <circle cx="200" cy="200" r="24" fill="none" stroke="#d97f14" strokeOpacity="0.5" strokeWidth="2" />
                <text x="200" y="236" fill="white" fontSize="14" fontWeight="700" textAnchor="middle">MILLBROOK HQ</text>
              </svg>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="mx-auto max-w-4xl px-4 py-20 sm:px-6 md:py-28">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">FAQ</p>
            <h2 className="font-display mt-2 text-4xl font-bold uppercase text-ink sm:text-5xl">Questions we hear every week</h2>
          </div>
          <div className="mt-10 divide-y divide-black/10 rounded-xl bg-white ring-1 ring-black/5">
            {faqs.map((f, i) => (
              <details key={f.q} className="group px-6 py-5" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone text-lg leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ESTIMATE */}
        <section id="estimate" className="bg-stone">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:py-28 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <SectionHead
                eyebrow="Free estimate"
                title="Let’s talk about your project"
                text="Tell us a little about what you have in mind. A real person — not a call center — will reach out within one business day."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Free in-home consultation & measurements",
                  "Written, line-item proposal in 3–5 business days",
                  "Financing from 0% APR for 12 months (OAC)",
                  "Insurance claim assistance for storm damage",
                ].map((x) => (
                  <li key={x} className="flex gap-3 text-ink/80">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand text-white"><CheckIcon className="h-3.5 w-3.5" /></span>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-10 space-y-3 rounded-xl bg-white p-6 text-sm ring-1 ring-black/5">
                <a href={business.phoneHref} className="flex items-center gap-3 font-semibold text-ink hover:text-brand-dark"><PhoneIcon className="h-5 w-5 text-brand" /> {business.phone}</a>
                <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-ink/80 hover:text-brand-dark"><MailIcon className="h-5 w-5 text-brand" /> {business.email}</a>
                <p className="flex items-center gap-3 text-ink/80"><PinIcon className="h-5 w-5 text-brand" /> {business.address}</p>
                <p className="flex items-center gap-3 text-ink/80"><ClockIcon className="h-5 w-5 text-brand" /> {business.hours}</p>
              </div>
            </div>
            <EstimateForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#16191e] pb-24 text-white/70 md:pb-0">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <span className="font-display text-xl font-bold uppercase tracking-wide text-white">{business.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Family-owned remodeling and exterior contractor serving Millbrook and Greater Summit Valley, Ohio since {business.founded}.
            </p>
            <p className="mt-4 text-xs text-white/50">{business.license} · Fully insured · EPA Lead-Safe Certified Firm</p>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold uppercase text-white">Services</h3>
            <ul className="mt-3 space-y-2 text-sm">
              {["Kitchen Remodeling", "Bathroom Remodeling", "Roofing", "Decks & Porches", "Windows & Doors", "Additions & Basements"].map((s) => (
                <li key={s}><a href="#services" className="hover:text-white">{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-lg font-bold uppercase text-white">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={business.phoneHref} className="hover:text-white">{business.phone}</a></li>
              <li><a href={`mailto:${business.email}`} className="hover:text-white">{business.email}</a></li>
              <li>{business.address}</li>
              <li>{business.hours}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/45 sm:flex-row sm:justify-between sm:px-6">
            <p>© 2026 {business.name}. Fictional business for demonstration purposes.</p>
            <p>
              Demo site by Saniyaj Mallik ·{" "}
              <a href="https://saniyajmallik.com" target="_blank" rel="noopener" className="underline-offset-2 hover:text-white hover:underline">
                saniyajmallik.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2 border-t border-black/10 bg-white/95 p-3 backdrop-blur md:hidden">
        <a href={business.phoneHref} className="flex items-center justify-center gap-2 rounded-md border border-ink/15 py-3 text-sm font-semibold text-ink">
          <PhoneIcon className="h-4 w-4 text-brand" /> Call Now
        </a>
        <a href="#estimate" className="flex items-center justify-center rounded-md bg-brand py-3 text-sm font-bold text-white">
          Free Estimate
        </a>
      </div>
    </>
  );
}
