
import React from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SavedDeals = () => {
  return (
    <Layout>
      <div className="container-custom pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-8">Išsaugotos nuolaidos</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Ši funkcija nebėra pasiekiama.
          </p>
          <p className="mb-8">Išsaugojimo funkcionalumas buvo pašalintas iš svetainės.</p>
          <Button asChild>
            <Link to="/all-deals">Peržiūrėti visus pasiūlymus</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default SavedDeals;
