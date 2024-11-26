"use client";

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/zoom/lib/styles/index.css';


import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import { getFilePlugin, RenderDownloadProps } from '@react-pdf-viewer/get-file';
import React, { useState } from 'react';
import { Button, Dialog, DialogBody, DialogHeader } from '@material-tailwind/react';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

interface PDFViewerModal {
    title: string;
    fileUrl: string;
    isOpen: boolean;
    handler: () => void;
}

const PDFViewerModal: React.FC<PDFViewerModal> = ({ title, fileUrl, isOpen, handler }) => {



    const workerUrl = "https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js";

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

    const getFilePluginInstance = getFilePlugin();
    const { Download } = getFilePluginInstance;

    return (
        <Worker workerUrl={workerUrl}>
            <Dialog
                open={isOpen}
                size="xl"
                handler={(handler)}
            >
                <DialogHeader className="flex justify-between px-2 xl:p-6">
                    {title}

                    <div className='flex align-center'>

    {/* 
                            <Download >
                                {(props: RenderDownloadProps) => (
                                    <Button variant="text" className='flex items-center gap-1 text-primary'
                                        onClick={props.onClick}
                                    >
                                        DOWNLOAD
                                        <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />
                                        
                                    </Button>
                                )}
                            </Download> */}

                        <Button
                            variant="text"
                            color="red"
                            onClick={(handler)}
                            className="flex items-center gap-1 "
                        >
                            {/* FECHAR */}
                            <XMarkIcon strokeWidth={2} className="h-5 w-5" />

                        </Button>
                    </div>

                </DialogHeader>

                <DialogBody className="flex  h-[50rem] overflow-y-auto">

                    <div className='flex flex-col h-5/6 lg:h-fit w-full border-2 border-gray-300'>

                        <div className='flex justify-center py-1 px-6 border-b border-gray-200 bg-gray-100'>
                            <div className='flex align-center'>
                                <ZoomOutButton />
                                <ZoomPopover />
                                <ZoomInButton />
                            </div>

                        </div>

                        <Viewer fileUrl={fileUrl}
                            plugins={[zoomPluginInstance, getFilePluginInstance]}
                            defaultScale={SpecialZoomLevel.PageWidth} 
                            
                            />
                    </div>

                </DialogBody>

            </Dialog>

        </Worker >

    );
};

export default PDFViewerModal;