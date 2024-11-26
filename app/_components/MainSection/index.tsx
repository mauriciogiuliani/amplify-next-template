"use client";

import { useState } from "react";
import { CheckCircleIcon, EyeIcon, EyeSlashIcon, MinusCircleIcon } from "@heroicons/react/24/solid";
import { Button, Card, CardBody, CardFooter, CardHeader, Dialog, DialogBody, DialogFooter, DialogHeader, Drawer, IconButton, Input, Option, Select, Spinner, Typography } from "@material-tailwind/react";

import { type Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { useAlert } from "@/app/_layout/AlertMessage/AlertContext";

import background_img from "@/images/login_form_background_02.jpg"
import { InformationCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import PDFViewer from "./PDFViewer";
import PDFViewerModal from "./PDFViewer";
import TermoAdesaoModal from "../ProdutosSection/TermoAdesaoModal";


// import pdfUrl from "@/c:\Users\Mauricio_Giuliani\OneDrive - Dell Technologies\Mauricio\#Personal\__SIAD\Demonstrativo_modelo CERTAJA ML2.pdf"
const MainSection: React.FC = () => {
    const [numeroUC, setNumeroUC] = useState("");
    const [permissionaria, setPermissionaria] = useState("");
    const [chaveAcesso, setChaveAcesso] = useState("");

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const client = generateClient<Schema>();

    const { showAlert } = useAlert();



    const [loading, setLoading] = useState(false);

    const [grupo, setGrupo] = useState<string>("");
    const [saibaMais, setSaibaMais] = useState<boolean>(false);


    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        setLoading(true)

        // Validate form fields
        if (!numeroUC || !permissionaria || !chaveAcesso) {
            showAlert("Preencha todos os campos!");
            return;
        }

        const consumidor = await client.models.Consumidor.list({
            filter: {
                and: [
                    { numero_uc: { eq: numeroUC } },
                    { chave_acesso: { eq: chaveAcesso } },
                    { permissionaria: { eq: permissionaria } }
                ]
            }
        })

        if (consumidor.data.length > 0) {
            showAlert("Consumidor já cadastrado!");
            setGrupo("teste")
        } else {
            showAlert("Consumidor não encontrado, verifique os dados e tente novamente!");
        }

        setLoading(false)
    }


    const handleOpen = () => setSaibaMais(!saibaMais);

    const [termoAdesaoOpened, setTermoAdesaoOpened] = useState(false);

    return (
        <>

        <PDFViewerModal title="Tarifa Convencional" fileUrl="demonstrativo.pdf" isOpen={saibaMais} handler={handleOpen} />

        <TermoAdesaoModal isOpen={termoAdesaoOpened} handler={() => setTermoAdesaoOpened(!termoAdesaoOpened)}  />

            {true && (
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

                            {/* <Card className="max-w-md  shadow-sm border border-slate-200 rounded-lg w-full"
                                variant="gradient" color="white">
                                <CardHeader
                                    floated={false}
                                    shadow={false}
                                    color="transparent"
                                    className="!m-0 p-6"
                                >
                                    <Typography
                                        variant="h6"
                                        color="blue-gray"
                                        className="capitalize font-bold mb-1 uppercase"
                                    >
                                        TARIFA DE MERCADO
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="font-normal !text-gray-500"
                                    >
                                        Esse produto é ideal se você está buscando uma redução na sua conta de energia, apenas usando a liberdade de escolha.

                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        color="blue-gray"
                                        className="!mt-4 flex gap-1 !text-4xl"
                                    >
                                        R$ 240,71
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

                                    <div className="flex justify-center mb-6">
                                        <Button className="bg-secondary" size="sm">
                                            Saiba Mais
                                        </Button>

                                    </div>

                                    <Card className="bg-gray-100/50 text-center  rounded-2xl p-2" shadow={false}>

                                        <CardHeader className="text-primary"
                                            color="transparent"
                                            floated={false}
                                            shadow={false}
                                        >
                                            <Typography variant="small"
                                                className="font-normal text-inherit">
                                               Você paga o transporte e encargos  para a distribuidora e compra a energia da comercializadora vinculada à cooperativa.
                                            </Typography>

                                        </CardHeader>
                                    </Card>

                                    <ul className="flex flex-col gap-3 my-8">


                                        <li  className="flex items-center gap-3 text-gray-700">
                                            <CheckCircleIcon className="h-5 text-primary" />
                                            <Typography
                                                variant="small"
                                                className="font-normal text-inherit"
                                            >
                                                Fonte de energia mista.
                                            </Typography>
                                        </li>

                                        <li  className="flex items-center gap-3 text-gray-700">
                                            <CheckCircleIcon className="h-5 text-primary" />
                                            <Typography
                                                variant="small"
                                                className="font-normal text-inherit"
                                            >
                                                Custo de Energia Gerada 30% mais barata.
                                            </Typography>
                                        </li>


                                        <li  className="flex items-center gap-3 text-gray-700">
                                            <CheckCircleIcon className="h-5 text-primary" />
                                            <Typography
                                                variant="small"
                                                className="font-normal text-inherit"
                                            >
                                                Sem fidelidade.
                                            </Typography>
                                        </li>


                                    </ul>




                                </CardBody>
                                <CardFooter className="">
                                    <Button
                                        className="text-primary border-primary hover:bg-primary hover:text-white"
                                        variant="outlined"
                                        fullWidth
                                    >
                                        Excolher Produto
                                    </Button>
                                </CardFooter>
                            </Card> */}



                        </div>
                    </div>
                </section >
            )}

            <section
                className="bg-[url('/images/background/main.jpg')] bg-cover  px-4 2xl:px-32 py-12 lg:py-24 ">
                {/* min-h-[45rem] */}
                <div className="container mx-auto">


                    <div className="grid gap-2 2xl:gap-24 lg:grid-cols-2 items-center w-full ">

                        <div className="space-y-4 mx-2 ">
                            <Typography variant="h1" className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none text-center lg:text-start">
                                Projeto de Adesão ao Mercado Livre de Energia
                            </Typography>

                            <Typography variant="paragraph" className="text-secondary text-xl  text-center lg:text-start">
                                Descubra como o mercado livre pode revolucionar sua conta de energia,
                                oferecendo a liberdade de escolher seu fornecedor e a oportunidade de reduzir seus custos de maneira significativa.
                            </Typography>
                        </div>


                        <div className="mx-2 ">
                            <div className="flex flex-col bg-gray-100 shadow-sm border border-slate-200 rounded-lg w-full my-8  ">

                                <div className="grid text-center items-center px-4 py-10">

                                    {loading ? (
                                        <div className="flex items-center justify-center min-h-96">
                                            <Spinner
                                                className="h-16 w-16"
                                                color="teal"
                                            />
                                        </div>
                                    ) : (
                                        <form
                                            className="mx-auto max-w-[24rem] text-left"
                                            onSubmit={handleFormSubmit}
                                        >
                                            <div className="mb-4">
                                                <Typography variant="paragraph" className="text-xl text-primary md:text-xl mb-8 text-center">
                                                    Faça parte dessa revolução energética!
                                                </Typography>

                                                <label htmlFor="numero_uc">
                                                    <Typography
                                                        variant="small"
                                                        className="mb-2 block font-bold text-gray-900">
                                                        Número da UC
                                                    </Typography>
                                                </label>

                                                <Input
                                                    id="numero_uc"
                                                    name="numero_uc"
                                                    size="lg"
                                                    crossOrigin={"anonymous"}
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    labelProps={{
                                                        className: "before:content-none after:content-none hidden",
                                                    }}
                                                    onChange={(e) => setNumeroUC(e.target.value)}
                                                    value={numeroUC}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-4">


                                                <label htmlFor="cooperativa_select">
                                                    <Typography
                                                        variant="small"
                                                        className="mb-2 block font-bold text-gray-900"
                                                    >
                                                        Selecione a Cooperativa
                                                    </Typography>
                                                </label>

                                                <Select
                                                    id="cooperativa_select"
                                                    size="lg"
                                                    className=" !border-blue-gray-200 focus:!border-gray-900"
                                                    labelProps={{
                                                        className: "before:content-none after:content-none hidden",
                                                    }}
                                                    onChange={(e) => setPermissionaria(e ? e : "")}
                                                    value={permissionaria}
                                                >
                                                    <Option value="CERBRANORTE">CERBRANORTE</Option>
                                                    <Option value="CERTAJA">CERTAJA</Option>
                                                    <Option value="CERTEL">CERTEL</Option>
                                                    <Option value="COPREL">COPREL</Option>
                                                </Select>

                                            </div>


                                            <div className="mb-6">

                                                <label htmlFor="password">
                                                    <Typography
                                                        variant="small"
                                                        className="mb-2 block font-bold text-gray-900"
                                                    >
                                                        Senha (4 primeiros dígitos do seu CPF/CNPJ)
                                                    </Typography>
                                                </label>

                                                <Input
                                                    size="lg"
                                                    placeholder="********"
                                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                    labelProps={{
                                                        className: "before:content-none after:content-none hidden",
                                                    }}
                                                    type={passwordShown ? "text" : "password"}
                                                    icon={
                                                        <i onClick={togglePasswordVisiblity}>
                                                            {passwordShown ? (
                                                                <EyeIcon className="h-5 w-5" />
                                                            ) : (
                                                                <EyeSlashIcon className="h-5 w-5" />
                                                            )}
                                                        </i>
                                                    }
                                                    crossOrigin={"anonymous"}
                                                    onChange={(e) => setChaveAcesso(e.target.value)}
                                                    value={chaveAcesso}
                                                />

                                            </div>

                                            <Button
                                                className="bg-primary mt-6"
                                                size="lg"
                                                fullWidth
                                                type="submit"
                                            >
                                                Ver Opções
                                            </Button>


                                        </form>
                                    )}



                                </div>
                            </div>
                        </div>
                    </div>







                </div>


            </section >
        </>
    )
}

export default MainSection;