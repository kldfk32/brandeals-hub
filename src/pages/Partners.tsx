
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefits = [
    "Prieiga prie didelio vartotojų skaičiaus, ieškančių nuolaidų",
    "Galimybė didinti pardavimus ir pritraukti naujus klientus",
    "Prekės ženklo matomumo didinimas",
    "Išskirtinės partnerystės galimybės",
    "Detalios analitikos ataskaitos",
    "Asmeninis vadybininkas Jūsų sėkmei užtikrinti",
  ];

  const partnerTypes = [
    {
      title: "Prekių ženklams",
      description: "Reklamuokite savo produktus ir pasiūlymus didžiausioje nuolaidų platformoje Lietuvoje",
      features: [
        "Specialūs pardavėjo profiliai",
        "Pasiūlymų viešinimas",
        "Naujų vartotojų pritraukimas",
        "Detalios analitikos ataskaitos",
      ]
    },
    {
      title: "Influenceriams",
      description: "Uždirbkite dalindamiesi savo sekėjams naudingais pasiūlymais ir akcijų kodais",
      features: [
        "Patrauklūs komisiniai už pardavimus",
        "Individualūs nuolaidų kodai",
        "Paprastai sekamas konversijų skaičius",
        "Reguliarūs mokėjimai",
      ]
    },
    {
      title: "Reklamos tinklams",
      description: "Bendradarbiaukite su mumis siekdami sukurti naudingų partnerysčių ekosistemą",
      features: [
        "API prieiga",
        "Balti ženklinimo sprendimai",
        "Pritaikyti nuolaidų kodai",
        "Detalios ataskaitos realiu laiku",
      ]
    }
  ];

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="pb-20 pt-10 relative">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
                Tapkite mūsų partneriu ir auginkite verslą kartu
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Prisijunkite prie Lietuvos didžiausios nuolaidų platformos ir pasiekite tūkstančius vartotojų, 
                ieškančių geriausių pasiūlymų. Mes siūlome individualius sprendimus prekių ženklams, 
                influenceriams ir reklamos tinklams.
              </p>
              <Button size="lg" className="font-medium">
                Susisiekite dabar
              </Button>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-secondary">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-12">Partnerystės privalumai</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-sm">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <p className="font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Partner Types */}
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center mb-4">Mūsų sprendimai</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Siūlome skirtingus bendradarbiavimo modelius, pritaikytus kiekvieno partnerio poreikiams
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="glass-card bg-white/95 rounded-xl p-6 shadow-elevated h-full flex flex-col">
                  <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                  <p className="text-muted-foreground mb-6">{type.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold mb-3">Privalumai:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button variant="outline" className="w-full mt-6">Sužinoti daugiau</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 bg-primary/10 rounded-3xl mx-4 md:mx-8 lg:mx-16 my-12">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Pasiruošę pradėti?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Mūsų partnerystės komanda pasiruošusi aptarti jūsų poreikius ir pasiūlyti 
              tinkamiausią bendradarbiavimo modelį. Susisiekite su mumis šiandien!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg">Susisiekti</Button>
              <Button variant="outline" size="lg">Sužinoti daugiau</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Partners;
