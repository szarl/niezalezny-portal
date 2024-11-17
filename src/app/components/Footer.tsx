import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


export default function Footer() {
    return (
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-3">O nas</h3>
              <p className="text-sm text-gray-600">
                Niezależny Portal - miejsce rzetelnej informacji i obiektywnych ocen.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Polityka i warunki korzystania z serwisu</h3>
              <nav className="space-y-2">
                <Link href="/o-portalu" className="block text-sm text-gray-600 hover:text-gray-900">
                  O portalu
                </Link>
                <Link href="/polityka-prywatnosci" className="block text-sm text-gray-600 hover:text-gray-900">
                  Polityka prywatności
                </Link>
                <Link href="/regulamin" className="block text-sm text-gray-600 hover:text-gray-900">
                  Regulamin
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Kontakt</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>email: kontakt@portal.pl</p>
                <p>tel: +48 123 456 789</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Newsletter</h3>
              <div className="space-y-2">
                <Input type="email" placeholder="Twój email" />
                <Button className="w-full">Zapisz się</Button>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t text-center text-sm text-gray-600">
            <p>© 2024 Niezależny Portal. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    );
  }