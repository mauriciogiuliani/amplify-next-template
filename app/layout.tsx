import type { Metadata } from "next";
import "./globals.css";
import { NavbarSimple } from "./_components/Header";
import LoginSection from "./_components/LoginSection";



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
        <header>
          <NavbarSimple />
        </header>


        <main>
         

          {children}

        </main>

      </body>
    </html>

  );
}
