'use client'

import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        className="p-1 font-medium  text-secondary"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          DÚVIDAS FREQUENTES
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-medium  text-secondary"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          BENEFÍCIOS
        </a>
      </Typography>
      <Typography
        as="li"
        className="p-1 font-medium  text-secondary"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          O PROJETO
        </a>
      </Typography>

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


    <Navbar className="bg-primary px-6 py-3"
      shadow={false}
      fullWidth={true}
      blurred={false}
    >
      <div className="flex items-center justify-center text-blue-gray-100">

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