/**
 * Disco Turbo — site content
 * Replace copy, images, colours and projects here. The page reads from this file.
 *
 * Source: Notion “Website redesign” brief
 * https://app.notion.com/p/7572db222959417aa20f0baaebf0a6e5
 * Get the aha in seconds (studio + print shop), then two paths: work or a project.
 */

export const theme = {
  paper: "#F3EEE6",
  ink: "#111111",
  lime: "#D4FF3A",
  magenta: "#FF2D78",
  cyan: "#3AE8FF",
  violet: "#7C5CFF",
};

export const site = {
  name: "Disco Turbo",
  location: "Copenhagen",
  email: "hello@discoturbo.dk",
  phone: "+45 00 00 00 00",
  instagram: {
    handle: "@discoturbo",
    url: "https://instagram.com/discoturbo",
  },
  address: {
    street: "Enghavevej 00",
    city: "1674 Copenhagen V",
    country: "Denmark",
  },
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Copenhagen · studio + print shop",
  title: ["Graphic design", "+ print", "you can hold."],
  lede: "We design identities, campaigns and printed matter — then produce them in-house. One room, from first sketch to finished sheet.",
  actions: [
    { label: "See the work", href: "#work", variant: "primary" },
    { label: "Start a project", href: "#contact", variant: "ghost" },
  ],
};

export const studio = {
  id: "studio",
  kicker: "Studio",
  title: "Design with a press in the back room.",
  body: "Disco Turbo is a small Copenhagen practice that treats print as a design medium. Designers who understand production, printers who care how the work looks before it hits the machine.",
  tracks: [
    {
      kicker: "Graphic design",
      title: "Identity, campaigns, editorial, packaging.",
      items: [
        { title: "Identity", text: "Logotypes, type, colour and guidelines that hold up across print and digital." },
        { title: "Campaigns", text: "Posters, ads and social systems with a physical backbone." },
        { title: "Editorial", text: "Books, lookbooks, reports and magazines — sequence, paper, pace." },
        { title: "Packaging", text: "Structural and graphic design for products that need to be picked up." },
      ],
    },
    {
      kicker: "Print",
      title: "Colour, paper and finishing in-house.",
      items: [
        { title: "Offset & digital", text: "From one-offs and samples to editions with tight colour control." },
        { title: "Large format", text: "Posters, banners and spatial graphics for rooms and streets." },
        { title: "Finishing", text: "Foil, emboss, die-cut, bind — the details that make print feel expensive." },
        { title: "Paper & colour", text: "Stock selection, PMS, CMYK and fluorescent inks." },
      ],
    },
  ],
  facts: [
    { label: "Based", value: "Copenhagen V" },
    { label: "Founded", value: "2022" },
    { label: "Team", value: "Designers & printers" },
    { label: "Languages", value: "DA / EN" },
  ],
};

export const work = {
  id: "work",
  kicker: "Selected work",
  title: "Cases",
  intro: "Click a case for the brief, deliverables and production notes.",
  projects: [
    {
      slug: "atelier-nord",
      title: "Atelier Nord",
      meta: "Identity / print",
      year: "2025",
      image: "/cases/atelier-nord.svg",
      imageAlt: "Atelier Nord identity poster in lime and black",
      role: "Visual identity and studio stationery",
      summary:
        "A northern atelier needed a mark that works on a door, a letterhead and a screen — without losing the lime hit that made the first poster.",
      body: "We built a tight system: black field, fluorescent lime sheet, and a logotype that sits as type rather than a symbol. Print was the test. If the colour held on uncoated stock, the identity held.",
      deliverables: ["Logotype", "Poster", "Stationery", "Guidelines"],
      production: "Digital on uncoated stock, fluorescent lime, short studio run.",
    },
    {
      slug: "harbour-press",
      title: "Harbour Press",
      meta: "Editorial / offset",
      year: "2025",
      image: "/cases/harbour-press.svg",
      imageAlt: "Harbour Press magazine cover in magenta",
      role: "Issue design and offset production",
      summary:
        "An independent press asked for a magazine that feels like a harbour document: sequential, tactile, loud on the cover and quiet inside.",
      body: "Cover in magenta, interior in a restrained type grid. We designed and printed the issue in the same room, so paper choice, binding and colour were part of the layout from the start.",
      deliverables: ["Cover system", "Interior grid", "Offset edition", "Binding"],
      production: "Offset, magenta spot, saddle-stitch, 500 copies.",
    },
    {
      slug: "pulse-festival",
      title: "Pulse Festival",
      meta: "Campaign / posters",
      year: "2024",
      image: "/cases/pulse-festival.svg",
      imageAlt: "Pulse Festival campaign in cyan and violet",
      role: "Campaign identity and street posters",
      summary:
        "A city festival needed a campaign that reads at 40 km/h and still works as a phone lock screen.",
      body: "Cyan and violet as a pair, type as the image. Large-format posters for the street, a looping set of formats for social. The print run was the backbone — digital followed the sheets.",
      deliverables: ["Campaign system", "A0 / A1 posters", "Social frames", "Wayfinding"],
      production: "Large-format digital, cyan/violet, city-wide flyposting.",
    },
    {
      slug: "studio-edition-07",
      title: "Studio Edition 07",
      meta: "Publication / finishing",
      year: "2024",
      image: "/cases/studio-edition.svg",
      imageAlt: "Studio Edition 07 publication cover",
      role: "Self-initiated publication",
      summary:
        "Our own edition: a small book about process, paper and the jobs that never make a case study.",
      body: "Designed, printed and finished in-house. Foil and a tight bind as the argument: finishing is not decoration, it is the last design decision.",
      deliverables: ["Publication", "Cover foil", "Edition numbering", "Insert"],
      production: "Digital interior, foil-stamped cover, edition of 120.",
    },
  ],
};

export const contact = {
  id: "contact",
  kicker: "Contact",
  title: "Start a project — or come by the studio.",
  body: "Identities, campaigns and print production. Write, call, or visit for paper samples.",
};

export const footer = {
  note: "Disco Turbo — graphic design & print, Copenhagen.",
};
