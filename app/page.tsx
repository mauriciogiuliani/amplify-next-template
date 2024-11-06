"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";


import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { ThemeProvider } from "@material-tailwind/react";
import { NavbarSimple } from "./_components/Header";
import { AccordionCustomIcon } from "./_components/Accordion";
import LoginSection from "./_components/LoginSection";
import { DuvidasSection } from "./_components/DuvidasSection";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {


  return (
    <>
       <LoginSection />
       <DuvidasSection />

    </>



  );
}
