import { Typography } from "@material-tailwind/react";
 
export function SimpleFooter() {
  return (
    <footer 
    className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-center bg-primary md:px-12">
      
      
      
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            className="transition-colors text-white hover:text-secondary focus:text-secondary font-normal tracking-wide "
          >
            Projeto Experimental
          </Typography>
        </li>
      </ul>
    </footer>
  );
}