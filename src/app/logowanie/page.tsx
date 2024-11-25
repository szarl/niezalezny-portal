"use client";
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { auth } from '@/utils/firebase';
import { GoogleAuthProvider, TwitterAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import Link from 'next/link';

const twitterProvider = new TwitterAuthProvider();
const googleProvider = new GoogleAuthProvider();

export default function LoginPage() {
    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log('User:', user);
            console.log('Token:', token);
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    const handleTwitterLogin = async () => {
        try {
            const result = await signInWithPopup(auth, twitterProvider);
            const credential = TwitterAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log('User:', user);
            console.log('Token:', token);
        } catch (error) {
            console.error('Error during Google login:', error);
        }
    };

    const handleEmailLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const password = (form.elements.namedItem('password') as HTMLInputElement).value;

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User:', user);
        } catch (error) {
            console.error('Error during email login:', error);
        }
    };

    return (
        <div className="text-center max-w-96 mx-auto">
            <h1 className="text-4xl font-bold mb-8">Logowanie</h1>
            <Card className="p-6 bg-blue-100">
                <form className="flex flex-col items-center mb-4" onSubmit={handleEmailLogin}>
                    <Label htmlFor="email" className="mb-2 mr-auto" > Email </Label>
                    <Input
                        type="email"
                        placeholder="Email"
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
                        Zaloguj
                    </Button>
                </form>
                <div className="flex justify-around">
                    <Button variant="default"
                    onClick={handleGoogleLogin}
                    >
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="#EA4335" d="M24 9.5c3.1 0 5.6 1.1 7.6 2.9l5.6-5.6C33.4 3.5 28.9 1.5 24 1.5 14.8 1.5 7.2 7.9 4.7 16.1l6.9 5.4C13.3 14.1 18.2 9.5 24 9.5z"/>
                            <path fill="#4285F4" d="M46.5 24c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3.2-2.4 5.9-4.9 7.7l7.6 5.9c4.4-4.1 7.1-10.2 7.1-17.1z"/>
                            <path fill="#FBBC05" d="M10.6 28.5c-1.1-3.2-1.1-6.8 0-10l-6.9-5.4C1.2 17.1 0 20.4 0 24s1.2 6.9 3.7 10.9l6.9-5.4z"/>
                            <path fill="#34A853" d="M24 46.5c6.2 0 11.4-2 15.2-5.5l-7.6-5.9c-2.1 1.4-4.7 2.3-7.6 2.3-5.8 0-10.7-4.6-12.4-10.6l-6.9 5.4C7.2 40.1 14.8 46.5 24 46.5z"/>
                            <path fill="none" d="M0 0h48v48H0z"/>
                        </svg>
                    </Button>
                    <Button variant="default" onClick={handleTwitterLogin}>
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                            <path fill="#1DA1F2" d="M24 4.5c-10.8 0-19.5 8.7-19.5 19.5s8.7 19.5 19.5 19.5 19.5-8.7 19.5-19.5S34.8 4.5 24 4.5zm9.3 18.9c.01.23.01.47.01.71 0 7.2-5.5 15.5-15.5 15.5-3.1 0-6-0.9-8.4-2.4.43.05.87.08 1.32.08 2.57 0 4.93-0.87 6.8-2.34-2.4-.04-4.43-1.63-5.13-3.8.34.06.68.09 1.04.09.5 0 .99-.07 1.45-.19-2.51-.5-4.4-2.72-4.4-5.38v-.07c.74.41 1.58.66 2.48.69-1.47-0.98-2.44-2.66-2.44-4.56 0-1.01.27-1.96.74-2.78 2.7 3.3 6.74 5.47 11.3 5.7-.09-.4-.14-.82-.14-1.25 0-3.02 2.45-5.47 5.47-5.47 1.57 0 2.99.66 3.99 1.72 1.24-.24 2.41-.7 3.46-1.32-.41 1.28-1.28 2.35-2.41 3.03 1.1-.13 2.15-.42 3.13-.85-.73 1.1-1.65 2.07-2.71 2.84z"/>
                        </svg>
                    </Button>
                </div>
            </Card>
            <div className='flex gap-4 items-center justify-center mt-4'>
                <Button variant="secondary"><Link href="/reset-hasla">Reset hasła</Link></Button>
                <Link href='/rejestracja' className='self-center'>Zarejestruj się</Link>
            </div>
        </div>
    );
};
            

           