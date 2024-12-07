import { Button, Dialog, DialogBody, DialogHeader, Radio } from "@material-tailwind/react";
import { FC, useState } from "react";
import TermoAdesaoML1 from "./ML1";

interface TermoAdesaoProps {
    isOpen: boolean;
    handler: () => void;
}
const TermoAdesao: FC<TermoAdesaoProps> = ({ isOpen, handler }) => {
    const [aceito, setAceito] = useState(false)

    

    return (
        <Dialog
            open={isOpen}
            size="lg"
            handler={(handler)}
        >

            <DialogHeader className="flex justify-center xl:p-6 text-primary ">
                Termo de Adesão

                {/* <Button
                    variant="text"
                    onClick={(handler)}
                    className="flex items-center gap-1  bg-white text-primary"

                >
                    <XMarkIcon strokeWidth={2} className="h-5 w-5" />

                </Button> */}
            </DialogHeader>

            <DialogBody className="px-4 xl:px-8 pt-0 text-black  xs:h-[75vh] text-sm xl:text-base ">

                    <TermoAdesaoML1 />

                <div className="mx-auto py-6 gap-4 flex flex-col items-center ">
                    <p className="font-semibold text-primary text-center ">
                        Você aceita participar do projeto e receber mensagens de cunho publicitário enviadas pela COOPERATIVA PERMISSIONÁRIA sobre o projeto?
                    </p>

                    <div  className="text-sm xl:text-base">
                    <Radio
                            // className="text-primary"
                            label="NÃO ACEITO"
                            name="type"
                            crossOrigin={undefined}
                            onChange={() => setAceito(false)}
                            checked={!aceito}
                        />
                        <Radio
                            // className="text-sm xl:text-base"
                            label="ACEITO"
                            name="type"
                            crossOrigin={undefined}
                            onChange={() => setAceito(true)}
                            checked={aceito}
                        />

                        
                    </div>

                </div>


                <div className="flex justify-center gap-4 mx-4 xl:mx-36 mb-4  ">
                    <Button
                        className="border-primary bg-white text-primary  "
                        variant="outlined"
                        onClick={handler}
                        size="sm"
                        fullWidth
                    >
                        Fechar
                    </Button>
                    <Button
                        className="border-primary bg-primary text-white "
                        variant="filled"
                        disabled={!aceito}
                        size="sm"
                        fullWidth
                    >
                        ENVIAR
                    </Button>
                </div>
            </DialogBody>

            {/* <DialogFooter className="justify-center" >
                <div className="px-12">
                    <Radio
                        label="ACEITO participar do projeto e receber mensagens de cunho publicitário enviadas pela COOPERATIVA PERMISSIONÁRIA sobre o projeto. "
                        name="type"
                        crossOrigin={undefined}
                    />

                    <Radio
                        label="NÃO ACEITO participar do projeto receber mensagens de cunho publicitário enviadas pela COOPERATIVA PERMISSIONÁRIA sobre o projeto."
                        name="type"
                        crossOrigin={undefined}
                    />
                </div>


                <div className="flex gap-4 my-6 ">
                    <Button
                        className="border-primary bg-white text-primary"
                        variant="outlined"
                        onClick={handler}
                    >
                        Fechar
                    </Button>
                    <Button
                        className="border-primary bg-primary text-white"
                        variant="filled"

                    >
                        ENVIAR
                    </Button>
                </div>

            </DialogFooter> */}
        </Dialog>
    );
};

export default TermoAdesao;