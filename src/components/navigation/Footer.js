import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  return (
    <footer className="w-full border-t bg-[#05203C] py-12">
      <div className="flex  flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  border-blue-gray-50 py-6 text-center md:justify-between mx-auto max-w-screen-xl px-4 lg:px-8 lg:py-4">
      <Typography color="white" className="font-normal">
        &copy; 2023 Material Tailwind
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            About Us
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            License
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contribute
          </Typography>
        </li>
        <li>
          <Typography
            as="a"
            href="#"
            color="white"
            className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
          >
            Contact Us
          </Typography>
        </li>
      </ul>
      </div>
    </footer>
  );
}