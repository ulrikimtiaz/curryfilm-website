import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Curry Film | Prisvinnende Film- og TV-produksjon",
  description: "Curry Film AS har produsert filmer og TV-serier siden 2012. Vi skaper engasjerende historier for TV, kino og digitale plattformer.",
  openGraph: {
    title: "Curry Film | Prisvinnende Film- og TV-produksjon",
    description: "Curry Film AS har produsert filmer og TV-serier siden 2012.",
    url: "https://curryfilm.com",
    siteName: "Curry Film",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Curry Film",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
