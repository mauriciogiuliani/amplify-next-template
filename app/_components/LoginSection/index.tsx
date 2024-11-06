"use client";
import { useState } from "react";

import { Typography, Input, Button, Select, Option } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const LoginSection: React.FC = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    return (
        <section className="bg-primary">
            <div className="container mx-auto">
                <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-24">



                    <div className="flex flex-col w-full text-center items-center justify-center p-10">

                        <Typography  className="text-2xl text-white mb-4">
                            Faça parte dessa revolução energética!
                        </Typography>
                        <Typography className="text-2xl text-white mb-4">
                            Descubra neste projeto experimental como o Mercado Livre de Energia pode transformar sua conta de energia.
                        </Typography>

                        <Typography className="text-2xl text-secondary">
                            Desfrute da liberdade de escolher seu fornecedor de energia com possibilidade de reduzir seus custos com energia.
                        </Typography>
                    </div>

                    <div className="flex flex-col bg-gray-100 shadow-sm border border-slate-200 rounded-lg w-full my-12">
                        <div className="grid text-center items-center py-16">

                            <Typography className="text-3xl font-bold text-black mb-4">
                                Sistema de Adesão ao Projeto <br></br>Mercado Livre de Energia
                            </Typography>



                            <form action="#" className="mx-auto max-w-[24rem] text-left">
                                <div className="my-4">
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

                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        crossOrigin={"anonymous"}

                                    />
                                </div>
                                <div className="mb-4">
                                    <div className="w-72">
                                        <label htmlFor="cooperativa_select">
                                            <Typography
                                                variant="small"
                                                className="mb-2 block font-medium text-gray-900"
                                            >
                                                Selecione a Cooperativa
                                            </Typography>
                                        </label>

                                        <Select id="cooperativa_select"
                                            size="lg">
                                            <Option>Material Tailwind HTML</Option>
                                            <Option>Material Tailwind React</Option>
                                            <Option>Material Tailwind Vue</Option>
                                            <Option>Material Tailwind Angular</Option>
                                            <Option>Material Tailwind Svelte</Option>
                                        </Select>
                                    </div>
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
                                        labelProps={{
                                            className: "hidden",
                                        }}
                                        className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
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
                                    />
                                </div>
                                <Button size="lg" className="bg-primary mt-6" fullWidth>
                                    Ver Opções
                                </Button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </section >
    )
}

export default LoginSection;