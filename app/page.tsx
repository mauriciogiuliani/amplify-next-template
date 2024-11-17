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

Amplify.configure(outputs);


export default function App() {


  return (
    <>
      <MainSection />

      <DescriptionSection />

      <CarouselSection />

      <FAQSection />

      <ContactSection />

    </>
  );
}
