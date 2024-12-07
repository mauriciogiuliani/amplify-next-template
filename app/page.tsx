"use client";

// import "@aws-amplify/ui-react/styles.css";
// import "./app.css";

import outputs from "@/amplify_outputs.json";
import { Amplify } from "aws-amplify";

import ContactSection from "./_components/ContactSection";
import MainSection from "./_components/MainSection";
import DescriptionSection from "./_components/DescriptionSection";
import CarouselSection from "./_components/CarouselSection";
import FAQSection from "./_components/FAQSection";
import { useAuth } from "./auth.context";
import ProdutosSection from "./_components/ProdutosSection";
import { whatsapp_number, whatsapp_text } from "./_components/ProdutosSection/constants";
import whatsapp_icon from "@/images/whatsapp.png";


Amplify.configure(outputs);


export default function App() {

  const { consumidor } = useAuth();


  return (
    <>
      {consumidor.uc &&
        <ProdutosSection
          numeroUC={consumidor.uc}
          permissionaria={consumidor.permissionaria}
          nome={consumidor.nome}
          grupo={consumidor.grupo}
          produtoSelecionado={consumidor.produto_selecionado}
        />
      }

      <MainSection />

      <DescriptionSection />

      <CarouselSection />

      <FAQSection />

      {
        consumidor.uc && (
          <>
            <ContactSection />
            <a
              target="_blank"
              href={"https://api.whatsapp.com/send?phone=" + whatsapp_number + "&text=" + whatsapp_text}

            >
              <img src={whatsapp_icon.src} className="whatsapp_icon h-12 lg:h-14 m-6 lg:m-8 bottom-4 lg:bottom-0 z-50" />
            </a>
          </>
        )
      }




    </>
  );
}
