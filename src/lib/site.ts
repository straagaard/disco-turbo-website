export const site = {
  name: "Disco Turbo",
  logo: "/disco-turbo-logo.svg",
  location: "Copenhagen",
  email: "hello@discoturbo.dk",
  instagram: {
    handle: "@discoturbokbh",
    url: "https://instagram.com/discoturbokbh",
  },
  address: {
    street: "Ringertoften 2, st, th",
    city: "2400 Copenhagen NV",
  },
  people: [
    { name: "Kristian", phone: "+45 30 66 60 60" },
    { name: "Lasse", phone: "+45 31 48 10 18" },
  ],
};

export const nav = [
  { label: "Clients", href: "#clients" },
  { label: "Design", href: "#design" },
  { label: "Print", href: "#print" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const clients = [
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
];

export const designWork = [
  {
    title: "Atelier Nord",
    meta: "Identity · 2025",
    image: "/cases/atelier-nord.svg",
  },
  {
    title: "Harbour Press",
    meta: "Editorial · 2024",
    image: "/cases/harbour-press.svg",
  },
  {
    title: "Pulse Festival",
    meta: "Campaign · 2025",
    image: "/cases/pulse-festival.svg",
  },
  {
    title: "Studio Edition",
    meta: "Book · 2024",
    image: "/cases/studio-edition.svg",
  },
];

export const printWork = [
  {
    title: "Offset & digital",
    text: "Short runs, samples and editions with tight colour — on the machines in the back room.",
  },
  {
    title: "Large format",
    text: "Posters, banners and spatial graphics for rooms, façades and streets.",
  },
  {
    title: "Finishing",
    text: "Foil, emboss, die-cut, bind. The details that make a sheet feel expensive.",
  },
  {
    title: "Paper & ink",
    text: "Stock, PMS, CMYK and fluorescent inks. We specify and print the same job.",
  },
];
