import type { Metadata } from "next";
import "./globals.css";

import whatsapp_icon from "@/images/whatsapp.png";
import { AlertProvider } from "./_layout/AlertMessage/AlertContext";
import { SimpleFooter } from "./_layout/Footer";
import { NavbarSimple } from "./_layout/Header";

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
  return (

    <html lang="en">
      <body>

        <AlertProvider>
          <header className=" sticky top-0  bg-white opacity-100 z-50">
            <NavbarSimple />
          </header>

          <main>
            {children}
          </main>

        </AlertProvider>

        <footer
          className="sticky top-0 bg-white 
          flex flex-col lg:flex-row w-full lg:justify-evenly gap-y-6 gap-x-12 border-t border-blue-gray-50 md:px-12 py-4 lg:py-0">
          <SimpleFooter />
        </footer>



        <img src={whatsapp_icon.src} className="whatsapp_icon h-12 lg:h-14 m-6 lg:m-8" />

      </body>
    </html>

  );
}
