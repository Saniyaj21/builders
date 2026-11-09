export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&q=70&auto=format&fit=crop`;

export const business = {
  name: "Kestrel Ridge Builders",
  short: "Kestrel Ridge",
  tagline: "Remodeling & Exteriors",
  phone: "(555) 010-1234",
  phoneHref: "tel:+15550101234",
  email: "hello@example.com",
  address: "418 Foundry Street, Millbrook, OH 44890",
  license: "OH Lic. #GC-048213",
  hours: "Mon–Fri 7:30am–5:30pm · Sat by appointment",
  founded: 2004,
};

export type Category = "Kitchen" | "Bathroom" | "Roofing" | "Deck & Outdoor" | "Windows & Doors" | "Whole Home";

export const services: {
  title: Category;
  blurb: string;
  from: string;
  timeline: string;
  image: string;
  points: string[];
}[] = [
  {
    title: "Kitchen",
    blurb: "Full gut remodels, layout changes and cabinet refreshes — designed around how your family actually cooks.",
    from: "$28k",
    timeline: "5–8 weeks",
    image: "1565183928294-7063f23ce0f8",
    points: ["Custom & semi-custom cabinetry", "Quartz, granite & butcher block", "Islands, lighting & open layouts"],
  },
  {
    title: "Bathroom",
    blurb: "Walk-in showers, soaking tubs and aging-in-place upgrades with waterproofing done right the first time.",
    from: "$14k",
    timeline: "2–4 weeks",
    image: "1584622650111-993a426fbf0a",
    points: ["Tile showers & glass enclosures", "Heated floors & double vanities", "ADA & curbless conversions"],
  },
  {
    title: "Roofing",
    blurb: "Tear-offs, re-roofs and storm repairs with manufacturer-backed systems and a crew that cleans up every nail.",
    from: "$11k",
    timeline: "1–3 days",
    image: "1632759145351-1d592919f522",
    points: ["Architectural shingle & metal", "Storm & insurance claim help", "Gutters, flashing & ventilation"],
  },
  {
    title: "Deck & Outdoor",
    blurb: "Composite and cedar decks, covered porches and patios built to code and built for Ohio winters.",
    from: "$16k",
    timeline: "1–3 weeks",
    image: "1558036117-15d82a90b9b1",
    points: ["Composite & hardwood decking", "Screened & covered porches", "Railings, stairs & lighting"],
  },
  {
    title: "Windows & Doors",
    blurb: "Energy-efficient replacement windows, patio doors and entry doors that cut drafts and utility bills.",
    from: "$650/window",
    timeline: "1–2 days",
    image: "1600573472550-8090b5e0745e",
    points: ["Double & triple-pane options", "Sliding & French patio doors", "Fiberglass & steel entry doors"],
  },
  {
    title: "Whole Home",
    blurb: "Additions, basement finishes and whole-floor renovations managed start to finish by one dedicated PM.",
    from: "$60k",
    timeline: "8–16 weeks",
    image: "1600210492486-724fe5c67fb0",
    points: ["Room additions & bump-outs", "Finished basements", "Open-concept conversions"],
  },
];

export type Project = {
  id: string;
  title: string;
  category: Category;
  town: string;
  duration: string;
  budget: string;
  image: string;
  summary: string;
};

export const projects: Project[] = [
  { id: "p1", title: "Farmhouse Kitchen Opening", category: "Kitchen", town: "Millbrook", duration: "7 weeks", budget: "$45k–$55k", image: "1565183928294-7063f23ce0f8", summary: "Removed a load-bearing wall, added a 9-ft quartz island and moved the sink under a new picture window." },
  { id: "p2", title: "Spa Primary Bath", category: "Bathroom", town: "Cedar Grove", duration: "4 weeks", budget: "$30k–$38k", image: "1584622650111-993a426fbf0a", summary: "Curbless walk-in shower with linear drain, floating double vanity and heated porcelain floors." },
  { id: "p3", title: "Storm Re-Roof After Hail", category: "Roofing", town: "Ashford", duration: "2 days", budget: "Insurance claim", image: "1632759145351-1d592919f522", summary: "Full tear-off to decking, ice & water shield, architectural shingles and new ridge venting. Claim handled with the adjuster." },
  { id: "p4", title: "Lakeside Cedar Deck", category: "Deck & Outdoor", town: "Lakeview", duration: "2 weeks", budget: "$24k–$30k", image: "1558036117-15d82a90b9b1", summary: "Two-level cedar deck with wide stairs to the lawn, cable rail and integrated step lighting." },
  { id: "p5", title: "Glass Wall Sunroom Doors", category: "Windows & Doors", town: "Hillcrest", duration: "3 days", budget: "$18k–$22k", image: "1600573472550-8090b5e0745e", summary: "Replaced a dated slider with a four-panel glass wall that opens the living room to the pool deck." },
  { id: "p6", title: "Modern Two-Tone Kitchen", category: "Kitchen", town: "Northgate", duration: "6 weeks", budget: "$38k–$46k", image: "1600585152220-90363fe7e115", summary: "Flat-panel walnut and white cabinetry, waterfall island and a hidden walk-in pantry." },
  { id: "p7", title: "Freestanding Tub Retreat", category: "Bathroom", town: "Pine Hollow", duration: "3 weeks", budget: "$22k–$28k", image: "1620626011761-996317b8d101", summary: "Converted an unused jetted tub alcove into a freestanding soaker with a wall-mounted filler." },
  { id: "p8", title: "Craftsman Exterior Refresh", category: "Whole Home", town: "Oak Park", duration: "5 weeks", budget: "$52k–$60k", image: "1570129477492-45c003edd2be", summary: "New wraparound porch, siding, trim and windows on a 1920s farmhouse — keeping every bit of its character." },
  { id: "p9", title: "Neighborhood Roof Replacements", category: "Roofing", town: "Millbrook", duration: "1–2 days each", budget: "$12k–$19k", image: "1605276374104-dee2a0ed3cd6", summary: "Seven homes on one street re-roofed after the spring windstorm, each with a lifetime shingle warranty." },
  { id: "p10", title: "Open-Plan Living Renovation", category: "Whole Home", town: "Cedar Grove", duration: "10 weeks", budget: "$85k–$95k", image: "1600607687939-ce8a6c25118c", summary: "Combined three closed-off rooms into one bright living, dining and kitchen space with wide-plank oak." },
  { id: "p11", title: "Black-Frame Window Upgrade", category: "Windows & Doors", town: "Ashford", duration: "2 days", budget: "$16k–$20k", image: "1600047509807-ba8f99d2cdde", summary: "Eighteen triple-pane windows with black exterior frames. Owner's winter heating bill dropped 22%." },
  { id: "p12", title: "Hillside Family Deck", category: "Deck & Outdoor", town: "Hillcrest", duration: "3 weeks", budget: "$28k–$34k", image: "1568605114967-8130f3a36994", summary: "Elevated composite deck on helical piers with a built-in grill station and under-deck dry storage." },
];

export const beforeAfter = [
  {
    id: "kitchen",
    label: "Kitchen gut remodel",
    town: "Millbrook",
    before: "1591588582259-e675bd2e6088",
    after: "1565183928294-7063f23ce0f8",
    note: "Down to the studs: new subfloor, electrical, plumbing and a layout that finally works.",
  },
  {
    id: "living",
    label: "Basement-to-living conversion",
    town: "Cedar Grove",
    before: "1581858726788-75bc0f6a952d",
    after: "1600210492486-724fe5c67fb0",
    note: "An empty, echoing lower level turned into a warm family room with built-ins and recessed lighting.",
  },
];

export const steps = [
  { title: "Free consultation", text: "We visit your home, listen, measure and talk honestly about budget. No pressure, no 3-hour sales pitch." },
  { title: "Design & fixed-price quote", text: "You get a detailed written proposal with line items, materials and a schedule — the price doesn't creep." },
  { title: "Permits & scheduling", text: "We pull every permit, order materials and lock your start date. You'll know your crew lead by name." },
  { title: "Build with daily updates", text: "Protected floors, a tidy site every evening and a photo update in your inbox at the end of each workday." },
  { title: "Walkthrough & warranty", text: "We walk every detail together, fix the punch list, and hand you a 10-year workmanship warranty in writing." },
];

export const testimonials = [
  { name: "Dana & Mark R.", town: "Millbrook", project: "Kitchen remodel", text: "They finished two days early and the final invoice matched the quote to the dollar. The daily photo updates meant we never had to chase anyone for answers." },
  { name: "Priya S.", town: "Cedar Grove", project: "Primary bathroom", text: "Our old shower leaked into the ceiling for years. Kestrel Ridge rebuilt it properly, explained every step, and the crew left the house cleaner than they found it." },
  { name: "Tom Whitaker", town: "Ashford", project: "Storm roof replacement", text: "After the hailstorm, Luis met the insurance adjuster with me and caught damage the adjuster missed. New roof was on in two days. Couldn't recommend them more." },
  { name: "Angela M.", town: "Lakeview", project: "Cedar deck", text: "We got four quotes. Theirs wasn't the cheapest, but it was the only one that explained footings, drainage and hardware. Three winters later the deck still looks new." },
  { name: "The Okafor family", town: "Northgate", project: "Whole-floor renovation", text: "One project manager from day one to the walkthrough. When we changed our minds on flooring mid-project, they priced it the same day with zero drama." },
  { name: "Greg L.", town: "Hillcrest", project: "Windows & patio door", text: "Eighteen windows installed in two days, every one caulked and trimmed perfectly. Our living room isn't freezing anymore and the gas bill proves it." },
];

export const towns = [
  { name: "Millbrook", time: "Home base" },
  { name: "Cedar Grove", time: "12 min" },
  { name: "Ashford", time: "15 min" },
  { name: "Lakeview", time: "18 min" },
  { name: "Northgate", time: "20 min" },
  { name: "Pine Hollow", time: "22 min" },
  { name: "Oak Park", time: "25 min" },
  { name: "Hillcrest", time: "28 min" },
  { name: "Summit Falls", time: "35 min" },
  { name: "Bristol Township", time: "40 min" },
];

export const faqs = [
  { q: "Are you licensed and insured?", a: "Yes. Kestrel Ridge Builders holds Ohio general contractor license #GC-048213, carries $2M general liability and full workers' compensation coverage. We email a certificate of insurance with every proposal — just ask." },
  { q: "Is the estimate really free?", a: "Completely. The in-home consultation and written proposal cost nothing and carry no obligation. Most proposals are delivered within 3–5 business days of the visit." },
  { q: "Will the price change once work starts?", a: "Our quotes are fixed-price for the scope we agree on. The only time the price changes is if you request a change, or we uncover something hidden (like rot behind a wall) — and we'll never proceed on a change without your written sign-off." },
  { q: "Do you offer financing?", a: "Yes. We partner with a local credit union to offer 0% for 12 months or low fixed-rate plans up to 120 months on approved credit. Pre-qualifying won't affect your credit score." },
  { q: "Do you help with insurance claims for roof damage?", a: "We do. We'll inspect and document storm damage, meet your adjuster on site and provide the itemized paperwork your insurer needs." },
  { q: "Do I need to move out during a remodel?", a: "Almost never. For kitchens we can set up a temporary kitchenette, and we always keep at least one working bathroom. We seal off work areas with zip walls and HEPA air scrubbers." },
  { q: "What warranty do you provide?", a: "Every project includes our 10-year written workmanship warranty, on top of manufacturer warranties (lifetime on most roofing systems and windows we install)." },
];

export const estimatorRates: Record<string, { label: string; unit: string; min: number; max: number; sizes: { label: string; mult: number }[] }> = {
  kitchen: { label: "Kitchen", unit: "", min: 28000, max: 42000, sizes: [{ label: "Refresh (cabinets & counters)", mult: 0.7 }, { label: "Mid-range remodel", mult: 1 }, { label: "Full gut + layout change", mult: 1.6 }] },
  bathroom: { label: "Bathroom", unit: "", min: 14000, max: 22000, sizes: [{ label: "Hall / guest bath", mult: 0.85 }, { label: "Primary bath", mult: 1.35 }, { label: "Primary spa suite", mult: 2 }] },
  roofing: { label: "Roof replacement", unit: "", min: 11000, max: 15000, sizes: [{ label: "Under 1,500 sq ft home", mult: 0.85 }, { label: "1,500–2,500 sq ft home", mult: 1.15 }, { label: "2,500+ sq ft home", mult: 1.6 }] },
  deck: { label: "Deck", unit: "", min: 16000, max: 24000, sizes: [{ label: "Small (up to 200 sq ft)", mult: 0.75 }, { label: "Medium (200–400 sq ft)", mult: 1.1 }, { label: "Large / multi-level", mult: 1.7 }] },
  windows: { label: "Windows", unit: "", min: 6500, max: 9500, sizes: [{ label: "Up to 8 windows", mult: 1 }, { label: "9–15 windows", mult: 1.8 }, { label: "Whole house (16+)", mult: 2.7 }] },
};
