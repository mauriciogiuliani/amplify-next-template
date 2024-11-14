"use client";

import { generateClient } from "aws-amplify/data";


import type { Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import "./../app/app.css";
import { Beneficios } from "./_components/Beneficios";
import { DuvidasSection } from "./_components/DuvidasSection";
import LoginSection from "./_components/LoginSection";
import OProjeto from "./_components/OProjeto";
import { SimpleFooter } from "./_components/Footer";


import { FaleConosco } from "./_components/FaleConosco";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {


  return (
    <>
      <LoginSection />

      <OProjeto />

      <Beneficios />

      <DuvidasSection />

      <FaleConosco />
      

      


    </>



  );
}
