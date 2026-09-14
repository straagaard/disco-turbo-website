/**
 * Disco Turbo — site content
 * Replace copy, images, colours and client names here. The page reads from this file.
 *
 * Source: Notion “Website redesign” brief
 * https://app.notion.com/p/7572db222959417aa20f0baaebf0a6e5
 * Get the aha in seconds (studio + print shop), then two paths: clients or a project.
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
  logo: "/logo.png",
  location: "Copenhagen",
  email: "hello@discoturbo.dk",
  people: [
    { name: "Kristian", phone: "+45 30 66 60 60" },
    { name: "Lasse", phone: "+45 31 48 10 18" },
  ],
  instagram: {
    handle: "@discoturbokbh",
    url: "https://instagram.com/discoturbokbh",
  },
  address: {
    street: "Ringertoften 2, st, th",
    city: "2400 Copenhagen NV",
  },
};

export const nav = [
  { label: "Clients", href: "#clients" },
  { label: "Studio", href: "#studio" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  eyebrow: "Copenhagen · studio + print shop",
  title: ["Graphic design", "+ print", "you can hold."],
  lede: "We design identities, campaigns and printed matter — then produce them in-house. One room, from first sketch to finished sheet.",
  actions: [
    { label: "Selected clients", href: "#clients", variant: "primary" },
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

export const clients = {
  id: "clients",
  caption: "Companies we’ve worked with.",
  names: [
    "Atelier Nord",
    "Harbour Press",
    "Pulse Festival",
    "Kastrup Paper",
    "Enghave Records",
    "Nordhavn Objects",
    "Sunday Market",
    "Palads",
    "Vesterbro Press",
    "Amager Light",
    "Refshaleøen",
    "Halmtorvet",
  ],
};

export const contact = {
  id: "contact",
  kicker: "Contact",
  title: "Come by our studio – or give us a call",
  body: "Identities, campaigns and print production. Write, call, or drop by",
};

export const footer = {
  note: "Disco Turbo — graphic design & print, Copenhagen.",
};
