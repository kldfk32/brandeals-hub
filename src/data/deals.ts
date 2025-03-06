
export interface Deal {
  id: string;
  title: string;
  brand: string;
  code: string;
  expiryDate: string;
  discount: string;
  image: string;
  category: string;
  featured?: boolean;
  description?: string;
}

export const deals: Deal[] = [
  // Featured deals
  {
    id: "1",
    title: "25% nuolaida sporto bateliams",
    brand: "Nike",
    code: "NIKE25",
    expiryDate: "2023-12-31",
    discount: "25% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    category: "Sportas",
    featured: true,
    description: "Sutaupykite 25% perkant naujausius Nike sportinius batelius. Galioja internetinėje parduotuvėje ir fizinėse parduotuvėse."
  },
  {
    id: "2",
    title: "Pirk vieną, gauk kitą nemokamai",
    brand: "Subway",
    code: "SUBWAYB1G1",
    expiryDate: "2023-11-15",
    discount: "2UŽ1",
    image: "https://images.unsplash.com/photo-1509722747041-616f39b57569",
    category: "Maistas",
    featured: true,
    description: "Pirkite bet kurį 30 cm sumuštinį ir gaukite tokį patį nemokamai. Tik dalyvaujančiose Subway parduotuvėse."
  },
  {
    id: "3",
    title: "Nemokamas pristatymas virš 50€",
    brand: "H&M",
    code: "HMSHIP",
    expiryDate: "2023-10-30",
    discount: "NEMOKAMAS PRISTATYMAS",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    category: "Apranga",
    featured: true,
    description: "Gaukite nemokamą pristatymą visiems užsakymams virš 50€. Galioja visoje Lietuvoje."
  },
  {
    id: "4",
    title: "30% nuolaida pirmam mėnesiui",
    brand: "Planet Fitness",
    code: "FIT30",
    expiryDate: "2023-12-01",
    discount: "30% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    category: "Sveikata",
    featured: true,
    description: "Sutaupykite 30% nuo pirmojo mėnesio narystės mokesčio bet kuriame Planet Fitness sporto klube."
  },
  
  // Trending deals
  {
    id: "5",
    title: "50% nuolaida pirmam užsakymui",
    brand: "DoorDash",
    code: "DASH50",
    expiryDate: "2023-11-20",
    discount: "50% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1551326844-4df70f78d0e9",
    category: "Maistas",
    description: "Gaukite 50% nuolaidą pirmam užsakymui per DoorDash programėlę, iki 15€."
  },
  {
    id: "6",
    title: "15% nuolaida visai svetainei",
    brand: "Adidas",
    code: "ADIDAS15",
    expiryDate: "2023-12-15",
    discount: "15% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    category: "Sportas",
    description: "Gaukite 15% nuolaidą visoms prekėms Adidas internetinėje parduotuvėje. Neleidžiama derinti su kitomis akcijomis."
  },
  {
    id: "7",
    title: "20€ nuolaida pirmam vitaminų užsakymui",
    brand: "Ritual",
    code: "RITUAL20",
    expiryDate: "2023-12-31",
    discount: "20€ NUOLAIDA",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de",
    category: "Sveikata",
    description: "Sutaupykite 20€ nuo pirmojo vitaminų užsakymo virš 50€."
  },
  {
    id: "8",
    title: "Perkant 2, trečią gaukite nemokamai",
    brand: "Gap",
    code: "GAP2GET1",
    expiryDate: "2023-11-30",
    discount: "3-as NEMOKAMAI",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5",
    category: "Apranga",
    description: "Pirkite bet kuriuos du drabužius ir trečią (mažiausios vertės) gaukite nemokamai."
  },
  
  // Gaming deals
  {
    id: "9",
    title: "20% nuolaida žaidimams",
    brand: "Steam",
    code: "STEAM20",
    expiryDate: "2023-12-20",
    discount: "20% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
    category: "Žaidimai",
    description: "Gaukite 20% nuolaidą pasirinktinai grupei žaidimų Steam platformoje."
  },
  {
    id: "10",
    title: "50€ nuolaida PlayStation 5 konsolei",
    brand: "Sony",
    code: "PS5DEAL",
    expiryDate: "2023-11-25",
    discount: "50€ NUOLAIDA",
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db",
    category: "Žaidimai",
    description: "Sutaupykite 50€ įsigydami PlayStation 5 konsolę dalyvaujančiuose elektronikos parduotuvėse."
  },
  {
    id: "11",
    title: "3 mėnesiai Xbox Game Pass už 1€",
    brand: "Microsoft",
    code: "XGPULTIMATE",
    expiryDate: "2023-12-31",
    discount: "TIK 1€",
    image: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d",
    category: "Žaidimai",
    description: "Gaukite 3 mėnesius Xbox Game Pass Ultimate narystės už 1€. Tik naujiems nariams."
  },
  
  // Finance deals
  {
    id: "12",
    title: "100€ premija atidarant naują sąskaitą",
    brand: "Swedbank",
    code: "SWED100",
    expiryDate: "2024-01-15",
    discount: "100€ PREMIJA",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
    category: "Finansai",
    description: "Gaukite 100€ premiją atidarę naują Swedbank banko sąskaitą ir atlikę bent 3 mokėjimus per pirmąjį mėnesį."
  },
  {
    id: "13",
    title: "0% komisinis mokestis visus metus",
    brand: "Revolut",
    code: "REVTRADE0",
    expiryDate: "2023-12-31",
    discount: "0% KOMISINIAI",
    image: "https://images.unsplash.com/photo-1623118732198-4e0c87c64f3f",
    category: "Finansai",
    description: "Prekiaukite akcijomis ir ETF be komisinio mokesčio pirmąjį narystės metus."
  },
  {
    id: "14",
    title: "20% nuolaida draudimo įmokoms",
    brand: "If Draudimas",
    code: "IFINSURE20",
    expiryDate: "2024-01-31",
    discount: "20% NUOLAIDA",
    image: "https://images.unsplash.com/photo-1565372595018-6c8db5477e24",
    category: "Finansai",
    description: "Sutaupykite 20% nuo metinės namų arba kelionių draudimo įmokos."
  }
];

export const categories = [
  {
    title: "Sportas",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    count: deals.filter(deal => deal.category === "Sportas").length,
    slug: "sportas",
  },
  {
    title: "Maistas",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    count: deals.filter(deal => deal.category === "Maistas").length,
    slug: "maistas",
  },
  {
    title: "Apranga",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
    count: deals.filter(deal => deal.category === "Apranga").length,
    slug: "apranga",
  },
  {
    title: "Sveikata",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71",
    count: deals.filter(deal => deal.category === "Sveikata").length,
    slug: "sveikata",
  },
  {
    title: "Žaidimai",
    image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf",
    count: deals.filter(deal => deal.category === "Žaidimai").length,
    slug: "zaidimai",
  },
  {
    title: "Finansai",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d",
    count: deals.filter(deal => deal.category === "Finansai").length,
    slug: "finansai",
  }
];

export const getCategoryDeals = (categorySlug: string) => {
  const category = categories.find(cat => cat.slug === categorySlug);
  if (!category) return [];
  
  return deals.filter(deal => deal.category.toLowerCase() === category.title.toLowerCase());
};

export const getFeaturedDeals = () => {
  return deals.filter(deal => deal.featured);
};

export const getTrendingDeals = () => {
  return deals.slice(4, 8);
};
