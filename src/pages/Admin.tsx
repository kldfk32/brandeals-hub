
import React, { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const Admin = () => {
  const [emails, setEmails] = useState<string[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load emails from localStorage
    const savedEmails = localStorage.getItem("subscribedEmails");
    if (savedEmails) {
      setEmails(JSON.parse(savedEmails));
    }
  }, []);

  const downloadEmailsAsTxt = () => {
    if (emails.length === 0) {
      toast({
        title: "Informacija",
        description: "Nėra prenumeratorių el. paštų adresų",
      });
      return;
    }

    const emailsText = emails.join("\n");
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

  const clearEmailsList = () => {
    if (confirm("Ar tikrai norite ištrinti visus prenumeratorių el. paštus?")) {
      localStorage.removeItem("subscribedEmails");
      setEmails([]);
      toast({
        title: "Atlikta",
        description: "Prenumeratorių sąrašas ištrintas",
      });
    }
  };

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-28 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Administravimas</h1>
          
          <div className="glass-card rounded-xl p-6 mb-8">
            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
              <h2 className="text-2xl font-semibold">Prenumeratorių sąrašas</h2>
              <div className="flex gap-3">
                <Button onClick={downloadEmailsAsTxt} variant="outline">
                  Atsisiųsti sąrašą
                </Button>
                <Button onClick={clearEmailsList} variant="destructive">
                  Išvalyti sąrašą
                </Button>
              </div>
            </div>
            
            {emails.length > 0 ? (
              <div className="border rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left">Nr.</th>
                      <th className="px-4 py-3 text-left">El. paštas</th>
                    </tr>
                  </thead>
                  <tbody>
                    {emails.map((email, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-3">{index + 1}</td>
                        <td className="px-4 py-3">{email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                Nėra prenumeratorių el. pašto adresų
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
