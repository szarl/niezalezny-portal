import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../assets/globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niezależny Portal",
  description: "Stworzony przez niezależnych dla niezależnych",
  keywords: "polityka, aktualności, niezależne media, ratings polityków",
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
        {/* <div className="flex-1 container mx-auto px-6 py-16 flex gap-6 h-screen"> */}
            {/* <Sidebar className="hidden lg:block w-64 flex-shrink-0" /> */}
            <main className="flex-1 min-h-0 pt-16 px-8 pb-8">
              {children}
            </main>
          {/* </div> */}
        <Footer />
      </body>
    </html>
  );
}
