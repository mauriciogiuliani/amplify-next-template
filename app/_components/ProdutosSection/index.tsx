import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react"
import PDFViewerModal from "../MainSection/PDFViewer"
import TermoAdesaoModal from "./TermoAdesaoModal"
import { CheckCircleIcon } from "@heroicons/react/16/solid"
import { useState } from "react"
import { InformationCircleIcon } from "@heroicons/react/24/outline"

const ProdutosSection: React.FC = () => {

    const [termoAdesaoOpened, setTermoAdesaoOpened] = useState(false);
    const [saibaMais, setSaibaMais] = useState<boolean>(false);

    return (
        <>
            <PDFViewerModal
                title="Tarifa Convencional"
                fileUrl="demonstrativo.pdf"
                isOpen={saibaMais}
                handler={() => setSaibaMais(!saibaMais)}
            />

            <TermoAdesaoModal
                isOpen={termoAdesaoOpened}
                handler={() => setTermoAdesaoOpened(!termoAdesaoOpened)} />


            <section>
                <div className="container mx-auto py-12">

                    <div className=" mx-2 ">
                        <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none text-center lg:text-start mb-2">
                            Produtos
                        </Typography>

                        <Typography variant="paragraph" className="text-gray-500 text-xl  text-center lg:text-start">
                            PEDRO DE OLIVEIRA - CERTAJA - 36071
                        </Typography>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-center gap-8 mx-2 my-8">
                        {/* <div className="flex flex-col lg:flex-row gap-4"> */}

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
                                        Tarifa Convencional
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="font-normal !text-gray-500"
                                    >
                                        Nada muda. É a tarifa que você paga atualmente, ou seja você está satisfeito com a atual tarifa.
                                    </Typography>
                                </div>
                                <Typography
                                    variant="h3"
                                    color="blue-gray"
                                    className="!mt-4 flex gap-1 !text-4xl"
                                >
                                    R$ 271,73
                                    <Typography
                                        as="span"
                                        color="blue-gray"
                                        className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
                                    >
                                        /mês*
                                    </Typography>
                                </Typography>
                            </CardHeader>

                            <CardBody className="pt-0">

                                <div className="flex justify-center ">
                                    <Button className="bg-primary" size="sm" onClick={() => setSaibaMais(true)}>
                                        Saiba Mais
                                    </Button>

                                </div>

                                <ul className="flex flex-col gap-3 my-8">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <InformationCircleIcon className="h-5 text-primary" />
                                        <Typography
                                            variant="small"
                                            className="font-normal text-inherit"
                                        >
                                            Compra direto da distribuidora com preços regulados.

                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <InformationCircleIcon className="h-5 text-primary" />
                                        <Typography
                                            variant="small"
                                            className="font-normal text-inherit"
                                        >
                                            Sem alteração de preço.


                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <CheckCircleIcon className="h-8 text-primary" />
                                        <Typography
                                            variant="small"
                                            className="font-normal text-inherit"
                                        >
                                            Fonte de Energia Mista de acordo com os atuais contratos da distribuidora.
                                        </Typography>
                                    </li>

                                </ul>




                            </CardBody>
                            <CardFooter className="flex">
                                <Button
                                    className="text-white bg-primary "
                                    variant="filled"
                                    fullWidth
                                    disabled>
                                    Produto Atual
                                </Button>
                            </CardFooter>
                        </Card>



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
                                        Tarifa de Mercado
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="font-normal !text-gray-500"
                                    >
                                        Você paga pelo transporte da energia e pelos impostos relacionados à distribuidora de energia, que é responsável por levar a eletricidade até a sua casa.
                                    </Typography>
                                </div>

                                <Typography
                                    variant="h3"
                                    color="blue-gray"
                                    className="!mt-4 flex gap-1 !text-4xl"
                                >
                                    R$ 271,73
                                    <Typography
                                        as="span"
                                        color="blue-gray"
                                        className="-translate-y-0.5 self-end opacity-70 text-lg font-bold"
                                    >
                                        /mês*
                                    </Typography>
                                </Typography>
                            </CardHeader>
                            <CardBody className="pt-0">

                                <div className="flex justify-center ">
                                    <Button className="bg-primary" size="sm">
                                        Saiba Mais
                                    </Button>

                                </div>

                                <ul className="flex flex-col gap-3 my-8">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <InformationCircleIcon className="h-5 text-primary" />
                                        <Typography
                                            variant="small"
                                            className="font-normal text-inherit"
                                        >
                                            Compra direto da distribuidora com preços regulados.

                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <InformationCircleIcon className="h-5 text-primary" />
                                        <Typography
                                            variant="small"
                                            className="font-normal text-inherit"
                                        >
                                            Sem alteração de preço.


                                        </Typography>
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <CheckCircleIcon className="h-8 text-primary" />
                                        <Typography
                                            variant="small"
                                            className="font-normal text-inherit"
                                        >
                                            Fonte de Energia Mista de acordo com os atuais contratos da distribuidora.
                                        </Typography>
                                    </li>

                                </ul>




                            </CardBody>
                            <CardFooter className="flex">
                                <Button
                                    className="text-primary border-primary hover:bg-primary hover:text-white"
                                    variant="outlined"
                                    fullWidth
                                    onClick={() => { setTermoAdesaoOpened(true) }}
                                >
                                    Escolher Produto
                                </Button>
                            </CardFooter>
                        </Card>



                    </div>

                    <p className="text-sm text-gray-600 text-center">
                        *Valor aproximado para um consumo equivalente a 500 kWh médios mensais.
                        <br></br>
                        Não incluí taxas e demais encargos.

                    </p>
                </div>
            </section >
        </>
    )
}

export default ProdutosSection;