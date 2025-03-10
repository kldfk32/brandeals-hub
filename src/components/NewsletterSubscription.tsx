
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsletterSubscription = () => {
  const [email, setEmail] = useState("");
  const [subscribedEmails, setSubscribedEmails] = useState<string[]>([]);
  const { toast } = useToast();

  // Load saved emails from localStorage on component mount
  useEffect(() => {
    const savedEmails = localStorage.getItem("subscribedEmails");
    if (savedEmails) {
      setSubscribedEmails(JSON.parse(savedEmails));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Klaida",
        description: "Prašome įvesti teisingą el. pašto adresą",
        variant: "destructive",
      });
      return;
    }

    // Add email to local storage
    const updatedEmails = [...subscribedEmails, email];
    setSubscribedEmails(updatedEmails);
    localStorage.setItem("subscribedEmails", JSON.stringify(updatedEmails));
    
    // Show success message
    toast({
      title: "Sėkmė!",
      description: "Jūs sėkmingai užsiprenumeravote mūsų naujienlaiškį",
    });
    
    // Clear input
    setEmail("");
  };

  // Function to download emails as a text file
  const downloadEmailsAsTxt = () => {
    if (subscribedEmails.length === 0) {
      toast({
        title: "Informacija",
        description: "Nėra prenumeratorių el. paštų adresų",
      });
      return;
    }

    const emailsText = subscribedEmails.join("\n");
    const blob = new Blob([emailsText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    
    // Create a temporary link element and trigger download
    const a = document.createElement("a");
    a.href = url;
    a.download = "prenumeratoriu-sarasas.txt";
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    toast({
      title: "Sėkmė!",
      description: "Prenumeratorių sąrašas sėkmingai atsisiųstas",
    });
  };

  return (
    <div className="rounded-3xl bg-gradient-to-r from-primary/10 to-primary/20 p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
      
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Nepražiopsokite nė vieno pasiūlymo</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Užsiregistruokite mūsų naujienlaiškiui ir gaukite naujausius pasiūlymus tiesiai į savo pašto dėžutę.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-6">
          <input 
            type="email" 
            placeholder="Įveskite savo el. paštą" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-white border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
            required
          />
          <Button
            type="submit"
            className="button-primary px-6 py-3 whitespace-nowrap"
          >
            Prenumeruoti
          </Button>
        </form>
        
        {/* Admin button to download emails (normally would be hidden or protected) */}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={downloadEmailsAsTxt}
          className="mb-4"
        >
          Atsisiųsti prenumeratorių sąrašą
        </Button>
        
        <p className="text-xs text-muted-foreground">
          Prenumeruodami, jūs sutinkate su mūsų <Link to="/terms-of-service" className="underline">Naudojimosi taisyklėmis</Link> ir <Link to="/privacy-policy" className="underline">Privatumo politika</Link>.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
