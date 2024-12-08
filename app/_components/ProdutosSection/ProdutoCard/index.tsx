
import { ArrowTopRightOnSquareIcon, CheckBadgeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";

import { useState } from "react";
import TermoAdesao from "./TermoAdesao";

export interface ProdutoCardProps {
    title: string
    description: string
    price: string
    bullets: string[]
    selected?: boolean
}

const ProdutoCard: React.FC<ProdutoCardProps> = ({ title, description, price, bullets, selected }) => {

    const [termoAdesaoOpened, setTermoAdesaoOpened] = useState(false);

    return (
        <>

            <Card className="max-w-md shadow-sm border border-slate-200 rounded-lg w-full"
                variant="gradient" color="white">
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="!m-0 p-6"
                >
                    <div className="min-h-[6rem]">
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="capitalize font-bold mb-1 uppercase"
                        >
                            {title}
                        </Typography>
                        <Typography
                            variant="small"
                            className="font-normal !text-gray-500"
                        >

                            {description}

                        </Typography>
                    </div>
                </CardHeader>



                <CardBody className="pt-0">
                    <div className="flex justify-center pb-4">
                        <Button className="flex justify-center items-center gap-2 bg-white text-primary border-primary"
                            size="sm"
                            variant="outlined"

                        >
                            Saiba Mais
                            <ArrowTopRightOnSquareIcon className="h-4 min-w-4" />
                        </Button>
                    </div>


                    <Typography
                        variant="h3"
                        color="blue-gray"
                        className="!mt-4 flex gap-1 !text-4xl"
                    >
                        R$ {price}
                        <Typography
                            as="span"
                            color="blue-gray"
                            className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
                        >
                            /mês*
                        </Typography>
                    </Typography>

                    <ul className="flex flex-col gap-4 my-8 min-h-36">
                        {
                            bullets.map((bullet, index) => (
                                <li key={index} className="flex items-start gap-3 text-gray-700 ">
                                    <CheckCircleIcon className="h-5 min-w-5 text-primary" />
                                    <Typography
                                        variant="small"
                                        className="font-normal text-inherit"
                                    >
                                        {bullet}
                                    </Typography>
                                </li>
                            ))
                        }



                    </ul>
                </CardBody>
                <CardFooter className="flex justify-center gap-4">
                    {selected ? (
                        <Button
                            className="flex justify-center items-center gap-2 text-primary bg-secondary border-secondary "
                            variant="outlined"
                            size="sm"
                            disabled
                            fullWidth
                        >
                            <CheckBadgeIcon className="h-5 min-w-5" />
                            Produto Atual
                        </Button>

                    ) : (
                        <Button
                            className="flex justify-center items-center gap-2  text-white bg-primary border-primary"
                            variant="filled"
                            size="sm"
                            fullWidth
                            onClick={() => { setTermoAdesaoOpened(true) }}
                        >
                            <CheckCircleIcon className="h-5 min-w-5" />
                            Escolher Produto
                        </Button>
                    )}

                </CardFooter>
            </Card>


            <TermoAdesao handler={() => setTermoAdesaoOpened(!termoAdesaoOpened)} isOpen={termoAdesaoOpened} />
        </>


    )
}

export default ProdutoCard;