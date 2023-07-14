import React, { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
 
export default function Nav() {
  const [openNav, setOpenNav] = useState(false);

  const navMenu = [
    {
      title: "Doc Authentication",
      link: "/doc-authentication",
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
    }
  ]
 
  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);
 
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navMenu.map((item, index) => (
        <li key={index}>
          <Typography
            as="a"
            href={item.link}
            className="cursor-pointer hover:underline p1 font-bold"
          >
            {item.title}
          </Typography>
        </li>
      ))}
    </ul>
  );
 
  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-10 shadow-none rounded-none">
      <div className="container mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-bold text-2xl hover:shadow-xl"
        >
          {/* fa route */}
          <i className="fas fa-route text-2xl mr-2 text-yellow-500"></i>
          Visa IO
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="">
        <IconButton variant="text" className="rounded-full text-white">
          <i className="fas fa-bell text-lg"/>
        </IconButton>
        <IconButton variant="text" className="rounded-full text-white">
          <i className="fas fa-user-circle text-lg"/>
        </IconButton>
        <IconButton variant="text" className="rounded-full text-white">
            <i className="fas fa-cog text-lg"/>
        </IconButton>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Buy Now</span>
          </Button>
        </div>
      </MobileNav>
    </div>
  );
}