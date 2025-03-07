
import React, { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const benefitsList = [
    "Padidinkite savo prekių ar paslaugų matomumą",
    "Pritraukite naujų klientų",
    "Padidinkite savo e-parduotuvės lankytojų srautą",
    "Padidinkite pardavimų konversijos rodiklius",
    "Sustiprinkite savo prekės ženklo žinomumą",
    "Kurkite lojalumo programas su unikaliais kodais"
  ];

  const partnerOptions = [
    {
      title: "Prekės ženklai",
      description: "Esate prekės ženklas ar e-parduotuvė? Pritraukite naujus klientus su mūsų platformos pagalba.",
      benefits: [
        "Padidinkite pardavimus su specialiais pasiūlymais",
        "Pasiekite tikslinę auditoriją",
        "Valdykite savo pasiūlymus per partnerių portalą",
        "Gaukite išsamias pardavimų ataskaitas",
        "Individualus bendradarbiavimo modelis"
      ]
    },
    {
      title: "Influentseriai",
      description: "Esate influentseris ar turinio kūrėjas? Kurkite papildomą pajamų srautą su mūsų affiliate programa.",
      benefits: [
        "Pasiūlykite savo sekėjams išskirtines nuolaidas",
        "Uždirbkite komisinį atlygį nuo pardavimų",
        "Sekite savo rezultatus realiu laiku",
        "Pritaikykite pasiūlymus savo auditorijai",
        "Gaukite pagalbą kuriant efektyvią strategiją"
      ]
    }
  ];

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h1 className="text-3xl md:text-4xl font-bold mb-5">Partnerystės programa</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Prisijunkite prie BrandDeals partnerystės programos ir padidinkite savo prekės ženklo matomumą 
                bei pardavimus. Mūsų platforma siūlo įvairias bendradarbiavimo galimybes tiek prekių ženklams, 
                tiek influenteriams.
              </p>
            </div>
            
            {/* Benefits Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Kodėl verta bendradarbiauti su BrandDeals?</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-secondary/60 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Nauda bendradarbiaujant su mumis</h3>
                  <ul className="space-y-3">
                    {benefitsList.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 mr-3" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-primary/10 rounded-2xl p-8">
                  <h3 className="text-xl font-semibold mb-4">Mūsų platformos privalumai</h3>
                  <ul className="space-y-5">
                    <li className="flex flex-col">
                      <span className="font-medium mb-1">🚀 Didelė auditorija</span>
                      <span className="text-sm text-muted-foreground">Pasiekite tūkstančius potencialių klientų, aktyviai ieškančių gerų pasiūlymų.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium mb-1">📊 Detalios ataskaitos</span>
                      <span className="text-sm text-muted-foreground">Gaukite išsamias pardavimų ir konversijų ataskaitas.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium mb-1">⚙️ Lankstūs bendradarbiavimo modeliai</span>
                      <span className="text-sm text-muted-foreground">Pritaikome bendradarbiavimo sąlygas pagal jūsų poreikius.</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium mb-1">🤝 Asmeninis vadybininkas</span>
                      <span className="text-sm text-muted-foreground">Kiekvienas partneris gauna asmeninį vadybininką.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Partner Options */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Bendradarbiavimo galimybės</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {partnerOptions.map((option, index) => (
                  <div key={index} className="glass-card rounded-2xl p-8 border border-border">
                    <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                    <p className="text-muted-foreground mb-5">{option.description}</p>
                    
                    <h4 className="text-sm font-medium uppercase text-primary/80 mb-3">Privalumai</h4>
                    <ul className="space-y-2 mb-6">
                      {option.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-4 w-4 text-primary shrink-0 mt-1 mr-2" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* How to Join Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Kaip prisijungti?</h2>
              
              <div className="glass-card rounded-2xl p-8 border border-border">
                <div className="max-w-2xl mx-auto">
                  <ol className="relative space-y-8 pl-8 before:content-[''] before:absolute before:top-3 before:left-3 before:bottom-3 before:w-[2px] before:bg-border">
                    <li className="relative pl-8">
                      <div className="absolute left-0 top-2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">1</div>
                      <h3 className="font-medium mb-1">Susisiekite su mumis</h3>
                      <p className="text-sm text-muted-foreground">
                        Parašykite mums el. paštu <a href="mailto:info@brandeals.lt" className="text-primary hover:underline">info@brandeals.lt</a> arba
                        užpildykite užklausos formą žemiau.
                      </p>
                    </li>
                    <li className="relative pl-8">
                      <div className="absolute left-0 top-2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">2</div>
                      <h3 className="font-medium mb-1">Aptarkime sąlygas</h3>
                      <p className="text-sm text-muted-foreground">
                        Mūsų partnerystės vadybininkas susisieks su jumis ir aptars bendradarbiavimo galimybes bei sąlygas.
                      </p>
                    </li>
                    <li className="relative pl-8">
                      <div className="absolute left-0 top-2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">3</div>
                      <h3 className="font-medium mb-1">Pasirašykime sutartį</h3>
                      <p className="text-sm text-muted-foreground">
                        Suderinus visas sąlygas, pasirašome bendradarbiavimo sutartį ir nustatome partnerystės parametrus.
                      </p>
                    </li>
                    <li className="relative pl-8">
                      <div className="absolute left-0 top-2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">4</div>
                      <h3 className="font-medium mb-1">Pradėkime bendradarbiauti</h3>
                      <p className="text-sm text-muted-foreground">
                        Jūsų pasiūlymai publikuojami mūsų platformoje ir pradeda generuoti pardavimus!
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Susidomėjote? Susisiekite su mumis</h2>
              
              <div className="glass-card rounded-2xl p-8 border border-border">
                <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Vardas</label>
                    <input 
                      type="text" 
                      id="name" 
                      placeholder="Jūsų vardas"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">Įmonė / Prekės ženklas</label>
                    <input 
                      type="text" 
                      id="company" 
                      placeholder="Jūsų įmonė ar prekės ženklas"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">El. paštas</label>
                    <input 
                      type="email" 
                      id="email" 
                      placeholder="jusu.pastas@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Telefonas</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      placeholder="+370 600 00000"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none bg-background"
                    />
                  </div>
                  
                  <div className="space-y-2 md:col-span-2">
                    <label htmlFor="message" className="text-sm font-medium">Žinutė</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="Apibūdinkite savo prekės ženklą ir ko tikitės iš bendradarbiavimo"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none bg-background"
                    ></textarea>
                  </div>
                  
                  <div className="md:col-span-2 pt-4">
                    <button 
                      type="submit"
                      className="button-primary w-full md:w-auto"
                    >
                      Siųsti užklausą
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Partners;
