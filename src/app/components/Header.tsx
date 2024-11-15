"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="mx-auto px-4">
        <div className="relative h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold text-nowrap">
              Niezależny Portal
            </Link>
            <nav className={cn("absolute top-16 left-0 w-full bg-white border-t z-10 p-4 space-y-2 shadow-lg rounded-b md:static md:bg-transparent md:border-0 md:p-0 md:space-y-0 md:shadow-none md:flex md:items-center md:gap-4", { "block": isMenuOpen, "hidden": !isMenuOpen })}>
              <Link href="/wydarzenia" className="block text-gray-600 hover:text-gray-900 md:inline">
                Wydarzenia
              </Link>
              <Link href="/politycy" className="block text-gray-600 hover:text-gray-900 md:inline">
                Politycy
              </Link>
              <Link href="/kontakt" className="block text-gray-600 hover:text-gray-900 md:inline">
                Kontakt
              </Link>
            </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative">
            <Input
              type="search"
              placeholder="Szukaj..."
              className="w-64 pl-8"
            />
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
          <Button size="sm">Zaloguj</Button>
          <button
            className="block md:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        </div>
      </div>
    </header>
  );
}