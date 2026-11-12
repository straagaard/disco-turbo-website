"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="relative z-50 px-6 py-5 md:px-10 md:py-7">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <a
            href={`mailto:${site.email}`}
            className="bread justify-self-start text-sm text-mute hover:text-ink"
          >
            {site.email}
          </a>

          <nav
            className="hidden items-center justify-center gap-2 lg:flex"
            aria-label="Hovedmenu"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-1.5 text-[0.85rem] text-ink hover:text-lime"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            className="bread hidden justify-self-end text-sm text-mute hover:text-ink lg:inline"
          >
            Instagram
          </a>

          <button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Luk menu" : "Åbn menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Luk" : "Menu"}</span>
            <span
              className={`absolute h-[2px] w-6 bg-ink transition ${
                open ? "translate-y-0 rotate-45" : "-translate-y-[7px]"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-ink transition ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-[2px] w-6 bg-ink transition ${
                open ? "translate-y-0 -rotate-45" : "translate-y-[7px]"
              }`}
            />
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-paper px-6 pt-24 text-center lg:hidden"
        >
          <nav className="flex flex-col items-center gap-3" aria-label="Mobilmenu">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11vw] leading-[0.95] tracking-tight"
                onClick={() => {
                  setOpen(false);
                  document.body.style.overflow = "";
                  window.setTimeout(() => {
                    document.querySelector(item.href)?.scrollIntoView({
                      behavior: "smooth",
                    });
                  }, 0);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
