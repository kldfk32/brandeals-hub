
import React, { useEffect, useState } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Žinutė išsiųsta",
        description: "Dėkojame už jūsų žinutę. Susisieksime su jumis kuo greičiau.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Susisiekite su mumis</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-muted-foreground mb-8">
                Turite klausimų ar pasiūlymų? Susisiekite su mumis užpildydami formą arba tiesiogiai per mūsų kontaktus.
                Stengiamės atsakyti į visas užklausas per 1-2 darbo dienas.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MailIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">El. paštas</h3>
                    <a href="mailto:info@brandeals.lt" className="text-muted-foreground hover:text-primary transition-colors">
                      info@brandeals.lt
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <PhoneIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Telefonas</h3>
                    <p className="text-muted-foreground">
                      +370 600 00000
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <MapPinIcon className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Adresas</h3>
                    <p className="text-muted-foreground">
                      Vilniaus g. 31, Vilnius, Lietuva
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Vardas</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">El. paštas</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Tema</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Žinutė</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-6 text-base"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Siunčiama...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <SendIcon className="mr-2 h-5 w-5" />
                      Siųsti žinutę
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
