import { Carousel, Typography, Button, Card, CardHeader, CardBody, Input, Textarea } from "@material-tailwind/react";
import lifestyle_img from "@/images/lifestyle.jpg";

const ContactSection = () => {

    const handleFormSubmit = () => {
        alert("Mensagem enviada com sucesso");
    }

    return (
        <section
            id="fale_conosco"
            className="bg-[url('/images/background/contact.jpg')] bg-cover px-8 py-12 lg:py-24"
        >

            <div className="container mx-auto">
                <div className="grid gap-2 2xl:gap-24 lg:grid-cols-2 items-center ">

                    <div className="space-y-4 mx-2 ">
                        <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-5xl/none lg:text-start">
                            Fale Consco
                        </Typography>

                        <Typography variant="paragraph" className="text-secondary text-xl  lg:text-start">
                            Tem dúvidas em relação ao projeto?
                            <br></br>
                            Use o formulário ao lado e tire todas suas dúvidas, se preferrir clique no botão de whatsapp ao lado e fale diretamente conosco.
                        </Typography>
                    </div>


                    <div className="mx-2 ">
                        <div className="flex flex-col bg-gray-100 shadow-sm border border-slate-200 rounded-lg my-8  ">

                            <div className="grid text-center items-center px-4 py-10">

                                <form
                                    className="mx-4 lg:mx-24 text-left"
                                    onSubmit={handleFormSubmit}
                                >
                                    <div className="mb-4">
                                        <label htmlFor="nome">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-bold text-gray-900">
                                                Nome
                                            </Typography>
                                        </label>

                                        <Input
                                            id="nome"
                                            name="nome"
                                            size="lg"
                                            crossOrigin={"anonymous"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none hidden",
                                            }}
                                            // onChange={(e) => setNumeroUC(e.target.value)}
                                            // value={numeroUC}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="email">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-bold text-gray-900">
                                                Email
                                            </Typography>
                                        </label>

                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            size="lg"
                                            crossOrigin={"anonymous"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none hidden",
                                            }}
                                            // onChange={(e) => setNumeroUC(e.target.value)}
                                            // value={numeroUC}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label htmlFor="telefone">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-bold text-gray-900">
                                                Telefone
                                            </Typography>
                                        </label>

                                        <Input
                                            id="telefone"
                                            name="telefone"
                                            size="lg"
                                            crossOrigin={"anonymous"}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                            labelProps={{
                                                className: "before:content-none after:content-none hidden",
                                            }}
                                            // onChange={(e) => setNumeroUC(e.target.value)}
                                            // value={numeroUC}
                                            required
                                        />
                                    </div>

                                    <div className="mb-6">
                                        <label htmlFor="telefone">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-bold text-gray-900">
                                                Dúvida
                                            </Typography>
                                        </label>

                                        <Textarea
                                            id="fale_conosco_duvida"
                                            name="fale_conosco_duvida"
                                            size="lg"
                                            labelProps={{
                                                className: "hidden",
                                            }}
                                           className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        />

                                        
                                    </div>

                                    <Button
                                        className="bg-primary mt-6"
                                        size="lg"
                                        fullWidth
                                        type="submit"
                                    >
                                        ENVIAR
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