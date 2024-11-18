import { Carousel, Typography, Button, Card, CardHeader, CardBody, Input, Textarea } from "@material-tailwind/react";
import lifestyle_img from "@/images/lifestyle.jpg";

const ContactSection = () => {
    return (
        <section
            id="fale_conosco"
            className="bg-[url('/images/background/contact.jpg')] bg-cover px-8 py-12 lg:py-24"
        >

            <div className="container mx-auto">
                <div className="grid gap-2 2xl:gap-24 lg:grid-cols-2 items-center ">

                    <div className="mx-2 ">
                        <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-5xl/none lg:text-start">
                            Fale Consco
                        </Typography>

                        <Typography variant="paragraph" className="text-secondary text-xl  lg:text-start">
                        Tem dúvidas em relação ao projeto? Use o formulário ao lado e tire todas suas dúvidas, se preferrir clique no botão de whatsapp ao lado e fale diretamente conosco.
                        </Typography>
                    </div>


                    <div className="mx-2 ">
                        <div className="flex flex-col bg-gray-100 shadow-sm border border-slate-200 rounded-lg my-8  ">

                            <div className="grid text-center items-center px-4 py-10">

                                <form action="#" className="mx-auto max-w-[24rem] text-left">
                                    <div className="mb-4">
                                        <label htmlFor="fale_conosco_nome">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-medium text-gray-900">
                                                Nome
                                            </Typography>
                                        </label>

                                        <Input
                                            id="fale_conosco_nome"
                                            name="fale_conosco_nome"
                                            size="lg"
                                            crossOrigin={"anonymous"}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            className="focus:border-t-black"

                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="fale_conosco_email">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-medium text-gray-900">
                                                Email
                                            </Typography>
                                        </label>

                                        <Input
                                            id="fale_conosco_email"
                                            name="fale_conosco_email"
                                            size="lg"
                                            crossOrigin={"anonymous"}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            className="focus:border-t-black"
                                            type="email"

                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="fale_conosco_telefone">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-medium text-gray-900">
                                                Telefone
                                            </Typography>
                                        </label>

                                        <Input
                                            id="fale_conosco_telefone"
                                            name="fale_conosco_telefone"
                                            size="lg"
                                            crossOrigin={"anonymous"}
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            className="focus:border-t-black"
                                            placeholder="(00) 00000-0000"

                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="fale_conosco_duvida">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-medium text-gray-900">
                                                Duvida
                                            </Typography>
                                        </label>

                                        <Textarea
                                            id="fale_conosco_duvida"
                                            name="fale_conosco_duvida"
                                            size="lg"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                            className="focus:border-t-black"

                                        />
                                    </div>


                                    <Button size="lg" className="bg-primary mt-6" fullWidth>
                                        Enviar
                                    </Button>

                                </form>



                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="container mx-auto ">
                <Typography
                    variant="h2"
                    className="mb-4 !text-2xl lg:!text-4xl text-white"
                >
                    Fale Conosco
                </Typography>
                <Typography
                    variant="paragraph"
                    className="max-w text-secondary"
                >
                    
                </Typography>

                <Card shadow={false} className="m-6 lg:mx-40">

                    <CardBody>
                        
                    </CardBody>
                </Card>
            </div> */}



        </section>
    );
}

export default ContactSection;