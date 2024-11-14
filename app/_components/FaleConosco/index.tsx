import { Carousel, Typography, Button, Card, CardHeader, CardBody, Input, Textarea } from "@material-tailwind/react";
import lifestyle_img from "@/images/lifestyle.jpg";

export function FaleConosco() {
    return (
        <section className="bg-primary px-8 py-12 lg:py-24">
            <div className="container mx-auto ">
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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus odio tempore vitae laboriosam vero id laudantium, ducimus quam praesentium! Doloribus, quas dolore? Vel in accusantium assumenda doloremque officia ad commodi.
                </Typography>

                <Card shadow={false} className="m-6 lg:mx-40">

                    <CardBody>
                        <form action="#" className="mx-auto max-w-[24rem] text-left">
                            <div className="mb-4">
                                <label htmlFor="numero_uc">
                                    <Typography
                                        variant="small"
                                        className="mb-2 block font-medium text-gray-900">
                                        Nome
                                    </Typography>
                                </label>

                                <Input
                                    id="numero_uc"
                                    name="numero_uc"
                                    size="lg"
                                    crossOrigin={"anonymous"}
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    className="focus:border-t-black"

                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="numero_uc">
                                    <Typography
                                        variant="small"
                                        className="mb-2 block font-medium text-gray-900">
                                        Email
                                    </Typography>
                                </label>

                                <Input
                                    id="numero_uc"
                                    name="numero_uc"
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
                                <label htmlFor="numero_uc">
                                    <Typography
                                        variant="small"
                                        className="mb-2 block font-medium text-gray-900">
                                        Telefone
                                    </Typography>
                                </label>

                                <Input
                                    id="numero_uc"
                                    name="numero_uc"
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
                                <label htmlFor="numero_uc">
                                    <Typography
                                        variant="small"
                                        className="mb-2 block font-medium text-gray-900">
                                        Duvida
                                    </Typography>
                                </label>

                                <Textarea
                                    id="numero_uc"
                                    name="numero_uc"
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
                    </CardBody>
                </Card>
            </div>



        </section>
    );
}