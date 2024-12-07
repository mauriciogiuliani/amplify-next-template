import type { Metadata } from "next";
import "./globals.css";


import { SimpleFooter } from "./_layout/Footer";
import { Header } from "./_layout/Header";
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




  return (

    <html lang="pt_BR">
      <body>
        <AuthProvider >

          <header className=" sticky top-0 bg-white opacity-100 z-50">
            <Header />
          </header>

          <main className="">
            {children}
          </main>




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
