"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from '@/components/ui/label';
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj dodaj logikę wysyłania formularza
    console.log('Form data:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Kontakt</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Informacje kontaktowe */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informacje kontaktowe</CardTitle>
                <CardDescription>
                  Skontaktuj się z nami w wybrany sposób
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:kontakt@niezaleznyportal.pl" 
                       className="text-blue-500 hover:underline">
                      kontakt@niezaleznyportal.pl
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Telefon</p>
                    <a href="tel:+48123456789" 
                       className="text-blue-500 hover:underline">
                      +48 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Adres</p>
                    <p>ul. Przykładowa 123</p>
                    <p>00-001 Warszawa</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Godziny pracy</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Poniedziałek - Piątek</span>
                    <span>9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sobota</span>
                    <span>10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Niedziela</span>
                    <span>Zamknięte</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formularz kontaktowy */}
          <Card>
            <CardHeader>
              <CardTitle>Formularz kontaktowy</CardTitle>
              <CardDescription>
                Wyślij nam wiadomość, a odpowiemy najszybciej jak to możliwe
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium mb-1">
                    Imię i nazwisko
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jan Kowalski"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jan@example.com"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Temat
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="W czym możemy pomóc?"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="block text-sm font-medium mb-1">
                    Wiadomość
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Treść twojej wiadomości..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Wyślij wiadomość
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;