"use client";

// import "@aws-amplify/ui-react/styles.css";
// import "./app.css";

import outputs from "@/amplify_outputs.json";
import { Amplify } from "aws-amplify";

import ContactSection from "./_components/ContactSection";
import MainSection from "./_components/MainSection";
import DescriptionSection from "./_components/DescriptionSection";
import CarouselSection from "./_components/CarouselSection";
import FAQSection from "./_components/FAQSection";
import { useAuth } from "./auth.context";
import ProdutosSection from "./_components/ProdutosSection";

Amplify.configure(outputs);


export default function App() {

  const { consumidor } = useAuth()


  return (
    <>
      { consumidor.uc && <ProdutosSection /> }

      <MainSection />

      <DescriptionSection />

      <CarouselSection />

      <FAQSection />

      <ContactSection />

    </>
  );
}
