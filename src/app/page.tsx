import DiscoIcon from "@/components/DiscoIcon";
import SiteHeader from "@/components/SiteHeader";
import {
  clients,
  instagramPosts,
  nav,
  printWork,
  site,
} from "@/lib/site";

export default function Home() {
  return (
    <div id="top" className="mx-auto max-w-[1180px] px-3 py-3 md:px-6 md:py-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-lime focus:px-3 focus:py-2"
      >
        Spring til indhold
      </a>

      <div className="overflow-hidden bg-paper">
        <SiteHeader />

        <main id="main">
          <section className="px-6 pb-16 pt-12 text-center md:px-16 md:pb-24 md:pt-20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/disco-turbo-hero.png"
              alt="Disco Turbo"
              className="mx-auto mb-10 w-full max-w-[56rem] md:mb-14"
            />

            <h1 className="mx-auto max-w-[20ch] text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] tracking-tight">
              Grafisk design og trykkeri under samme tag.
            </h1>

            <p className="bread mx-auto mt-6 max-w-3xl text-base leading-relaxed text-mute md:text-lg">
              Én adresse. Én proces. Rimelig meget styr på det.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center rounded-full bg-lime px-6 py-2.5 text-sm text-ink"
            >
              Kontakt
            </a>
          </section>

          <section id="print" className="scroll-mt-8 px-4 py-4 md:px-6 md:py-6">
            <div className="bg-snow px-6 py-16 text-center md:px-16 md:py-24">
              <h2 className="mx-auto max-w-[22ch] text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] tracking-tight">
                Vi sørger for at alt spiller, før det rammer maskinen.
              </h2>
              <p className="bread mx-auto mt-5 max-w-xl text-base leading-relaxed text-mute">
                Farver, papir, formater og efterbehandling. Det hele foregår
                in-house, fordi godt design ikke stopper ved skærmen.
              </p>

              <ul className="mx-auto mt-12 grid max-w-5xl gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {printWork.map((item) => (
                  <li key={item.title} className="px-2">
                    <DiscoIcon className="mx-auto h-9 w-9" />
                    <h3 className="mt-5 text-lg leading-tight">{item.title}</h3>
                    <p className="bread mx-auto mt-3 max-w-[28ch] text-sm leading-relaxed text-mute">
                      {item.text}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="clients"
            className="scroll-mt-8 border-t border-line px-6 py-12 text-center md:px-16 md:py-16"
          >
            <p className="bread mb-8 text-sm text-mute">Vi arbejder for</p>
            <ul className="mx-auto flex max-w-4xl flex-col items-center gap-y-4 md:flex-row md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-5">
              {clients.map((name, index) => (
                <li
                  key={name}
                  className="inline-flex items-center justify-center gap-6 text-lg tracking-tight md:text-xl"
                >
                  {name}
                  {index < clients.length - 1 && name !== "Kastrup Paper" ? (
                    <span className="hidden text-lime md:inline" aria-hidden>
                      *
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>

          <section
            id="about"
            className="scroll-mt-8 border-t border-line px-6 py-16 text-center md:px-16 md:py-24"
          >
            <h2 className="mx-auto max-w-[18ch] text-[clamp(1.8rem,4vw,3rem)] leading-[1.15] tracking-tight">
              Et lille københavnsk bureau med et trykkeri i baglokalet.
            </h2>
            <p className="bread mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute md:text-lg">
              Disco Turbo er et uafhængigt grafisk designbureau og trykkeri. Vi
              behandler tryk som et designmedium, ikke som en eftertanke —
              papir, farve og efterbehandling specificeres, mens ideen stadig
              er i bevægelse. Baseret i København NV.
            </p>

            <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {instagramPosts.map((post) => (
                <li key={post.href}>
                  <a
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group block overflow-hidden bg-ink"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.image}
                      alt=""
                      className="aspect-square w-full object-cover transition duration-300 group-hover:opacity-80"
                    />
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="mt-10 inline-flex items-center rounded-full bg-lime px-6 py-2.5 text-sm text-ink"
            >
              Følg os på Instagram
            </a>
          </section>

          <section id="contact" className="scroll-mt-8 px-4 pb-4 md:px-6 md:pb-6">
            <div className="bg-snow px-6 py-16 text-center md:px-16 md:py-24">
              <DiscoIcon className="mx-auto h-14 w-14" />
              <h2 className="mx-auto mt-8 max-w-[12ch] text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.1] tracking-tight">
                Fortæl os om dit næste projekt
              </h2>
              <p className="bread mx-auto mt-5 max-w-md text-base leading-relaxed text-mute">
                Identiteter, kampagner og trykproduktion. Skriv, eller kig
                forbi {site.address.street}, {site.address.city}.
              </p>

              <a
                href={`mailto:${site.email}`}
                className="mt-8 inline-flex items-center rounded-full bg-lime px-6 py-2.5 text-sm text-ink"
              >
                Skriv til os
              </a>
            </div>
          </section>
        </main>

        <footer className="flex flex-col items-center gap-3 px-6 py-6 text-center md:flex-row md:justify-between md:px-10 md:text-left">
          <p className="bread text-xs text-mute">
            Disco Turbo — grafisk design og tryk, {site.location}.
          </p>
          <div className="bread flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-mute">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-ink">
                {item.label}
              </a>
            ))}
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
