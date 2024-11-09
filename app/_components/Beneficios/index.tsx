import { Carousel, Typography, Button } from "@material-tailwind/react";

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

                <Carousel className="rounded-xl h-full xl:py-12">

                    <div className="container mx-auto h-96">
                     
                    </div>
                    <div>
                        b
                    </div>
                    <div>
                        c
                    </div>


                </Carousel>
            </div>



        </section>
    );
}