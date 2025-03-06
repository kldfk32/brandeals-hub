
import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Kaip naudotis akcijos kodais?",
    answer: "Mūsų svetainėje rasite įvairius akcijų kodus. Nukopijuokite kodą iš mūsų puslapio, apsilankykite reklamuojamoje parduotuvėje, pridėkite norimus produktus į krepšelį ir įveskite kodą atsiskaitymo metu. Nuolaida bus pritaikyta automatiškai."
  },
  {
    question: "Ar visi akcijų kodai veikia?",
    answer: "Stengiamės užtikrinti, kad visi mūsų svetainėje pateikti akcijų kodai būtų galiojantys ir veikiantys. Tačiau prekių ženklai kartais keičia savo akcijas be išankstinio įspėjimo. Jei pastebėsite neveikiantį kodą, praneškite mums ir mes jį patikslinsime arba pašalinsime."
  },
  {
    question: "Kaip dažnai atnaujinami pasiūlymai?",
    answer: "Mūsų komanda kasdien atnaujina svetainę naujais pasiūlymais ir akcijomis. Rekomenduojame reguliariai tikrinti mūsų svetainę, kad nepraleisite geriausių nuolaidų ir specialių pasiūlymų."
  },
  {
    question: "Ar galiu išsaugoti mėgstamus pasiūlymus?",
    answer: "Taip, galite išsaugoti mėgstamus pasiūlymus paspaudę širdutės ikoną prie kiekvieno pasiūlymo. Išsaugotus pasiūlymus galite peržiūrėti 'Išsaugoti pasiūlymai' skiltyje."
  },
  {
    question: "Kaip sužinoti apie naujus pasiūlymus?",
    answer: "Galite užsiprenumeruoti mūsų naujienlaiškį, kad gautumėte pranešimus apie naujausius pasiūlymus. Taip pat galite sekti mus socialiniuose tinkluose, kur reguliariai skelbiame informaciją apie geriausias akcijas."
  },
  {
    question: "Ar galiu pasiūlyti nuolaidų kodą, kurį radau?",
    answer: "Žinoma! Labai vertiname bendruomenės indėlį. Galite susisiekti su mumis per kontaktų puslapį ir pasidalinti savo rastais akcijų kodais. Jei kodas bus patikrintas ir veikiantis, mielai jį paskelbsime mūsų svetainėje."
  },
  {
    question: "Kodėl kai kurie pasiūlymai pažymėti kaip 'Rekomenduojami'?",
    answer: "Rekomenduojami pasiūlymai yra tie, kuriuos mūsų komanda išskiria dėl jų ypatingos vertės, populiarumo tarp vartotojų arba ribotos trukmės. Šie pasiūlymai dažniausiai suteikia didžiausią naudą mūsų lankytojams."
  },
  {
    question: "Ar galiu naudotis svetaine per mobilųjį telefoną?",
    answer: "Taip, mūsų svetainė yra visiškai pritaikyta mobiliesiems įrenginiams. Galite ieškoti ir naudotis akcijų kodais bet kuriame įrenginyje patogiai."
  }
];

const FAQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Dažnai užduodami klausimai</h1>
            <p className="text-muted-foreground mb-10">
              Čia rasite atsakymus į dažniausiai užduodamus klausimus apie mūsų svetainę ir pasiūlymus.
              Jei neradote atsakymo į savo klausimą, susisiekite su mumis.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
