"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { nav } from "@/lib/site";

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
      <header className="sticky top-0 z-50 border-b border-ink bg-paper">
        <div className="flex items-center justify-between gap-6 px-5 py-5 md:px-8 lg:px-12">
          <a href="#top" className="shrink-0 text-ink" aria-label="Disco Turbo">
            <Logo className="h-[27px] w-auto md:h-[30px]" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[0.95rem] tracking-tight underline-offset-4 hover:underline"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden bg-ink px-4 py-2 text-[0.9rem] text-paper lg:inline-block"
          >
            Start a project
          </a>

          <button
            type="button"
            className="border border-ink px-3 py-1.5 text-sm lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-40 bg-lime px-5 pt-24 lg:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-bold italic text-[12vw] leading-[0.95] tracking-tight"
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
