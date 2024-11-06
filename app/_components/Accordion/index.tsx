import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";


function Icon(id: any, open: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader
          className="text-primary hover:text-secondary"
          onClick={() => handleOpen(1)}
        >
          Quais as vantagens de aderir ao projeto?
        </AccordionHeader>
        <AccordionBody>
          A principal vantagem é a possibilidade de reduzir os custos com energia,  as comercializadoras podem estruturar seus portfólios resultanto muitas vezes resultando em tarifas mais baixas do que as oferecidas pelas tarifas reguladas., além disso o cliente têm a liberdade de escolher o tipo de contrato que melhor atende às suas necessidades. Isso inclui a possibilidade de escolher entre diferentes planos e condições contratuais.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader
          className="text-primary hover:text-secondary"
          onClick={() => handleOpen(2)}
        >
          Como aderir  aos produtos?
        </AccordionHeader>
        <AccordionBody>
          Após a análise dos planos disponíveis para você e analisa-los você pode escolher a oferta que lhe levará ao contrato de adesão, basta concordar com o termo de adesão que você fará parte do projeto ao longo de todo o período do experimento.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader
          className="text-primary hover:text-secondary"
          onClick={() => handleOpen(3)}
        >
          E se mudar de empresa, ficarei sem fornecimento?
        </AccordionHeader>
        <AccordionBody>
          Não seguirá da mesma forma, apenas na sua conta você perceberá u valor de ajuste da sua fatura conforme o plano escolhido e um relatório de faturamento para que você possa verificar com detalhes esse ajuste.

        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader
          className="text-primary hover:text-secondary"
          onClick={() => handleOpen(4)}
        >
          Tenho de efetuar alguma alteração no medidor de energia?
        </AccordionHeader>
        <AccordionBody>
          Dependendo do plano escolhido, especialmente os planos com tarifas com diferenciação horária a distribuidora terá que instalar um novo medidor para registrar o consumo por horário sem custo adicional, se o plano escolhido não tiver tarifa diferenciada por horário nada se altera, segue a operação e manutenção normal da empresa
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
        <AccordionHeader
          className="text-primary hover:text-secondary"
          onClick={() => handleOpen(5)}
        >
          Como saber qual a melhor escolha?

        </AccordionHeader>
        <AccordionBody>
          Os planos estão detalhadamente explicados no Saiba Mais de cada produto, inclusive com possibilidade de visualizar um exemplo  no botão Ver exemplo detalhado analise bem e aproveite a liberdade de escolha proporcionada pelo projeto

        </AccordionBody>
      </Accordion>
    </>
  );
}