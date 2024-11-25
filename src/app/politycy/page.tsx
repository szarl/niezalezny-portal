import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
import Loader from "../components/Loader";
import { Politician } from "./Politician";


// Komponent karty polityka dla strony głównej
const PoliticianCard = ({ politician }: { politician: Politician }) => {
  const { id, name, party, rating, imageUrl } = politician;
  
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer">
        <Link href={`politycy/${id}`}>
            <CardHeader className="flex flex-row items-center gap-4">
                <Avatar className="h-16 w-16">
                    <AvatarImage src={imageUrl} alt={name} />
                    <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                <div>
                <CardTitle className="text-xl">{name}</CardTitle>
                <CardDescription>{party}</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2">
                <Star className="fill-yellow-400 text-yellow-400" size={20} />
                <span className="text-lg font-semibold">{rating.toFixed(1)}/10.0</span>
                </div>
            </CardContent>
        </Link>
    </Card>
  );
};

// Strona główna z listą polityków
export default function PoliticiansPage() {
  const politicians: Politician[] = [
    {
      id: 1,
      name: "Jan Kowalski",
      party: "Partia A",
      rating: 8.5,
      imageUrl: "/api/placeholder/150/150",
      description: "",
      achievements: [],
      controversies: [],
      opinions: []
    },
    {
      id: 2,
      name: "Anna Nowak",
      party: "Partia B",
      rating: 6.8,
      imageUrl: "/api/placeholder/150/150",
      description: "",
      achievements: [],
      controversies: [],
      opinions: []
    }
  ];

  if (!politicians || !politicians.length) {
    return (
      <Loader />
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Polscy Politycy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {politicians.map((politician) => (
          <PoliticianCard key={politician.id} politician={politician} />
        ))}
      </div>
    </div>
  );
};