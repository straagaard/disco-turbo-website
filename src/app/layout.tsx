import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interV = localFont({
  src: "../fonts/Inter-V.otf",
  display: "swap",
  variable: "--font-inter-v",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Disco Turbo — Grafisk design og tryk, København",
  description:
    "Disco Turbo er et københavnsk grafisk designbureau og trykkeri. Identiteter, kampagner og tryksager — designet og produceret in-house.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="da" className={`${interV.variable} ${interV.className} h-full antialiased`}>
      <body className="min-h-full bg-mist font-sans font-bold italic text-ink">
        {children}
      </body>
    </html>
  );
}
