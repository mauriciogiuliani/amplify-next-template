"use client";
import { useState } from "react";

import { Typography, Input, Button, Select, Option } from "@material-tailwind/react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";

const LoginSection: React.FC = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

    return (
        <section className="bg-primary container px-4 2xl:px-32 py-6 lg:pb-24 max-w-full">
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
                            <form action="#" className="mx-auto max-w-[24rem] text-left">
                                <div className="">
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