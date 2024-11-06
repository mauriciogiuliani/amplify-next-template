import { Typography } from "@material-tailwind/react";
import { AccordionCustomIcon } from "../Accordion";

export function DuvidasSection() {
    return (
        <section className="bg-gray-100 py-16">

            <div className="container mx-auto ">
                <Typography className="text-3xl font-bold text-black mb-8 text-center">
                    DUVIDAS FREQUENTES
                </Typography>
                <AccordionCustomIcon />
            </div>
        </section>
    )
}