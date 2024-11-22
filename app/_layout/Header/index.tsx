'use client'

import {
  Alert,
  Collapse,
  IconButton,
  Navbar,
  Typography
} from "@material-tailwind/react";
import React, { use, useEffect, useState } from "react";

import sipam_v2 from "@/images/logo/sipam_v2.jpg";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAlert } from "../AlertMessage/AlertContext";



function NavList() {
  return (
    <ul className="my-6 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a href="#projeto">
        <Typography className="text-primary font-bold tracking-wide m-r-4 ">
          O PROJETO
        </Typography>

      </a>
      <a href="#beneficios">
        <Typography className="text-primary font-bold tracking-wide m-r-4">
          BENEFÍCIOS
        </Typography>

      </a>
      <a href="#duvidas">
        <Typography className="text-primary font-bold tracking-wide m-r-4">
          DÚVIDAS FREQUENTES
        </Typography>

      </a>

      <a href="#fale_conosco">
        <Typography className="text-primary font-bold tracking-wide">
          FALE CONOSCO
        </Typography>

      </a>
    </ul>
  );
}




export function NavbarSimple() {


  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    console.log("AA")
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);


  // const [open, setOpen] = useState(false);
  const { alertMessage, setAlertMessage } = useAlert();


  return (

    <>
      <Navbar className=""
        fullWidth
      >
        <div className="flex items-center justify-between text-blue-gray-100 px-2 lg:px-16">

          <img src={sipam_v2.src} alt="" className="h-14 lg:h-18" />
          <div className="hidden lg:block">
            <NavList />
          </div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-primary"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
        <Collapse open={openNav}>
          <NavList />
        </Collapse>
      </Navbar>


      <Alert className="rounded-none"
        variant="ghost"
        open={alertMessage ? true : false}
        onClose={() => setAlertMessage("")}
        color="red"

      >
        {alertMessage}
      </Alert>

    </>
  );
}