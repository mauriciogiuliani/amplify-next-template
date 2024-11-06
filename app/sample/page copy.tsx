import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Component() {
    return (
        <main>
            <div className="flex min-h-screen">
                <div className="w-1/2 bg-[#1B584D] p-8 flex flex-col justify-center items-center text-center text-white">
                    <h1 className="text-3xl sm:text-4xl font-bold mb-6 max-w-xl">
                        SiAd - Sistema de Adesão ao Projeto Mercado Livre
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                        Faça parte dessa revolução energética
                    </h2>
                    <p className="text-base sm:text-lg mb-4 max-w-lg">
                        Descubra neste projeto experimental como o Mercado Livre de Energia pode
                        transformar sua conta de energia
                    </p>
                    <p className="text-base sm:text-lg text-[#90EE90] max-w-lg">
                        Desfrute da liberdade de escolher seu fornecedor de energia com
                        possibilidade de reduzir seus custos com energia.
                    </p>
                </div>
                <div className="w-1/2 bg-white p-8 flex flex-col justify-center">
                    <div className="max-w-md mx-auto w-full space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="uc" className="text-lg font-medium">
                                Entre com N° UC
                            </label>
                            <Input id="uc" className="h-12" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-lg font-medium">
                                Selecione a Cooperativa da qual você é cliente:
                            </label>
                            <Select>
                                <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Selecione uma cooperativa" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="coop1">Cooperativa 1</SelectItem>
                                    <SelectItem value="coop2">Cooperativa 2</SelectItem>
                                    <SelectItem value="coop3">Cooperativa 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="cpf" className="text-lg font-medium">
                                Entre com sua senha –4 primeiros dígitos do seu CPF/CNPJ
                            </label>
                            <Input id="cpf" type="password" maxLength={4} className="h-12" />
                        </div>
                        <Button className="w-full h-12 text-lg bg-[#1a237e] hover:bg-[#1a237e]/90">
                            Ver Opções
                        </Button>
                    </div>
                </div>
            </div>
        </main>

    )
}