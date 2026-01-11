import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import StarryBackground from "@/components/StarryBackground";

export const metadata: Metadata = {
  title: "Star Sticker Shop - Handmade Galaxy Stickers",
  description: "Browse and buy beautiful handmade stickers with pastel galaxy themes. From shooting stars to nebulas, find the perfect cosmic sticker for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StarryBackground />
        <Header />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
