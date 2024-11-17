"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Option, Select, Spinner, Typography } from "@material-tailwind/react";

import { type Schema } from '@/amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import { useAlert } from "@/app/_layout/AlertMessage/AlertContext";


const MainSection: React.FC = () => {
    const [numeroUC, setNumeroUC] = useState("");
    const [permissionaria, setPermissionaria] = useState("");
    const [chaveAcesso, setChaveAcesso] = useState("");

    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    const client = generateClient<Schema>();

    const { showAlert } = useAlert();



    const [loading, setLoading] = useState(false);


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
        } else {
            showAlert("Consumidor não encontrado, verifique os dados e tente novamente!");
        }

        setLoading(false)
    }


    return (

        <section className="bg-primary container px-4 2xl:px-32 py-12 lg:py-24 max-w-full hero-image">

            <div className="container mx-auto">
                <div className="grid gap-2 2xl:gap-24 lg:grid-cols-2 items-center w-full ">

                    <div className="space-y-4 mx-2 ">
                        <Typography variant="h1" className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none text-center lg:text-start">
                            Projeto de Adesão ao Mercado Livre de Energia
                        </Typography>

                        <Typography variant="paragraph" className="text-secondary text-xl  text-center lg:text-start">
                            Descubra como o mercado livre pode transformar sua conta de energia e desfrute da liberdade de escolher seu fornecedor com a possibilidade de reduzir seus custos com energia
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
                                                    className="mb-2 block font-medium text-gray-900">
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
                                                    className="mb-2 block font-medium text-gray-900"
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
                                                    className="mb-2 block font-medium text-gray-900"
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
    )
}

export default MainSection;