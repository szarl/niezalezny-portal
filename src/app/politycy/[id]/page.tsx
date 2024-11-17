import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge, Star } from "lucide-react";
import { Politician } from "../Politician";

// export default function PoliticianDetails({ politician }: { politician: Politician }) {
export default function PoliticianDetails() {
    const politician: Politician = {
        achievements: [
            "Wprowadzenie reformy edukacyjnej",
            "Zwiększenie budżetu na służbę zdrowia",
            "Utworzenie nowych miejsc pracy w sektorze IT"
        ],
        controversies: [
            "Afera korupcyjna w 2018 roku",
            "Kontrowersyjna wypowiedź na temat imigracji",
            "Zarzuty o nepotyzm"
        ],
        opinions: [
            {
                author: "Anna Nowak",
                content: "Bardzo dobry polityk, który dba o interesy obywateli.",
                id: 0,
                rating: 5,
                authorId: 0
            },
            {
                author: "Piotr Wiśniewski",
                content: "Nie zgadzam się z jego polityką, ale doceniam jego zaangażowanie.",
                id: 0,
                rating: 3,
                authorId: 0
            },
            {
                author: "Katarzyna Kowalczyk",
                content: "Ma wiele kontrowersji na swoim koncie, ale również wiele osiągnięć.",
                id: 0,
                rating: 4,
                authorId: 0
            }
        ],
        id: 1,
        name: "Jan Kowalski",
        party: "Partia A",
        rating: 4.5,
        imageUrl: "/api/placeholder/150/150",
        description: "Jan Kowalski jest doświadczonym politykiem z wieloletnim stażem. Znany jest z wprowadzenia licznych reform oraz zaangażowania w sprawy społeczne. Jego kariera polityczna jest pełna zarówno sukcesów, jak i kontrowersji.",
    }

    const { name, party, rating, imageUrl, description, achievements, controversies, opinions } = politician;
    return (
      <div className="container mx-auto py-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="h-32 w-32">
              <AvatarImage src={imageUrl} alt={name} />
              <AvatarFallback>{name[0]}</AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left">
              <CardTitle className="text-3xl mb-2">{name}</CardTitle>
              <Badge className="mb-2">{party}</Badge>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Star className={rating >= 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"} size={24} />
                <span className="text-xl font-semibold">{rating.toFixed(1)}/5.0</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-3">O polityku</h2>
                <p className="text-gray-700">{description}</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-3">Osiągnięcia</h2>
                <ul className="list-disc list-inside space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-gray-700">{achievement}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-3">Kontrowersje</h2>
                <ul className="list-disc list-inside space-y-2">
                  {controversies.map((controversy, index) => (
                    <li key={index} className="text-gray-700">{controversy}</li>
                  ))}
                </ul>
              </section>
            </div>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mt-8">Opinie</h2>
        {opinions.map((opinion, index) => (
            <Card className="max-w-4xl mx-auto mt-8" key={index}>
                <CardHeader>
                    <CardTitle>{opinion.author}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700">{opinion.content}</p>
                </CardContent>
            </Card>
            ))}
      </div>
    );
  };