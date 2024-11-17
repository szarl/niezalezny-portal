import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

// Przykładowe dane (docelowo z Firebase)
const news: NewsItem[] = [
  {
    id: "1",
    title: "Nowa ustawa o ochronie środowiska uchwalona",
    excerpt: "Sejm uchwalił nową ustawę mającą na celu poprawę stanu środowiska naturalnego w kraju. Jakie są najważniejsze zmiany?",
    date: "2024-04-20",
    category: "Polityka",
  },
  {
    id: "2",
    title: "Rekordowa inflacja - wzrost cen o 12% w skali roku",
    excerpt: "Najnowsze dane GUS pokazują, że inflacja w Polsce wciąż przyspiesza, osiągając najwyższy poziom od lat. Rząd zapowiada działania...",
    date: "2024-04-18",
    category: "Gospodarka",
  },
  {
    id: "3", 
    title: "Zmiany w systemie emerytalnym - obniżenie wieku",
    excerpt: "Minister Rodziny i Polityki Społecznej przedstawiła projekt ustawy zakładający powrót do niższego wieku emerytalnego. Sprawdź szczegóły.",
    date: "2024-04-15",
    category: "Polityka",
  },
  {
    id: "4",
    title: "Nowy sondaż przedwyborczy - PiS liderem z 38% poparciem",
    excerpt: "Najnowszy sondaż pracowni XYZ pokazuje, że partia rządząca umacnia swoją pozycję przed zbliżającymi się wyborami parlamentarnymi.",
    date: "2024-04-12",
    category: "Polityka",
  },
  {
    id: "5",
    title: "Otwarcie nowego terminalu na lotnisku Chopina",
    excerpt: "Dzisiaj odbyło się uroczyste otwarcie nowego terminalu na Lotnisku Chopina w Warszawie. Inwestycja ma poprawić komfort podróżnych.",
    date: "2024-04-10",
    category: "Gospodarka",
  },
  {
    id: "6",
    title: "Masowe protesty rolników w Warszawie",
    excerpt: "Tysiące rolników zgromadziło się na ulicach Warszawy, domagając się wyższych dopłat i ochrony krajowej produkcji żywności.",
    date: "2024-04-08",
    category: "Społeczeństwo",
  },
];

export default function NewsPage() {
  return (
    <div className="space-y-6">
      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <Card key={item.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">{item.category}</div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
              </div>
            </CardHeader>
            <CardContent className="h-48">
              <h3 className="text-lg font-semibold mb-2">
                <Link href={`/wydarzenia/${item.id}`} className="hover:text-blue-600">
                  {item.title}
                </Link>
              </h3>
              <p className="text-muted-foreground">{item.excerpt}</p>
            </CardContent>
            <div className="border-t p-4 h-16">
              <Link href={`/wydarzenia/${item.id}`} className="text-blue-600 flex items-center gap-1 hover:gap-2 transition-all">
                Czytaj więcej
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="secondary">
          Załaduj więcej
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}