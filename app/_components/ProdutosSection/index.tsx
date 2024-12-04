import { Button, Tab, TabPanel, Tabs, TabsBody, TabsHeader, Typography } from "@material-tailwind/react"
import { useState } from "react"
import PDFViewerModal from "../MainSection/PDFViewer"
import ProdutoCard from "./ProdutoCard"
import TermoAdesaoModal from "./TermoAdesaoModal"
import { grupos_produtos_map, lista_produtos } from "./constants"
import { ChartBarSquareIcon, DocumentMagnifyingGlassIcon, InformationCircleIcon, ShoppingBagIcon, WalletIcon } from "@heroicons/react/24/outline"
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


            <TermoAdesaoModal
                isOpen={termoAdesaoOpened}
                handler={() => setTermoAdesaoOpened(!termoAdesaoOpened)} />


            <section>
                <div className="container mx-auto py-8">
                    <Typography variant="h3" className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none text-center lg:text-start mb-2">
                        Produtos
                    </Typography>


                    <div className="py-4">


                        <Tabs value="Escolher" >
                            <TabsHeader className="bg-gray-100" >

                                <Tab key="Escolher" value="Escolher">

                                    <div className="flex items-center gap-2 text-primary font-bold tracking-wide">
                                        <ShoppingBagIcon className="w-5 h-5" />
                                        Catálogo
                                    </div>

                                </Tab>
                                <Tab key="Detalhamento" value="Detalhamento">
                                    <div className="flex items-center gap-2 text-primary font-bold tracking-wide">
                                        <InformationCircleIcon className="w-5 h-5" />
                                        Detalhamento
                                    </div>
                                </Tab>
                                <Tab key="Extrato" value="Extrato">
                                    <div className="flex items-center gap-2 text-primary font-bold tracking-wide">
                                        <WalletIcon className="w-5 h-5" />
                                        Extrato
                                    </div>
                                </Tab>
                            </TabsHeader>
                            <TabsBody className="min-h-[80vh]">
                                <TabPanel key="Escolher" value="Escolher">
                                    {/* <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none text-center lg:text-start mb-2">
                                    Produtos
                                </Typography> */}
                                    <div className="flex flex-col lg:flex-row justify-center gap-8 mx-2 my-4">
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
                                </TabPanel>
                                <TabPanel key="Detalhamento" value="Detalhamento">
                                    <DetalhamentoDialog
                                        numeroUC={numeroUC}
                                        permissionaria={permissionaria}

                                    />
                                </TabPanel>
                                <TabPanel key="Extrato" value="Extrato">
                                    <Typography variant="h2" className="text-3xl font-bold tracking-tighter text-primary sm:text-5xl xl:text-6xl/none text-center lg:text-start mb-2">
                                        Extrato
                                    </Typography>
                                </TabPanel>
                            </TabsBody>

                        </Tabs>
                    </div>



                </div>
            </section >
        </>
    )
}

export default ProdutosSection;