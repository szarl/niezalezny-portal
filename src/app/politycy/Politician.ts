import { Opinion } from "./Opinion";

export interface Politician {
    id: number;
    name: string;
    party: string;
    rating: number;
    imageUrl: string;
    description: string;
    achievements: string[];
    controversies: string[];
    opinions: Opinion[];
}