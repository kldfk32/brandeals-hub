
import React, { useEffect } from 'react';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-transition">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Naudojimosi taisyklės</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-muted-foreground mb-8">
              Paskutinį kartą atnaujinta: {new Date().toLocaleDateString('lt-LT')}
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Bendrosios nuostatos</h2>
            <p>
              Sveiki atvykę į BRANDEALS svetainę. Šios naudojimosi taisyklės nustato teisines sąlygas, 
              kuriomis jūs galite naudotis mūsų svetaine. Naudodamiesi mūsų svetaine, jūs sutinkate su šiomis taisyklėmis.
              Jei nesutinkate su šiomis taisyklėmis, prašome nesinaudoti mūsų svetaine.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Svetainės paskirtis</h2>
            <p>
              BRANDEALS - tai platforma, kuri padeda vartotojams rasti geriausias nuolaidas ir akcijų kodus 
              iš įvairių prekės ženklų ir influencerių. Mes nesame prekių ar paslaugų pardavėjai, o tik nukreipiame 
              vartotojus į atitinkamas parduotuves ar platformas.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intelektinė nuosavybė</h2>
            <p>
              Visa BRANDEALS svetainėje esanti medžiaga, įskaitant tekstus, grafinius elementus, logotipus, 
              piktogramas, vaizdus ir programinę įrangą, yra BRANDEALS arba jos licencijų išdavėjų nuosavybė ir 
              yra saugoma autorių teisių, prekių ženklų ir kitų intelektinės nuosavybės įstatymų.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Vartotojo atsakomybė</h2>
            <p>
              Naudodamiesi mūsų svetaine, jūs sutinkate:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Pateikti tikslią ir naujausią informaciją, kai to reikalaujama</li>
              <li>Laikytis visų taikomų įstatymų ir taisyklių</li>
              <li>Nesidalinti savo prisijungimo duomenimis su trečiosiomis šalimis</li>
              <li>Nenaudoti svetainės neteisėtais ar nesąžiningais tikslais</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Nuolaidos ir akcijų kodai</h2>
            <p>
              Mes dedame visas pastangas, kad mūsų svetainėje pateikiama informacija apie nuolaidas ir 
              akcijų kodus būtų tiksli ir naujausia. Tačiau mes negalime garantuoti, kad visi pasiūlymai 
              bus galiojantys visą laiką. Prekių ženklai ir parduotuvės gali bet kada pakeisti savo nuolaidų sąlygas.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Atsakomybės apribojimas</h2>
            <p>
              BRANDEALS neprisiima jokios atsakomybės už bet kokius tiesioginius, netiesioginius, 
              atsitiktinius, specialius ar pasekminius nuostolius, atsirandančius dėl naudojimosi mūsų svetaine 
              ar negalėjimo ja naudotis. Mes negarantuojame, kad svetainė veiks be sutrikimų ar klaidų.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Privatumas</h2>
            <p>
              Mūsų privatumo politika, kurią galite rasti <a href="/privacy-policy" className="text-primary hover:underline">čia</a>, 
              yra neatskiriama šių naudojimosi taisyklių dalis.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Taisyklių keitimas</h2>
            <p>
              Mes pasiliekame teisę bet kada keisti šias naudojimosi taisykles. Pakeitimai įsigalioja iškart po jų paskelbimo svetainėje. 
              Rekomenduojame reguliariai tikrinti šias taisykles, kad būtumėte informuoti apie bet kokius pakeitimus.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Susisiekite su mumis</h2>
            <p>
              Jei turite klausimų ar pastabų dėl šių naudojimosi taisyklių, prašome susisiekti su mumis el. paštu: <a href="mailto:info@brandeals.lt" className="text-primary hover:underline">info@brandeals.lt</a>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
