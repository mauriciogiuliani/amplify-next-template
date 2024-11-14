import type { Metadata } from "next";
import "./globals.css";
import { NavbarSimple } from "./_components/Header";
import LoginSection from "./_components/LoginSection";
import { SimpleFooter } from "./_components/Footer";



// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercado Livre de Energia",
  description: "Sistema de adesão ao projeto mercado livre de energia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="en">
      <body>
        <header className=" sticky top-0  bg-white opacity-100 z-50">
          <NavbarSimple />
        </header>


        <main>


          {children}

        </main>

        <footer
          className="sticky top-0 bg-white 
          flex flex-col lg:flex-row w-full lg:justify-evenly gap-y-6 gap-x-12 border-t border-blue-gray-50 md:px-12 py-4 lg:py-0">
          <SimpleFooter />
        </footer>
      </body>
    </html>

  );
}
