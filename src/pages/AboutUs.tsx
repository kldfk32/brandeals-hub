
import React, { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Apie mus</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                <strong>BrandDeals</strong> yra Lietuvos platforma, kurioje rasite geriausius pasiūlymus, 
                akcijas ir nuolaidų kodus iš populiariausių prekių ženklų ir influentserių. 
                Mūsų misija – padėti vartotojams sutaupyti, o prekių ženklams pritraukti naujų klientų.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Mūsų istorija</h2>
              <p className="mb-6">
                BrandDeals buvo įkurta 2022 metais, kai pastebėjome, kad Lietuvos rinkoje trūksta 
                patikimos platformos, kurioje vartotojai galėtų rasti visus aktualiausius pasiūlymus 
                vienoje vietoje. Mūsų komanda, turinti ilgametę patirtį e-komercijos srityje, 
                nusprendė sukurti platformą, kuri būtų naudinga tiek vartotojams, tiek prekių ženklams.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Mūsų vertybės</h2>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">1</span>
                  <span><strong>Patikimumas</strong> – mes tikriname ir vertiname kiekvieną pasiūlymą, kad užtikrintume jo tikrumą.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">2</span>
                  <span><strong>Skaidrumas</strong> – mūsų platformoje aiškiai nurodome visas pasiūlymų sąlygas ir apribojimus.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">3</span>
                  <span><strong>Vartotojų patogumas</strong> – nuolat tobuliname platformą, kad pasiūlymų paieška būtų kuo patogesnė.</span>
                </li>
                <li className="flex items-start">
                  <span className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">4</span>
                  <span><strong>Partnerystė</strong> – kuriame ilgalaikius santykius su prekių ženklais ir influentseriais.</span>
                </li>
              </ul>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Kaip tai veikia?</h2>
              <p className="mb-6">
                BrandDeals platformoje surenkame ir pateikiame geriausius pasiūlymus iš įvairių prekių ženklų ir 
                influentserių. Bendradarbiaujame su prekių ženklais tiesiogiai, taip pat naudojame affiliate marketingo 
                partnerystės programas, kad galėtume pateikti geriausius ir naujausius pasiūlymus mūsų vartotojams.
              </p>
              <p className="mb-6">
                Kai vartotojas pasinaudoja pasiūlymu per mūsų platformą, mes gauname komisinį atlygį iš prekės ženklo. 
                Tai leidžia mums užtikrinti, kad mūsų paslaugos vartotojams būtų nemokamos, o kartu padėti prekių ženklams
                pasiekti naujus klientus.
              </p>
              
              <h2 className="text-2xl font-bold mt-10 mb-4">Susisiekite su mumis</h2>
              <p className="mb-6">
                Turite klausimų ar pasiūlymų? Susisiekite su mumis elektroniniu paštu:
                <a href="mailto:info@brandeals.lt" className="text-primary hover:underline ml-1">info@brandeals.lt</a>
              </p>
              <p>
                Jei esate prekės ženklas ar influenceris ir norite bendradarbiauti, daugiau informacijos rasite 
                <a href="/partners" className="text-primary hover:underline mx-1">Partneriai</a> 
                puslapyje.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
