import { Typography } from "@material-tailwind/react";

import Image from 'next/image';

import certaja from "@/images/CERTAJA.png";
import cebranorte from "@/images/CERBRANORTE.png";
import certel from "@/images/CERTEL.png";
import coprel from "@/images/coprel.svg";


export function SimpleFooter() {



  return (
    <footer 
    className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-center bg-primary md:px-12">
      

    <Image src={certaja.src} alt={""} width={150} height={250} />

    <Image src={cebranorte.src} alt={""} width={150} height={250} />

    <Image src={certel.src} alt={""} width={150} height={250} />

    <Image src={coprel.src} alt={""} width={150} height={250} />

      
      
      {/* <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            className="transition-colors text-white hover:text-secondary focus:text-secondary font-normal tracking-wide "
          >
            
          </Typography>
        </li>
      </ul> */}
    </footer>
  );
}