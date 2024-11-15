import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold">
              Niezależny Portal
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Strona Główna
              </Link>
              <Link href="/news" className="text-gray-600 hover:text-gray-900">
                Aktualności
              </Link>
              <Link href="/articles" className="text-gray-600 hover:text-gray-900">
                Politycy
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
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
          </div>
        </div>
      </div>
    </header>
  );
}