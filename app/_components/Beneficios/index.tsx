import { Carousel, Typography, Button, Card } from "@material-tailwind/react";
import lifestyle_img from "@/images/lifestyle.jpg";

export function Beneficios() {
    return (
        <section className="bg-primary px-8 py-12 lg:py-32">
            <div className="container mx-auto">
                <Typography
                    variant="h2"
                    className="mb-4 !text-2xl lg:!text-4xl text-white"
                >
                    Benefícios
                </Typography>
                <Typography
                    variant="paragraph"
                    className="max-w text-secondary"
                >
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus odio tempore vitae laboriosam vero id laudantium, ducimus quam praesentium! Doloribus, quas dolore? Vel in accusantium assumenda doloremque officia ad commodi.
                </Typography>

                <Carousel className="rounded-xl h-full xl:py-12"
                    // autoplay
                    loop>

                    <div className="container ">
                        <Card className="flex flex-row gap-12 bg-white rounded-2xl flex p-6 mx-32 h-lg" shadow={false}>

                            <img src={lifestyle_img.src} alt="" className="rounded-2xl w-96 " />

                            <div className="flex flex-col">
                                <Typography variant="h4" className="mb-4">
                                    Beneficio 1
                                </Typography>

                                <Typography variant="paragraph">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cupiditate est, at exercitationem quia quas maxime accusantium nostrum numquam, eum id necessitatibus iure placeat rerum, dolores sed rem. Officiis, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid voluptatem dolor, tempore ipsum adipisci labore numquam officiis harum, id ratione consectetur eos rerum repudiandae neque itaque atque quas voluptate.
                                </Typography>
                            </div>

                        </Card>
                    </div>
                    <div>
                        <Card className="flex flex-row gap-12 bg-white rounded-2xl flex p-6 mx-32 h-lg" shadow={false}>

                            <img src={lifestyle_img.src} alt="" className="rounded-2xl w-96 " />

                            <div className="flex flex-col">
                                <Typography variant="h4" className="mb-4">
                                    Beneficio 2
                                </Typography>

                                <Typography variant="paragraph">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cupiditate est, at exercitationem quia quas maxime accusantium nostrum numquam, eum id necessitatibus iure placeat rerum, dolores sed rem. Officiis, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid voluptatem dolor, tempore ipsum adipisci labore numquam officiis harum, id ratione consectetur eos rerum repudiandae neque itaque atque quas voluptate.
                                </Typography>
                            </div>

                        </Card>
                    </div>
                    <div>
                        <Card className="flex flex-row gap-12 bg-white rounded-2xl flex p-6 mx-32 h-lg" shadow={false}>

                            <img src={lifestyle_img.src} alt="" className="rounded-2xl w-96 " />

                            <div className="flex flex-col">
                                <Typography variant="h4" className="mb-4">
                                    Beneficio 3
                                </Typography>

                                <Typography variant="paragraph">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque cupiditate est, at exercitationem quia quas maxime accusantium nostrum numquam, eum id necessitatibus iure placeat rerum, dolores sed rem. Officiis, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa aliquid voluptatem dolor, tempore ipsum adipisci labore numquam officiis harum, id ratione consectetur eos rerum repudiandae neque itaque atque quas voluptate.
                                </Typography>
                            </div>

                        </Card>
                    </div>


                </Carousel>
            </div>



        </section>
    );
}