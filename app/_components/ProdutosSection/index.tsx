import { Button, Typography } from "@material-tailwind/react"
import { useState } from "react"
import PDFViewerModal from "../MainSection/PDFViewer"
import ProdutoCard from "./ProdutoCard"
import TermoAdesaoModal from "./TermoAdesaoModal"
import { grupos_produtos_map, lista_produtos } from "./constants"
import { ChartBarSquareIcon, DocumentMagnifyingGlassIcon, InformationCircleIcon, WalletIcon } from "@heroicons/react/24/outline"



const ProdutosSection: React.FC = () => {

    const [termoAdesaoOpened, setTermoAdesaoOpened] = useState(false);
    const [saibaMais, setSaibaMais] = useState<boolean>(false);

    const produtos = lista_produtos.filter((produto) => grupos_produtos_map.get("E3")?.includes(produto.id))
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

                    <div className="flex flex-col lg:flex-row justify-between mx-2 gap-4 ">
                        <div>
                            <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none text-center lg:text-start mb-2">
                                Produtos
                            </Typography>

                            <Typography variant="paragraph" className="text-gray-500 text-xl  text-center lg:text-start">
                                PEDRO DE OLIVEIRA - CERTAJA - 36071
                            </Typography>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <Button
                                className="flex justify-center items-center gap-2 text-white bg-primary"
                                variant="filled"

                            // onClick={() => { setTermoAdesaoOpened(true) }}
                            >
                                <WalletIcon className="w-5 h-5" />
                                VER EXTRATO
                            </Button>

                            <Button
                                className="flex justify-center items-center gap-2 text-white bg-primary"
                                variant="filled"
                                onClick={() => { setSaibaMais(true) }}
                            >
                                <InformationCircleIcon className="w-5 h-5" />
                                COMPARAR PRODUTOS
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
                                        selected={produto.selected}
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