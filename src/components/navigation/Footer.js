import { Typography } from "@material-tailwind/react";
 
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navMenu = [
    {
      title: "Doc Authentication",
      link: "/docauth",
    },
    {
      title: "Visas",
      link: "/visas",
    },
    {
      title: "Passports",
      link: "/passports",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  return (
    <footer className="w-full border-t bg-[#05203C] py-12">
      <div className="flex  flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  border-blue-gray-50 py-6 text-center md:justify-between mx-auto max-w-screen-xl px-4 lg:px-8 lg:py-4">
      <Typography color="white" className="font-normal">
        &copy; {currentYear} All Rights Reserved <a href="/" rel="noreferrer" className="text-yellow-500">Visa IO</a>
      </Typography>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {navMenu.map((item) => (
        <li>
          <Typography
            as="a"
            href={item.link}
            color="white"
            className="font-normal transition-colors hover:text-yellow-500 focus:text-yellow-500"
          >
            {item.title}
          </Typography>
        </li>
        ))}
      </ul>
      </div>
    </footer>
  );
}