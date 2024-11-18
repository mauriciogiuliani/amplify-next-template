import { Carousel, Typography, Button, Card, IconButton } from "@material-tailwind/react";
import lifestyle_img from "@/images/lifestyle.jpg";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";

const CarouselSection = () => {
    return (
        <section id="beneficios"
            className="bg-[url('/images/background/carousel.jpg')] bg-cover px-8 py-12 lg:py-24">

            <div className="container mx-auto ">
                <div className="space-y-4 mx-2 ">
                    <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-5xl/none lg:text-start">
                        Benefícios
                    </Typography>
                    <Typography variant="paragraph" className="text-secondary text-xl  lg:text-start">
                        Descubra os benefícios que o Projeto Experimental Abertura de Mercado traz para você.
                    </Typography>
                </div>

                <Carousel className="py-12 "
                    autoplay
                    loop
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            onClick={handlePrev}
                            className="!absolute top-2/4 -left-2 -translate-y-2/4 bg-transparent shadow-none focus-visible:shadow-none"
                        >
                            <ChevronLeftIcon strokeWidth={2} className="h-8 text-primary lg:text-white" />
                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            onClick={handleNext}
                            className="!absolute top-2/4 -right-2 -translate-y-2/4  bg-transparent shadow-none focus-visible:shadow-none"
                        >
                            <ChevronRightIcon strokeWidth={2} className="h-8 text-primary lg:text-white" />
                        </IconButton>
                    )}>

                    <Card className="bg-white p-8 lg:mx-16 min-h-[34rem] lg:min-h-[20rem]  ">

                        <Typography variant="h4" className="mb-4">
                            Liberdade de Escolha na Contratação de Energia
                        </Typography>

                        <Typography variant="paragraph">
                            Participar do Projeto Experimental Abertura de Mercado oferece aos consumidores a oportunidade de escolher entre diferentes planos de energia. Isso significa que, ao invés de depender de tarifas fixas e pré-determinadas pela ANEEL, você poderá optar por opções que atendem melhor ao seu perfil de consumo, possibilitando a personalização da sua conta de energia. Ao testar essas alternativas de forma simulada, você tem um vislumbre real de como seria atuar no Mercado Livre de Energia, com a liberdade de buscar as melhores ofertas de geração de energia.
                        </Typography>

                    </Card>

                    <Card className="bg-white p-8 lg:mx-16 min-h-[34rem] lg:min-h-[20rem] ">
                        <Typography variant="h4" className="mb-4">
                            Compreensão Mais Clara da Conta de Energia
                        </Typography>

                        <Typography variant="paragraph">
                            A participação no projeto proporciona uma visão mais detalhada e transparente sobre a composição da sua conta de luz, especialmente sobre as tarifas de energia, que são a parte variável do valor total. O projeto permitirá que você entenda como as condições do mercado influenciam o preço da energia, como essas variações podem impactar seus custos e como tomar decisões mais informadas no futuro. Isso pode resultar em uma melhor gestão e redução de custos no consumo de energia ao longo do tempo.
                        </Typography>

                    </Card>

                    <Card className="bg-white p-8 lg:mx-16 min-h-[34rem] lg:min-h-[20rem] ">

                        <Typography variant="h4" className="mb-4">
                            Preparação para o Futuro no Mercado Livre de Energia
                        </Typography>

                        <Typography variant="paragraph">
                            O projeto tem uma duração de 12 meses, permitindo que os consumidores experimentem como seria a transição para o mercado livre de energia, com a supervisão da distribuidora. Esse tempo é fundamental para adquirir conhecimento e compreender os possíveis desafios e oportunidades que surgem ao escolher livremente seus fornecedores de energia. Ao participar voluntariamente, você terá a chance de se preparar para um futuro em que poderá atuar de maneira mais independente, escolhendo o fornecedor e a tarifa mais adequada ao seu consumo.
                        </Typography>


                    </Card>







                </Carousel>
            </div>



        </section >
    );
}

export default CarouselSection;