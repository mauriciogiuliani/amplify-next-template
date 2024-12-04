import { Button, Typography } from "@material-tailwind/react"
import { useState } from "react"
import PDFViewerModal from "../MainSection/PDFViewer"
import ProdutoCard from "./ProdutoCard"
import TermoAdesaoModal from "./TermoAdesaoModal"
import { grupos_produtos_map, lista_produtos } from "./constants"
import { ChartBarSquareIcon, DocumentMagnifyingGlassIcon, InformationCircleIcon, WalletIcon } from "@heroicons/react/24/outline"
import { useAuth } from "@/app/auth.context"
import DetalhamentoDialog from "./DetalhamentoDialog"


export interface ProdutosSectionProps {
    numeroUC: string,
    permissionaria: string,
    nome: string,
    produtoSelecionado: string
    grupo: string
}

const ProdutosSection: React.FC<ProdutosSectionProps> = ({ numeroUC, permissionaria, nome, produtoSelecionado, grupo }) => {

    const [detalhamentoOpened, setDetalhamentoOpened] = useState(false)
    const [termoAdesaoOpened, setTermoAdesaoOpened] = useState(false);




    // const produtos = lista_produtos.filter((produto) => grupos_produtos_map.get("E3")?.includes(produto.id))
    const produtos = lista_produtos.filter((produto) => grupos_produtos_map.get(grupo)?.includes(produto.id))


    return (
        <>
            <DetalhamentoDialog
                numeroUC={numeroUC}
                permissionaria={permissionaria}
                isOpen={detalhamentoOpened}
                handler={() => setDetalhamentoOpened(!detalhamentoOpened)}

            />

            <TermoAdesaoModal
                isOpen={termoAdesaoOpened}
                handler={() => setTermoAdesaoOpened(!termoAdesaoOpened)} />


            <section>
                <div className="container mx-auto py-12">

                    <div className="flex flex-col lg:flex-row justify-between mx-2 gap-4 ">
                        <div>
                            <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none text-center lg:text-start mb-2">
                                Produtos
                            </Typography>

                            <Typography variant="paragraph" className="text-gray-500 text-xl  text-center lg:text-start">
                                {nome.toUpperCase()} - {permissionaria.toUpperCase()} - {numeroUC}
                            </Typography>
                        </div>

                        <div className="flex items-center justify-center gap-4">

                            <Button
                                className="flex justify-center items-center gap-2 text-primary border-primary"
                                variant="outlined"
                            onClick={() => { setDetalhamentoOpened(true) }}
                            >
                                <InformationCircleIcon className="w-5 h-5" />
                                DETALHAMENTO
                            </Button>

                            <Button
                                className="flex justify-center items-center gap-2 text-white bg-primary"
                                variant="filled"

                            // onClick={() => { setTermoAdesaoOpened(true) }}
                            >
                                <WalletIcon className="w-5 h-5" />
                                VER EXTRATO
                            </Button>

                            {/* <Button
                                className="text-primary border-primary hover:bg-primary hover:text-white"
                                variant="outlined"
                                
                            // onClick={() => { setTermoAdesaoOpened(true) }}
                            >
                                Compare
                            </Button> */}
                        </div>

                    </div>

                    <div className="flex flex-col lg:flex-row justify-center gap-8 mx-2 my-8">
                        {
                            produtos
                                .map((produto) => (
                                    <ProdutoCard
                                        key={produto.id}
                                        title={produto.title}
                                        description={produto.description}
                                        price={produto.price}
                                        bullets={produto.bullets}
                                        selected={produto.id == produtoSelecionado}
                                    />
                                ))
                        }
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