'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <a href="#buttons-with-link">
        <Typography className="text-white font-bold tracking-wide m-r-4">
          O PROJETO
        </Typography>
        
      </a>
      <a href="#buttons-with-link">
        <Typography className="text-white font-bold tracking-wide m-r-4">
          BENEFICIOS
        </Typography>
        
      </a>
      <a href="#buttons-with-link">
        <Typography className="text-white font-bold tracking-wide m-r-4">
          DUVIDAS
        </Typography>
        
      </a>
      
      <a href="#buttons-with-link">
        <Typography className="text-white font-bold tracking-wide">
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
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (


    <Navbar className="bg-primary xl:py-6 "
      shadow={false}
      fullWidth={true}
      blurred={false}
    >
      <div className="flex items-center justify-end text-blue-gray-100 px-2 lg:px-16">

        <div className="hidden lg:block">
          <NavList />
        </div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
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
  );
}