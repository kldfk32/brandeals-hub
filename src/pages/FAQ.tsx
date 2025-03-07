
import React, { useEffect, useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ChevronDown, Search } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: "all", name: "Visi klausimai" },
    { id: "general", name: "Bendra informacija" },
    { id: "deals", name: "Pasiūlymai ir kodai" },
    { id: "usage", name: "Naudojimasis svetaine" },
    { id: "partnership", name: "Partnerystė" },
  ];

  const faqItems: FAQItem[] = [
    {
      question: "Kas yra BrandDeals?",
      answer: "BrandDeals yra platforma, kurioje rasite geriausius pasiūlymus, akcijas ir nuolaidų kodus iš populiariausių prekių ženklų ir influentserių. Mūsų tikslas – padėti jums sutaupyti, ieškant geriausių nuolaidų vienoje vietoje.",
      category: "general"
    },
    {
      question: "Ar BrandDeals naudojimasis yra nemokamas?",
      answer: "Taip, BrandDeals naudojimasis yra visiškai nemokamas visiems vartotojams. Mes uždirbame iš partnerystės su prekių ženklais, todėl jums nereikia mokėti už prieigą prie mūsų pasiūlymų.",
      category: "general"
    },
    {
      question: "Kaip BrandDeals užtikrina pasiūlymų kokybę?",
      answer: "Mes kruopščiai tikriname visus pasiūlymus prieš juos publikuodami. Bendradarbiaujame tiesiogiai su prekių ženklais ir naudojame affiliate partnerystės programas, kad užtikrintume pasiūlymų autentiškumą ir kokybę.",
      category: "general"
    },
    {
      question: "Kaip naudotis nuolaidų kodais?",
      answer: "Nuolaidų kodų naudojimas yra paprastas: 1) Pasirinkite jus dominantį pasiūlymą, 2) Paspauskite 'Kopijuoti kodą' mygtuką, 3) Eikite į prekės ženklo svetainę, 4) Pridėkite prekes į krepšelį, 5) Apmokėjimo metu įveskite nuolaidų kodą į tam skirtą laukelį, 6) Mėgaukitės savo nuolaida!",
      category: "usage"
    },
    {
      question: "Kodėl kai kurie nuolaidų kodai neveikia?",
      answer: "Nuolaidų kodai kartais gali neveikti dėl įvairių priežasčių: 1) Pasiūlymas jau nebegalioja, 2) Pasiektas pasiūlymo limitas, 3) Taikomos tam tikros sąlygos (pvz., minimalus užsakymo dydis), 4) Kodas galioja tik tam tikroms prekėms. Jei pastebėjote, kad kodas neveikia, praneškite mums apie tai el. paštu info@brandeals.lt.",
      category: "deals"
    },
    {
      question: "Kaip dažnai atnaujinate pasiūlymus?",
      answer: "Mūsų platformoje pasiūlymai atnaujinami kasdien. Reguliariai pridedame naujus pasiūlymus ir pašaliname nebegaliojančius, kad užtikrintume, jog visi mūsų pasiūlymai būtų aktualūs ir veikiantys.",
      category: "deals"
    },
    {
      question: "Kaip išsaugoti mėgstamus pasiūlymus?",
      answer: "Norėdami išsaugoti mėgstamus pasiūlymus, tiesiog paspauskite širdutės ikoną prie pasiūlymo. Visus išsaugotus pasiūlymus galite rasti 'Išsaugoti pasiūlymai' skiltyje.",
      category: "usage"
    },
    {
      question: "Kodėl turėčiau naudotis BrandDeals, o ne ieškoti nuolaidų patiems?",
      answer: "BrandDeals sutaupo jūsų laiką, nes mes jau atlikome visą darbą už jus – surinkome geriausius pasiūlymus vienoje vietoje. Be to, mes turime išskirtinių nuolaidų kodų, kurių negalėsite rasti kitur.",
      category: "general"
    },
    {
      question: "Ar galiu gauti pranešimus apie naujus pasiūlymus?",
      answer: "Taip, galite užsiregistruoti mūsų naujienlaiškiui ir gauti pranešimus apie naujausius pasiūlymus tiesiai į savo el. paštą. Tai galite padaryti pagrindiniame puslapyje arba svetainės apačioje esančioje formoje.",
      category: "usage"
    },
    {
      question: "Ar galiu pasiūlyti prekės ženklą, kurio pasiūlymų norėčiau matyti?",
      answer: "Žinoma! Mes visuomet džiaugiamės vartotojų pasiūlymais. Galite parašyti mums el. paštu info@brandeals.lt ir pasiūlyti prekės ženklą, kurio pasiūlymų norėtumėte matyti mūsų platformoje.",
      category: "general"
    },
    {
      question: "Kaip tapti BrandDeals partneriu?",
      answer: "Jei esate prekės ženklas ar influentseris ir norite bendradarbiauti su BrandDeals, apsilankykite mūsų 'Partneriai' puslapyje arba susisiekite su mumis el. paštu info@brandeals.lt. Mielai aptarsime bendradarbiavimo galimybes!",
      category: "partnership"
    },
    {
      question: "Kokios yra partnerystės sąlygos?",
      answer: "Partnerystės sąlygos priklauso nuo bendradarbiavimo tipo ir yra individualiai aptariamos su kiekvienu partneriu. Siūlome įvairius bendradarbiavimo modelius, pritaikytus tiek mažiems, tiek dideliems prekių ženklams ar influenteriams.",
      category: "partnership"
    },
    {
      question: "Ar BrandDeals siūlo affiliate programą influenteriams?",
      answer: "Taip, BrandDeals siūlo affiliate programą influenteriams. Jei esate influentseris ar turinio kūrėjas, galite uždirbti komisinį atlygį, rekomenduodami pasiūlymus savo sekėjams. Daugiau informacijos rasite 'Partneriai' puslapyje.",
      category: "partnership"
    }
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-5">Dažniausiai užduodami klausimai</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Čia rasite atsakymus į dažniausiai užduodamus klausimus apie BrandDeals platformą, 
                pasiūlymus ir bendradarbiavimo galimybes.
              </p>
            </div>
            
            {/* Search Bar */}
            <div className="mb-10">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ieškoti klausimų..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            
            {/* Categories */}
            <div className="mb-10 overflow-x-auto pb-2">
              <div className="flex space-x-2 min-w-max">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-primary text-white"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* FAQ Items */}
            <div className="space-y-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => (
                  <div 
                    key={index} 
                    className="border border-border rounded-lg overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleExpand(index)}
                      className={`w-full text-left p-5 flex justify-between items-center ${
                        expandedIndex === index ? "bg-primary/5" : "bg-white"
                      }`}
                    >
                      <span className="font-medium">{item.question}</span>
                      <ChevronDown className={`h-5 w-5 text-primary transition-transform duration-300 ${
                        expandedIndex === index ? "transform rotate-180" : ""
                      }`} />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        expandedIndex === index ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="p-5 pt-0 bg-white">
                        <p className="text-muted-foreground">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-10">
                  <p className="text-muted-foreground mb-4">Nerasta klausimų atitinkančių jūsų paiešką.</p>
                  <button 
                    onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
                    className="text-primary hover:underline"
                  >
                    Išvalyti paiešką
                  </button>
                </div>
              )}
            </div>
            
            {/* Contact Section */}
            <div className="mt-14 glass-card p-8 rounded-2xl text-center">
              <h2 className="text-xl font-bold mb-3">Neradote atsakymo į savo klausimą?</h2>
              <p className="text-muted-foreground mb-4">
                Susisiekite su mumis ir mes mielai jums padėsime.
              </p>
              <div className="flex justify-center">
                <a 
                  href="mailto:info@brandeals.lt" 
                  className="button-primary inline-flex items-center"
                >
                  Susisiekti
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
