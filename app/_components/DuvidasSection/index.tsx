import { Accordion, AccordionBody, AccordionHeader, Typography } from "@material-tailwind/react";
import { AccordionCustomIcon } from "../Accordion";
import { useState } from "react";


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

export function DuvidasSection() {
    const [open, setOpen] = useState(0);

    const handleOpen = (value: any) => setOpen(open === value ? 0 : value);
    return (
        <section className="bg-white px-8 py-12 lg:py-32">

            <div className="container mx-auto ">
                <Typography
                    variant="h2"
                    className="mb-4 !text-2xl lg:!text-4xl text-primary"
                >
                    Dúvidas Frequentes
                </Typography>

                <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(1)}
                    >
                        Quais as vantagens de aderir ao projeto?
                    </AccordionHeader>
                    <AccordionBody className="text-gray-500 text-md px-4">
                        A principal vantagem é a possibilidade de reduzir os custos com energia,  as comercializadoras podem estruturar seus portfólios resultanto muitas vezes resultando em tarifas mais baixas do que as oferecidas pelas tarifas reguladas., além disso o cliente têm a liberdade de escolher o tipo de contrato que melhor atende às suas necessidades. Isso inclui a possibilidade de escolher entre diferentes planos e condições contratuais.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(2)}
                    >
                        Como aderir  aos produtos?
                    </AccordionHeader>
                    <AccordionBody className="text-gray-500 text-md px-4">
                        Após a análise dos planos disponíveis para você e analisa-los você pode escolher a oferta que lhe levará ao contrato de adesão, basta concordar com o termo de adesão que você fará parte do projeto ao longo de todo o período do experimento.
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(3)}
                    >
                        E se mudar de empresa, ficarei sem fornecimento?
                    </AccordionHeader>
                    <AccordionBody className="text-gray-500 text-md px-4">
                        Não seguirá da mesma forma, apenas na sua conta você perceberá u valor de ajuste da sua fatura conforme o plano escolhido e um relatório de faturamento para que você possa verificar com detalhes esse ajuste.

                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(4)}
                    >
                        Tenho de efetuar alguma alteração no medidor de energia?
                    </AccordionHeader>
                    <AccordionBody className="text-gray-500 text-md px-4">
                        Dependendo do plano escolhido, especialmente os planos com tarifas com diferenciação horária a distribuidora terá que instalar um novo medidor para registrar o consumo por horário sem custo adicional, se o plano escolhido não tiver tarifa diferenciada por horário nada se altera, segue a operação e manutenção normal da empresa
                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(5)}
                    >
                        Como saber qual a melhor escolha?

                    </AccordionHeader>
                    <AccordionBody>
                        Os planos estão detalhadamente explicados no Saiba Mais de cada produto, inclusive com possibilidade de visualizar um exemplo  no botão Ver exemplo detalhado analise bem e aproveite a liberdade de escolha proporcionada pelo projeto

                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 6} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(6)}
                    >
                        Tem algum custo adicional para a mudança?


                    </AccordionHeader>
                    <AccordionBody>
                        Não  tem nenhum custo adicional e na dúvida consulte os canais de atendimento da sua distribuidora


                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 7} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(7)}
                    >
                        E se o produto escolhido resultar em um aumento da minha conta?


                    </AccordionHeader>
                    <AccordionBody>
                        Pode acontecer se a escolha for de um produto de custo maior que a tarifa convencional atualmente aplicada, ou mesmo se a escolha for por tarifas horárias o que varia em função do consumo em horários com tarifas mais altas . No entanto aderindo ao projeto você se livra do risco da aplicação das bandeiras tarifárias que não se aplicam ao mercado livre caso em algum mês a bandeira for acionada e houver a cobrança na sua conta ela será reembolsada no mês seguinte


                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 8} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(8)}
                    >
                        A minha conta de energia vai mudar?


                    </AccordionHeader>
                    <AccordionBody>
                        Visualmente a conta será a mesma, apenas haverá um crédito  ou adicional dependendo do  plano  escolhido. Os impostos se aplicam normalmente sobre a conta convencional e o crédito ou adicional serão especificamente apurados e registrados na conta do mês subsequente, acompanhado de um relatório de faturamento detalhado.


                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 9} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(9)}
                    >
                        Quais os canais de contato para dúvidas sobre o projeto?


                    </AccordionHeader>
                    <AccordionBody>
                        Você pode contatar nosso canal exclusivo por Whats App a ser indicado quando da adesão


                    </AccordionBody>
                </Accordion>

                <Accordion open={open === 10} icon={<Icon id={5} open={open} />}>
                    <AccordionHeader
                        className="text-gray-500 hover:text-secondary font-light"
                        onClick={() => handleOpen(10)}
                    >
                        O que é comercializadora COMERCIALIZA?


                    </AccordionHeader>
                    <AccordionBody>
                        A comercializadora COMERCIALIZA é virtual e equivalente a uma comercializadora  independente da cooperativa , ou seja na abertura de mercado haverão várias comercializadoras operando no mercado é importante o cliente buscar informações sobre a idoneidade das comercializadoras. Neste projeto essa comercializadora virtual pode ser uma opção alternativa à comercializadora da cooperativa.


                    </AccordionBody>
                </Accordion>
            </div>
        </section>
    )
}