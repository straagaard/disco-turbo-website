import Logo from "@/components/Logo";
import SiteHeader from "@/components/SiteHeader";
import {
  clients,
  designWork,
  nav,
  printWork,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <div id="top">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-lime focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        <section className="relative overflow-hidden border-b border-ink px-5 py-16 md:px-8 md:py-24 lg:px-12 lg:py-28">
          <p className="mb-8 text-sm tracking-tight md:text-base">
            Copenhagen · graphic design + print studio
          </p>

          <h1 className="max-w-[18ch] font-bold italic leading-[0.88] tracking-[-0.04em] text-[clamp(3.4rem,12vw,10.5rem)]">
            Graphic design
            <br />
            you can{" "}
            <span className="bg-lime px-1 italic">hold.</span>
          </h1>

          <div className="mt-12 flex max-w-3xl flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
            <p className="bread max-w-md text-lg leading-snug tracking-tight md:text-xl">
              We design identities, campaigns and printed matter — then produce
              them in-house. One room, from first sketch to finished sheet.
            </p>
            <div className="flex flex-col gap-2 text-lg">
              <a href="#clients" className="underline underline-offset-4">
                Selected clients
              </a>
              <a href="#contact" className="underline underline-offset-4">
                Start a project
              </a>
            </div>
          </div>

          <aside className="pointer-events-none mt-16 hidden w-max rotate-[-4deg] bg-magenta px-4 py-3 text-sm font-bold italic text-paper md:absolute md:right-12 md:top-24 md:mt-0 md:block">
            Press in the back room
          </aside>
        </section>

        <section
          id="clients"
          className="scroll-mt-16 overflow-hidden border-b border-ink bg-ink py-8 text-paper"
        >
          <div className="flex items-baseline justify-between px-5 md:px-8 lg:px-12">
            <h2 className="font-bold italic text-[clamp(2rem,5vw,3.5rem)] leading-none">
              Selected clients
            </h2>
            <p className="hidden text-sm text-lime lg:block">We’re working for</p>
          </div>

          <div className="mt-8 border-y border-paper/20 py-4">
            <div className="marquee-track flex w-max items-center gap-10 pr-10 text-[clamp(1.6rem,4vw,2.75rem)] font-bold italic leading-none">
              {[...clients, ...clients].map((name, index) => (
                <span
                  key={`${name}-${index}`}
                  className="inline-flex items-center gap-10 whitespace-nowrap"
                >
                  {name}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/disco-icon.svg"
                    alt=""
                    className="h-[1.45em] w-[1.45em] shrink-0"
                  />
                </span>
              ))}
            </div>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 px-5 pb-4 text-sm md:grid-cols-4 md:px-8 lg:grid-cols-6 lg:px-12">
            {clients.map((name, index) => (
              <li key={name} className="flex gap-2 tracking-tight">
                <span className="text-lime">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {name}
              </li>
            ))}
          </ul>
        </section>

        <section
          id="design"
          className="scroll-mt-16 border-b border-ink px-5 py-16 md:px-8 md:py-24 lg:px-12"
        >
          <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-sm">01 — Graphic design</p>
              <h2 className="max-w-[14ch] font-bold italic leading-[0.92] tracking-tight text-[clamp(2.4rem,7vw,5.5rem)]">
                Identity, campaigns, editorial, packaging.
              </h2>
            </div>
            <p className="bread max-w-sm text-base leading-snug md:text-lg">
              Logotypes, type, colour and systems that hold up across print and
              screen. Placeholder work below — swap in real cases when you’re
              ready.
            </p>
          </div>

          <ul className="grid gap-10 sm:grid-cols-2">
            {designWork.map((item) => (
              <li key={item.title}>
                <figure>
                  <div className="border border-ink bg-ink">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt=""
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                    <span className="font-bold italic text-xl">{item.title}</span>
                    <span className="text-sm">{item.meta}</span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="print"
          className="scroll-mt-16 border-b border-ink bg-cyan px-5 py-16 text-ink md:px-8 md:py-24 lg:px-12"
        >
          <p className="mb-3 text-sm">02 — Print</p>
          <h2 className="max-w-[16ch] font-bold italic leading-[0.92] tracking-tight text-[clamp(2.4rem,7vw,5.5rem)]">
            Colour, paper and finishing in-house.
          </h2>
          <p className="bread mt-8 max-w-xl text-lg leading-snug">
            Designers who understand production. Printers who care how the work
            looks before it hits the machine. No handoff into a black box.
          </p>

          <ul className="mt-14 grid gap-px bg-ink sm:grid-cols-2">
            {printWork.map((item, index) => (
              <li key={item.title} className="bg-cyan p-6 md:p-8">
                <p className="text-sm">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-bold italic text-3xl leading-none md:text-4xl">
                  {item.title}
                </h3>
                <p className="bread mt-4 max-w-sm leading-snug">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section
          id="about"
          className="scroll-mt-16 border-b border-ink px-5 py-16 md:px-8 md:py-24 lg:px-12"
        >
          <p className="mb-3 text-sm">03 — About Disco Turbo</p>
          <h2 className="max-w-[18ch] font-bold italic leading-[0.92] tracking-tight text-[clamp(2.4rem,7vw,5.5rem)]">
            A small Copenhagen practice with a press in the back room.
          </h2>

          <p className="bread mt-12 max-w-2xl text-lg leading-snug md:text-2xl md:leading-snug">
            Disco Turbo is an independent graphic design agency and print
            studio. We treat print as a design medium, not an afterthought —
            specifying paper, ink and finishing while the idea is still
            moving. Based in Copenhagen NV. Working in Danish and English.
          </p>
        </section>

        <section
          id="contact"
          className="scroll-mt-16 border-b border-ink bg-magenta px-5 py-16 text-paper md:px-8 md:py-24 lg:px-12"
        >
          <p className="mb-3 text-sm">04 — Contact</p>
          <h2 className="max-w-[14ch] font-bold italic leading-[0.92] tracking-tight text-[clamp(2.4rem,7vw,5.5rem)]">
            Come by the studio — or give us a call.
          </h2>
          <p className="bread mt-8 max-w-lg text-lg leading-snug">
            Identities, campaigns and print production. Write, call, or drop by
            Ringertoften.
          </p>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <div>
              <p className="text-sm">Email</p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block font-bold italic text-3xl underline underline-offset-4 md:text-4xl"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-sm">Studio</p>
              <address className="mt-2 not-italic font-bold italic text-3xl leading-tight md:text-4xl">
                {site.address.street}
                <br />
                {site.address.city}
              </address>
            </div>
            <div>
              <p className="text-sm">Phone</p>
              <ul className="mt-2 space-y-2">
                {site.people.map((person) => (
                  <li key={person.name}>
                    <a
                      href={`tel:${person.phone.replace(/\s/g, "")}`}
                      className="font-bold italic text-3xl leading-tight md:text-4xl"
                    >
                      {person.name}
                      <span className="bread mt-1 block text-lg">
                        {person.phone}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 px-5 py-6 text-sm md:flex-row md:items-center md:justify-between md:px-8 lg:px-12">
        <a href="#top" className="flex items-center gap-4 text-ink" aria-label="Disco Turbo">
          <Logo className="h-6 w-auto" />
          <span>Graphic design & print, {site.location}.</span>
        </a>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </a>
          ))}
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            {site.instagram.handle}
          </a>
        </div>
      </footer>
    </div>
  );
}
