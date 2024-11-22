import { Typography } from "@material-tailwind/react";

import Image from 'next/image';

import infracoop_logo from "@/public/images/logo/infracoop.png";
import certaja_logo from "@/public/images/logo/certaja.png"
import cebranorte_logo from "@/public/images/logo/cerbranorte.png";
import certel_logo from "@/public/images/logo/certel.png";
import coprel_logo from "@/public/images/logo/coprel.png";


import aneel_logo from "@/public/images/logo/aneel.png";
import coop_logo from "@/public/images/logo/coop.png";

export function SimpleFooter() {



  return (
    <>





     
      <div className="flex mx-auto lg:items-center lg:space-x-6 gap-0">


        <img src={certaja_logo.src} alt={""} className="h-8 lg:h-[4rem]" />

        <img src={cebranorte_logo.src} alt={""} className="h-8 lg:h-[4rem]" />

        <img src={certel_logo.src} alt={""} className="h-8 lg:h-[4rem]" />

        <img src={coprel_logo.src} alt={""} className="h-8 lg:h-[4rem]" />

        <img src={infracoop_logo.src} alt={""} className="h-8 lg:h-[4rem]" />

        <img src={coop_logo.src} alt={""} className="h-8 lg:h-[4rem]" />

      </div>

      <div className="mx-auto">
        <img src={aneel_logo.src} alt={""} className="h-10 lg:h-[5rem]" />
      </div>
    </>
  );
}