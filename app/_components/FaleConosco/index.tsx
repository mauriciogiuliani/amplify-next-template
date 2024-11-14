import { Carousel, Typography, Button, Card } from "@material-tailwind/react";
import lifestyle_img from "@/images/lifestyle.jpg";

export function FaleConosco() {
    return (
        <section className="bg-primary px-8 py-12 lg:py-32">
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


            </div>



        </section>
    );
}