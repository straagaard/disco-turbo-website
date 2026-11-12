export const site = {
  name: "Disco Turbo",
  logo: "/disco-turbo-logo.svg",
  location: "København",
  email: "hello@discoturbo.dk",
  instagram: {
    handle: "@discoturbokbh",
    url: "https://instagram.com/discoturbokbh",
  },
  address: {
    street: "Ringertoften 2, st, th",
    city: "2400 København NV",
  },
};

export const nav = [
  { label: "Tryk", href: "#print" },
  { label: "Kunder", href: "#clients" },
  { label: "Om", href: "#about" },
  { label: "Kontakt", href: "#contact" },
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
];

export const instagramPosts = [
  {
    href: "https://www.instagram.com/discoturbokbh/p/DXt9ojmCLyc/",
    image: "/instagram/01.jpg",
  },
  {
    href: "https://www.instagram.com/discoturbokbh/p/DXr-Iw8CHA2/",
    image: "/instagram/02.jpg",
  },
  {
    href: "https://www.instagram.com/discoturbokbh/p/DW3yTxZiCKa/",
    image: "/instagram/03.jpg",
  },
  {
    href: "https://www.instagram.com/discoturbokbh/p/DWZUBuaiHcT/",
    image: "/instagram/04.jpg",
  },
];

export const designWork = [
  {
    title: "Atelier Nord",
    meta: "Identitet · 2025",
    image: "/cases/atelier-nord.svg",
  },
  {
    title: "Harbour Press",
    meta: "Editorial · 2024",
    image: "/cases/harbour-press.svg",
  },
  {
    title: "Pulse Festival",
    meta: "Kampagne · 2025",
    image: "/cases/pulse-festival.svg",
  },
  {
    title: "Studio Edition",
    meta: "Bog · 2024",
    image: "/cases/studio-edition.svg",
  },
];

export const printWork = [
  {
    title: "Offset og digital",
    text: "Korte oplag, prøver og udgaver med præcis farve — på maskinerne i baglokalet.",
  },
  {
    title: "Storformat",
    text: "Plakater, bannere og rumgrafik til lokaler, facader og gader.",
  },
  {
    title: "Efterbehandling",
    text: "Folie, præg, stans, indbinding. Detaljerne der får et ark til at føles dyrt.",
  },
  {
    title: "Papir og farve",
    text: "Papir, PMS, CMYK og fluorescerende farver. Vi specificerer og trykker det samme job.",
  },
];
