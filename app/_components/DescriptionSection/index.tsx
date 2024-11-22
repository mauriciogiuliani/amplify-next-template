import {
    Card,
    CardBody,
    Typography,
    CardHeader,
    IconButton,
} from "@material-tailwind/react";

import tarifa_sistema_de_distribuicao from "@/images/icons/tarifa_sistema_de_distribuicao.png"
import icon_tarifa_de_energia from "@/images/icons/tarifa_de_energia.png"
import icon_lampadas from "@/images/icons/lampadas.png"
interface TestimonialCardPropsType {

    title: string;
}

function TestimonialCard({

    title,
}: TestimonialCardPropsType) {
    return (
        <Card shadow={false} className="bg-gray-100/50 rounded-2xl p-6">

            <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
                <div>
                    <Typography variant="paragraph" className="text-primary font-normal ">
                        {title}
                    </Typography>

                </div>
            </CardBody>
        </Card>
    );
}


export function OProjeto() {
    return (
        <section id="projeto"
            className="px-8 py-12 lg:py-24">
            <div className="container mx-auto">

                {/* <div className="flex justify-center mb-8 h-10 lg:h-14">
                    <img src={icon_lampadas.src} />
                </div> */}

                <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-5xl/none lg:text-start mb-4">
                    O Projeto
                </Typography>


                <Typography
                    variant="paragraph"
                    className="max-w !text-gray-500"
                >
                    O Projeto Experimental de Abertura de Mercado foi desenvolvido para permitir que consumidores experimentem o funcionamento do Mercado Livre de Energia sob a supervisão da distribuidora.
                    Nesse ambiente simulado e seguro, os participantes podem escolher entre diferentes opções de fornecimento de energia, 
                    similar ao que ocorre no mercado livre. Dentro desse contexto, o SiPAM BT (Sistema do Projeto de Abertura de Mercado em Baixa Tensão) é a plataforma que viabiliza essa experiência.
                    Ela permite que consumidores conectados em baixa tensão participem do projeto, simulando a liberdade de escolha de fornecedores de energia e entendendo as dinâmicas do mercado livre,
                    tudo isso sem comprometer a segurança e a confiabilidade do fornecimento.
                </Typography>

                <Typography
                    variant="h4"
                    className="max-w text-primary py-6 xl:py-12 font-light text-center xl:text-start"
                >
                    Na sua conta de luz, existem duas partes principais
                </Typography>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16">
                    <Card className=" bg-gray-100/50 text-center rounded-2xl p-6 flex " shadow={false}>
                        <CardHeader className="text-primary flex flex-col items-center"
                            color="transparent"
                            floated={false}
                            shadow={false}
                        >
                            <img src={tarifa_sistema_de_distribuicao.src}
                                className="mb-4 h-14"
                            />
                            <Typography className="mb-2 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold">
                                Tarifa de Uso do Sistema de Distribuição

                            </Typography>
                            {/* <Typography variant="lead" className="text-gray-700">
                                TUSD
                            </Typography> */}
                        </CardHeader>

                        <CardBody >
                            <Typography variant="paragraph" className="text-gray-700 text-lg" >
                            Essa é a parte fixa da tarifa, que cobre os custos de transporte da energia até sua casa, além de encargos obrigatórios. 
                            Mesmo no Mercado Livre de Energia, essa tarifa não muda e continuará sendo cobrada pela distribuidora.
                            </Typography>
                        </CardBody>
                    </Card>


                    <Card className="bg-gray-100/50 text-center rounded-2xl p-6" shadow={false}>
                        <CardHeader className="text-primary flex flex-col items-center"
                            color="transparent"
                            floated={false}
                            shadow={false}
                        >

                            <img src={icon_tarifa_de_energia.src}
                                className="mb-4 h-14"
                            />

                            <Typography className="mb-2 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold ">
                                Tarifa de Energia
                            </Typography>

                        </CardHeader>

                        <CardBody >
                            <Typography variant="paragraph" className="text-gray-700 text-lg">
                                É essa parte da tarifa que você pode mudar no projeto, escolhendo entre diferentes planos. Ela cobre os custos da geração de energia.
                            </Typography>
                        </CardBody>
                    </Card>
                </div>

                <Typography
                    variant="paragraph"
                    className="max-w !text-gray-500 py-6 lg:py-12"
                >
                    Diferente das tarifas fixadas pela ANEEL (que regula o setor), a tarifa de energia no mercado livre é baseada nas condições atuais do mercado, podendo variar.
                    O projeto vai durar 12 meses e será uma simulação para um grupo de consumidores, permitindo que você entenda melhor como funciona sua conta de energia e como poderia ser a transição para o mercado livre no futuro.
                    Você pode participar de forma voluntária e aproveitar essa oportunidade de conhecer e escolher o tipo de energia que vai usar.
                </Typography>

                <Card className="bg-gray-100/50 text-center  rounded-2xl p-6" shadow={false}>
                    <CardHeader className="text-primary"
                        color="transparent"
                        floated={false}
                        shadow={false}
                    >
                        <Typography className="mb-2 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold ">
                            Junte-se a nós e explore a liberdade de escolha no mercado de energia!
                        </Typography>

                    </CardHeader>
                </Card>

            </div>
        </section>
    );
}

export default OProjeto;