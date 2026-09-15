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
  title: "Disco Turbo — Graphic design & print, Copenhagen",
  description:
    "Disco Turbo is a Copenhagen graphic design agency and print studio. Identities, campaigns and printed matter — designed and produced in-house.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interV.variable} ${interV.className} h-full antialiased`}>
      <body className="min-h-full bg-paper font-sans font-bold italic text-ink">
        {children}
      </body>
    </html>
  );
}
