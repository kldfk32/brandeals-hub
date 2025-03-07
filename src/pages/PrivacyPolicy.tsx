
import React, { useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Privatumo politika</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Paskutinį kartą atnaujinta: {new Date().toLocaleDateString('lt-LT')}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Įvadas</h2>
            <p>
              BRANDEALS gerbia jūsų privatumą ir įsipareigoja saugoti jūsų asmens duomenis pagal 
              taikomus įstatymus, įskaitant Bendrąjį duomenų apsaugos reglamentą (BDAR). Ši privatumo politika 
              paaiškina, kaip mes renkame, naudojame ir saugome jūsų asmens duomenis, kai naudojatės mūsų svetaine.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Duomenų valdytojas</h2>
            <p>
              BRANDEALS yra jūsų asmens duomenų valdytojas. Jei turite klausimų dėl šios 
              privatumo politikos ar mūsų duomenų tvarkymo praktikos, susisiekite su mumis šiuo el. paštu: 
              <a href="mailto:info@brandeals.lt" className="text-primary hover:underline ml-1">info@brandeals.lt</a>.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Kokius duomenis renkame</h2>
            <p>
              Kai naudojatės mūsų svetaine, mes galime rinkti šiuos duomenis:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Kontaktinė informacija (pvz., el. pašto adresas, vardas), kai užsiregistruojate naujienlaiškiui</li>
              <li>Naudojimosi duomenys (pvz., kaip naudojatės svetaine, kokius puslapius lankote)</li>
              <li>Įrenginio informacija (pvz., IP adresas, naršyklės tipas)</li>
              <li>Slapukų duomenys (daugiau informacijos rasite mūsų Slapukų politikoje)</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Kaip naudojame jūsų duomenis</h2>
            <p>
              Mes naudojame jūsų duomenis šiais tikslais:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Teikti, prižiūrėti ir tobulinti mūsų svetainę</li>
              <li>Siųsti naujienlaiškius, jei esate užsiregistravę</li>
              <li>Analizuoti, kaip vartotojai naudojasi mūsų svetaine</li>
              <li>Užtikrinti svetainės saugumą</li>
              <li>Laikytis teisinių įsipareigojimų</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Duomenų dalijimasis</h2>
            <p>
              Mes galime dalintis jūsų duomenimis su:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Paslaugų teikėjais, kurie mums padeda teikti svetainės paslaugas</li>
              <li>Teisėsaugos institucijomis, jei to reikalauja įstatymai</li>
              <li>Trečiosiomis šalimis verslo perdavimo atveju (pvz., susijungimo ar įsigijimo metu)</li>
            </ul>
            <p>
              Mes neparduodame jūsų asmens duomenų trečiosioms šalims.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Slapukai</h2>
            <p>
              Mūsų svetainė naudoja slapukus ir panašias technologijas, kad pagerintų jūsų naršymo patirtį. 
              Daugiau informacijos apie tai, kaip mes naudojame slapukus, rasite mūsų Slapukų politikoje.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Jūsų teisės</h2>
            <p>
              Pagal BDAR, jūs turite šias teises:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Teisę susipažinti su savo asmens duomenimis</li>
              <li>Teisę reikalauti ištaisyti netikslius duomenis</li>
              <li>Teisę reikalauti ištrinti savo duomenis</li>
              <li>Teisę apriboti duomenų tvarkymą</li>
              <li>Teisę į duomenų perkeliamumą</li>
              <li>Teisę nesutikti su duomenų tvarkymu</li>
              <li>Teisę atšaukti sutikimą</li>
            </ul>
            <p>
              Norėdami pasinaudoti šiomis teisėmis, susisiekite su mumis el. paštu: <a href="mailto:info@brandeals.lt" className="text-primary hover:underline">info@brandeals.lt</a>
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Duomenų saugumas</h2>
            <p>
              Mes įgyvendiname tinkamas technines ir organizacines priemones, kad apsaugotume jūsų asmens duomenis 
              nuo atsitiktinio ar neteisėto sunaikinimo, praradimo, pakeitimo, neteisėto atskleidimo ar prieigos prie jų.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Duomenų saugojimo laikotarpis</h2>
            <p>
              Mes saugome jūsų asmens duomenis tik tiek laiko, kiek būtina pasiekti tikslus, kuriems jie buvo surinkti, 
              arba kaip to reikalauja įstatymai.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Tarptautiniai duomenų perdavimai</h2>
            <p>
              Jūsų asmens duomenys gali būti perduodami ir tvarkomi šalyse už Europos ekonominės erdvės (EEE) ribų. 
              Tokiais atvejais mes užtikriname, kad būtų taikomos tinkamos duomenų apsaugos priemonės.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Politikos pakeitimai</h2>
            <p>
              Mes galime atnaujinti šią privatumo politiką laikas nuo laiko. Naujausia versija visada bus paskelbta 
              mūsų svetainėje. Rekomenduojame reguliariai peržiūrėti šią politiką.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">12. Susisiekite su mumis</h2>
            <p>
              Jei turite klausimų ar nusiskundimų dėl šios privatumo politikos ar mūsų duomenų tvarkymo praktikos, 
              susisiekite su mumis el. paštu: <a href="mailto:info@brandeals.lt" className="text-primary hover:underline">info@brandeals.lt</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
