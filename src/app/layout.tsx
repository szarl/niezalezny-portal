import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niezależny Portal",
  description: "Stworzony przez niezależnych dla niezależnych",
  keywords: "polityka, wydarzenia, niezależne media, ocena polityków",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          <main className="flex-1 min-h-0 p-8">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  );
}
