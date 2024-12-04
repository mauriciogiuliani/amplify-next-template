"use client";

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogBody, DialogHeader, Spinner } from '@material-tailwind/react';

interface DetalhamentoDialog {
    numeroUC: string;
    permissionaria: string;
    isOpen: boolean;
    handler: () => void;
}

const DetalhamentoDialog: React.FC<DetalhamentoDialog> = ({ numeroUC, permissionaria, isOpen, handler }) => {

    const workerUrl = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js";

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;


    const [pdfUrl, setPdfUrl] = useState("");

    async function fetchPdf() {
        const response = await fetch(`/api/consumidor/detalhamento?permissionaria=${permissionaria}&uc=${numeroUC}`);
        const body = await response.json();
        setPdfUrl(body.pdfUrl);
    }

    useEffect(() => {
        fetchPdf();
    }, [pdfUrl])

    return (
        <Worker workerUrl={workerUrl}>
            <Dialog
                open={isOpen}
                size="lg"
                handler={(handler)}
            >
                <DialogHeader className="flex justify-center xl:p-6 text-primary ">
                    Detalhamento dos Produtos
                </DialogHeader>

                <DialogBody className="px-4 xl:px-8 pt-0 text-black xs:h-[75vh] text-sm xl:text-base ">

                    {!pdfUrl ? (
                        <div className="flex items-center justify-center min-h-96">
                            <Spinner
                                className="h-16 w-16"
                                color="teal"
                            />
                        </div>)
                        : (
                            <>
                                <div tabIndex={0} className='mx-auto  w-full border border-gray-200 bg-gray-50 rounded  '>
                                    <div className='flex justify-center py-1 px-6 rounded'>
                                        <div className='flex align-center'>
                                            <ZoomOutButton />
                                            <ZoomPopover />
                                            <ZoomInButton />
                                        </div>

                                    </div>

                                    <Viewer fileUrl={pdfUrl}
                                        plugins={[zoomPluginInstance, getFilePluginInstance]}
                                        defaultScale={SpecialZoomLevel.PageWidth}

                                    />
                                </div>

                                <div className="flex justify-center gap-4 mx-4 xl:mx-32 mb-4 pt-6 xl:pt-8  ">
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
                                        size="sm"
                                        fullWidth
                                    >
                                        BAIXAR
                                    </Button>
                                </div>
                            </>
                        )}






                </DialogBody>

            </Dialog>

        </Worker >

    );
};

export default DetalhamentoDialog;