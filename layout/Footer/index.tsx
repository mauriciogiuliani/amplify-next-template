import { Typography } from "@material-tailwind/react";

import Image from 'next/image';

import infracoop_logo from "@/images/logo/infracoop.jpg";
import certaja_logo from "@/images/logo/certaja.jpg"
import cebranorte_logo from "@/images/logo/cerbranorte.jpg";
import certel_logo from "@/images/logo/certel.jpg";
import coprel_logo from "@/images/logo/coprel.jpg";


import aneel_logo from "@/images/logo/aneel.jpg";

export function SimpleFooter() {



  return (
    <>

      <div className="flex justify-center">
        <img src={aneel_logo.src} alt={""} className="h-32" />
      </div>

      <div className="flex flex-col lg:flex-row  items-center space-x-6">
        <img src={infracoop_logo.src} alt={""} className="h-12 mb-4" />

        <img src={certaja_logo.src} alt={""} className="h-12 mb-4" />

        <img src={cebranorte_logo.src} alt={""} className="h-20" />

        <img src={certel_logo.src} alt={""} className="h-12 mb-4" />

        <img src={coprel_logo.src} alt={""} className="h-12 mb-4" />

      </div>

    </>
  );
}