import type { Metadata } from "next";
import "./globals.css";

import whatsapp_icon from "@/images/whatsapp.png";
import { AlertProvider } from "./_layout/AlertMessage/AlertContext";
import { SimpleFooter } from "./_layout/Footer";
import { NavbarSimple } from "./_layout/Header";
import { useEffect } from "react";
import { AuthProvider } from "./auth.context";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Livre de Energia",
  description: "Sistema de adesão ao projeto mercado livre de energia",
};


export interface LayoutProps {
  alertMessage: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  const whatsappText = encodeURIComponent("Olá, gostaria de mais informações sobre o Projeto de Adesaão ao Mercado Livre de Energia");
  const whatsappPhone = "5551984084420";


  return (

    <html lang="pt_BR">
      <body>
        <AuthProvider >

          <header className=" sticky top-0 bg-white opacity-100 z-10">
            <NavbarSimple />
          </header>

          <main className="">
            {children}
          </main>


          <a
            target="_blank"
            href={"https://api.whatsapp.com/send?phone=" + whatsappPhone + "&text=" + whatsappText}

          >
            <img src={whatsapp_icon.src} className="whatsapp_icon h-12 lg:h-14 m-6 lg:m-8 bottom-4 lg:bottom-0" />
          </a>

          <footer
            className="sticky top-0 bg-white 
          flex flex-col lg:flex-row w-full lg:justify-evenly gap-y-2  border-t border-blue-gray-50  py-4 md:px-12 lg:py-12">
            <SimpleFooter />
          </footer>



        </AuthProvider>
      </body>
    </html>

  );
}
