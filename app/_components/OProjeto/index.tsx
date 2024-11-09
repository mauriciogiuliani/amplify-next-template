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
        <section className="px-8 py-10 lg:py-32">
            <div className="container mx-auto">
                <Typography
                    variant="h2"
                    color="blue-gray"
                    className="mb-4 !text-2xl lg:!text-4xl"
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
                    variant="lead"
                    className="max-w text-gray-500 text-center my-12"
                >
                    Sua tarifa de energia é composta de:
                </Typography>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <Card className=" bg-gray-100/50 text-center rounded-2xl p-6" shadow={false}>
                        <CardHeader className="text-primary"
                            color="transparent"
                            floated={false}
                            shadow={false}
                        >
                            <Typography className="mb-2 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold">
                                TUSD
                            </Typography>
                            <Typography variant="paragraph" className="text-gray-700">
                                Tarifa de Uso do Sistema de Distribuição
                            </Typography>
                        </CardHeader>

                        <CardBody className="space-y-2">
                            <Typography variant="paragraph" className="text-gray-700 text-lg" >
                                Custos de transporte da energia da geração até seu medidor
                            </Typography>
                            <Typography variant="paragraph" className="text-gray-700 text-lg">
                                Encargos setoriais legais
                            </Typography>
                        </CardBody>
                    </Card>


                    <Card className="bg-gray-100/50 text-center rounded-2xl p-6" shadow={false}>
                        <CardHeader className="text-primary"
                            color="transparent"
                            floated={false}
                            shadow={false}
                        >
                            <Typography className="mb-2 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold">
                                TE
                            </Typography>
                            <Typography variant="paragraph" className="text-gray-700">
                                Tarifa de Energia
                            </Typography>
                        </CardHeader>

                        <CardBody className="space-y-2">
                            <Typography variant="paragraph" className="text-gray-700 text-lg" >
                                Custos da geração de energia
                            </Typography>
                            <Typography variant="paragraph" className="text-gray-700 text-lg">
                            Esta é a parte da tarifa que você pode mudar no projeto, escolhendo entre diferentes planos
                            </Typography>
                        </CardBody>
                    </Card>
                </div>


            </div>
        </section>
    );
}

export default OProjeto;