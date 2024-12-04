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
}

const DetalhamentoDialog: React.FC<DetalhamentoDialog> = ({ numeroUC, permissionaria }) => {

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
            {!pdfUrl ? (
                <div className="flex items-center justify-center min-h-96">
                    <Spinner
                        className="h-16 w-16"
                        color="teal"
                    />
                </div>)
                : (
                    <>
                        <div tabIndex={0} className='mx-auto  w-full border border-gray-200 bg-gray-50 rounded '>
                            <div className='flex justify-center pt-2 px-6 rounded '>
                                <div className='flex align-center'>
                                    <ZoomOutButton />
                                    <ZoomPopover />
                                    <ZoomInButton />
                                    <Download />
                                </div>

                            </div>

                            <Viewer fileUrl={pdfUrl}
                                plugins={[zoomPluginInstance, getFilePluginInstance]}
                                defaultScale={SpecialZoomLevel.ActualSize}
                    
                            />
                        </div>

                      
                    </>
                )}
        </Worker >

    );
};

export default DetalhamentoDialog;