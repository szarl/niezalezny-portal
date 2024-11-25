"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';


export default function RegistrationPage() {

    const handleEmailRegistration = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        console.log('Email:', email);
        console.log('Password:', password);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User:', user);
        } catch (error) {
            console.error('Error during email registration:', error);
        }
    }

    return (
        <div className="text-center max-w-96 mx-auto">
                <h1 className="text-4xl font-bold mb-8">Rejestracja</h1>
                <Card className="p-6 bg-blue-100 mb-4">
                    <form className="flex flex-col items-center" onSubmit={handleEmailRegistration}>
                        <Label htmlFor="email" className="mb-2 mr-auto" > Email </Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="bg-white mb-2"
                            required
                        />
                        <Label htmlFor="name" className="mb-2 mr-auto" > Imię </Label>
                        <Input
                            type="name"
                            placeholder="Imię"
                            className="bg-white mb-2"
                            required
                        />
                        <Label htmlFor="surrname" className="mb-2 mr-auto" > Nazwisko </Label>
                        <Input
                            type="surrname"
                            placeholder="Nazwisko"
                            className="bg-white mb-2"
                            required
                        />
                        <Label htmlFor="password" className="mb-2 mr-auto" > Hasło </Label>
                        <Input
                            type="password"
                            placeholder="password"
                            className="bg-white mb-2"
                            required
                        />
                        <Button type="submit" variant="default">
                            Zarejestruj
                        </Button>
                    </form>
                </Card>
                <Link href='/logowanie'>Lub zaloguj</Link>
        </div>
    );
};
            

           