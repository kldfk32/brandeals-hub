
import React from "react";
import { Layout } from "@/components/layout/Layout";

const SavedDeals = () => {
  return (
    <Layout>
      <div className="container-custom pt-24 pb-12">
        <h1 className="text-3xl font-bold mb-8">Išsaugotos nuolaidos</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <p className="text-lg text-muted-foreground mb-4">
            Čia galėsite rasti jūsų išsaugotas nuolaidas.
          </p>
          <p>Ši funkcija dar kuriama.</p>
        </div>
      </div>
    </Layout>
  );
};

export default SavedDeals;
