// app/page.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, ArrowRight, LineChart, TrendingUp, Users } from "lucide-react";
import Link from "next/link";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

interface PoliticianRating {
  id: string;
  name: string;
  party: string;
  rating: number;
  trend: 'up' | 'down' | 'neutral';
}

// Przykładowe dane (docelowo z Firebase)
const featuredNews: NewsItem[] = [
  {
    id: "1",
    title: "Ważne zmiany w ustawie o samorządzie terytorialnym",
    excerpt: "Sejm przyjął nowelizację ustawy o samorządzie terytorialnym. Sprawdź, co się zmieni...",
    date: "2024-03-15",
    category: "Ustawy",
  },
  // ... więcej newsów
];

const topPoliticians: PoliticianRating[] = [
  {
    id: "1",
    name: "Jan Kowalski",
    party: "Partia A",
    rating: 7.8,
    trend: 'up',
  },
  // ... więcej polityków
];

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg overflow-hidden">
        <div className="relative z-10 px-6 py-12 md:py-20 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Witaj w Niezależnym Portalu
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            Dostarczamy obiektywne informacje i analizy polityczne. Sprawdź aktualne ratingi polityków i najnowsze wydarzenia.
          </p>
          <div className="flex gap-4">
            <Button size="lg" variant="secondary" className="hover:bg-white">
              Sprawdź ratingi
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="secondary" className="hover:bg-white">
              Najnowsze artykuły
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured News */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Najważniejsze wydarzenia
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {featuredNews.map((news) => (
                <article key={news.id} className="border-b pb-4 last:border-0">
                  <div className="text-sm text-muted-foreground mb-1">
                    {news.category} • {news.date}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    <Link href={`/news/${news.id}`} className="hover:text-blue-600">
                      {news.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground">{news.excerpt}</p>
                </article>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Politicians Ratings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Politycy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topPoliticians.map((politician) => (
                <div key={politician.id} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{politician.name}</div>
                    <div className="text-sm text-muted-foreground">{politician.party}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-lg font-semibold">{politician.rating}</div>
                    {politician.trend === 'up' && (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Statistics Section */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <LineChart className="h-5 w-5" />
              Statystyki i trendy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-600 mb-1">Aktywni użytkownicy</div>
                <div className="text-2xl font-bold">2,345</div>
                <div className="text-sm text-muted-foreground">+15% więcej niż wczoraj</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-green-600 mb-1">Nowe opinie</div>
                <div className="text-2xl font-bold">456</div>
                <div className="text-sm text-muted-foreground">Ostatnie 24h</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-purple-600 mb-1">Ocenieni politycy</div>
                <div className="text-2xl font-bold">89</div>
                <div className="text-sm text-muted-foreground">Z 120 aktywnych</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Community Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Społeczność
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-4">
              <p className="mb-4">Dołącz do społeczności i bądź na bieżąco!</p>
              <Button className="w-full">
                Dołącz teraz
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}