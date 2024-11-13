import {
    Card,
    CardBody,
    Typography,
    CardHeader,
} from "@material-tailwind/react";

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

const testimonials = [
    {
        title:
            "O Projeto Experimental Abertura de Mercado foi criado para proporcionar aos clientes uma experiência prática com o Mercado Livre de Energia, ainda sob a supervisão da distribuidora. Este projeto permitirá que os consumidores vivenciem a proatividade no setor energético e exerçam sua liberdade de escolher entre produtos reais disponíveis no mercado.",
    },
    {
        title:
            "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    },
    {
        title:
            "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    },
];

export function OProjeto() {
    return (
        <section className="px-8 py-12 lg:py-32">
            <div className="container mx-auto">
                <Typography
                    variant="h2"
                    className="mb-4 !text-2xl lg:!text-4xl text-primary"
                >
                    O Projeto
                </Typography>
                <Typography
                    variant="paragraph"
                    className="max-w !text-gray-500"
                >
                    O Projeto Experimental Abertura de Mercado foi criado para que você possa experimentar como funciona o Mercado Livre de Energia, ainda com a supervisão da distribuidora. Isso significa que você terá a chance de escolher entre diferentes opções de energia, como acontece no mercado livre, mas de forma simulada e segura.
                </Typography>

                <Typography
                    variant="h4"
                    className="max-w text-primary py-6 xl:py-12 font-light text-center xl:text-start"
                >
                    Na sua conta de luz, existem duas partes principais
                </Typography>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 xl:gap-16">
                    <Card className=" bg-gray-100/50 text-center rounded-2xl p-6" shadow={false}>
                        <CardHeader className="text-primary"
                            color="transparent"
                            floated={false}
                            shadow={false}
                        >
                            <Typography className="mb-2 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold">
                                Tarifa de Uso do Sistema de Distribuição

                            </Typography>
                            <Typography variant="lead" className="text-gray-700">
                                TUSD
                            </Typography>
                        </CardHeader>

                        <CardBody className="space-y-2">
                            <Typography variant="paragraph" className="text-gray-700 text-lg" >
                                Esta é a parte da tarifa que cobre os custos de transporte da energia até sua casa, além de encargos obrigatórios.
                            </Typography>
                        </CardBody>
                    </Card>


                    <Card className="bg-gray-100/50 text-center rounded-2xl p-6" shadow={false}>
                        <CardHeader className="text-primary r"
                            color="transparent"
                            floated={false}
                            shadow={false}
                        >
                            <Typography className="mb-2 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold ">
                                Tarifa de Energia
                            </Typography>
                            <Typography variant="lead" className="text-gray-700 ">
                                TE
                            </Typography>
                        </CardHeader>

                        <CardBody className="space-y-2">
                            <Typography variant="paragraph" className="text-gray-700 text-lg">
                                É essa parte da tarifa que você pode mudar no projeto, escolhendo entre diferentes planos. Ela cobre os custos da <b>geração de energia</b>.
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