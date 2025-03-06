
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main>
        <section className="pt-32 pb-20">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl font-bold mb-8 tracking-tight">
                Apie Mus
              </h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-xl mb-6">
                  Mes esame profesionalų komanda, kuri kasdien seka socialinių tinklų naujienas ir teikia geriausius pasiūlymus mūsų vartotojams.
                </p>
                
                <p className="mb-6">
                  Mūsų tikslas – padėti Jums sutaupyti pinigų, pateikiant naujausius ir geriausius nuolaidų kodus, akcijas ir pasiūlymus iš populiariausių prekės ženklų visoje Lietuvoje.
                </p>
                
                <p className="mb-6">
                  Kiekvieną dieną mes kruopščiai peržiūrime šimtus prekės ženklų, parduotuvių ir socialinių tinklų, kad rastume geriausius pasiūlymus ir galėtume juos pateikti Jums patogiu būdu. Mūsų komanda tikrina visus nuolaidų kodus, kad įsitikintų, jog jie veikia ir galioja.
                </p>
                
                <h2 className="text-2xl font-bold mt-10 mb-4">Mūsų misija</h2>
                
                <p className="mb-6">
                  Mūsų misija yra paprasta – padėti žmonėms sutaupyti pinigų perkant jiems reikalingus produktus ir paslaugas. Mes tikime, kad geriausios nuolaidos turėtų būti prieinamos visiems, o ne tik tiems, kurie turi laiko jų ieškoti.
                </p>
                
                <h2 className="text-2xl font-bold mt-10 mb-4">Mūsų vertybės</h2>
                
                <ul className="list-disc pl-6 mb-6">
                  <li className="mb-2">Skaidrumas – mes visada atvirai pateikiame informaciją apie nuolaidas ir akcijas.</li>
                  <li className="mb-2">Patikimumas – mes tikriname visus nuolaidų kodus, kad būtume tikri, jog jie veikia.</li>
                  <li className="mb-2">Aktualumas – mes nuolat atnaujiname pasiūlymus, kad jie visada būtų aktualūs.</li>
                  <li className="mb-2">Vartotojo patirtis – mes siekiame, kad mūsų svetainė būtų patogi ir lengva naudotis.</li>
                </ul>
                
                <p className="mb-6">
                  Dėkojame, kad naudojatės mūsų paslaugomis, ir tikimės, kad rasite puikių pasiūlymų, kurie padės jums sutaupyti!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
