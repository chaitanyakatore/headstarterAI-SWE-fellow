import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chaitanya Katore | Software Developer",
  description: "Crafting robust, scalable, and premium digital experiences. Specialist in full-stack web and AI applications.",
  openGraph: {
    title: "Chaitanya Katore",
    description: "Software Developer | Specializing in full-stack web and AI applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaitanya Katore | Software Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased min-h-screen selection:bg-purple-accent/30 selection:text-purple-accent"
      >
        {children}
      </body>
    </html>
  );
}
