import { Typography, Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

function AboutHero() {
  return (
    <div className="about-hero mx-auto flex items-center h-[calc(100vh_-_105px)] justify-center ">
      <div className="lg:w-2/4 w-full bg-opacity-90 bg-black px-8 py-10 lg:px-10 lg:py-8 flex flex-col justify-center items-center ">
        <Typography
          variant="h1"
          color="white"
          className="mb-5 lg:mb-10 text-2xl lg:text-5xl font-normal text-center"
        >
          <span className="font-bold"> Travel IO </span> is a{" "}
          <span className="font-bold">Virtual Travel</span> Solutions provider
        </Typography>
        <Typography variant="p" color="white" className="mb-14 font-normal text-justify">
          We understand the challenges involved in planning a trip, spanning
          from the visa application process to reaching your destination. We
          recognize that many travelers encounter obstacles when acquiring the
          necessary documents for their visa applications. That's precisely why
          we have customized our services to alleviate these burdens. Our
          services have been meticulously crafted to cater to your needs
          seamlessly. We collaborate with you to formulate a strategy that
          aligns with both your requirements and financial constraints. Whether
          you require assistance with a single project or seek an enduring
          partnership, we are committed to supporting you throughout every stage
          of your journey
        </Typography>
        <Link to="/services">
        <Button
          variant="outlined"
          color="white"
          className="lg:text-xl rounded-none"
        >
          See Our Services
        </Button>
        </Link>
      </div>
      {/* <div className="absolute bottom-4 w-screen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="0.5"
            d="M0,288L120,288C240,288,480,288,720,266.7C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="absolute bottom-0 w-screen">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#000000"
            fill-opacity="1"
            d="M0,288L120,288C240,288,480,288,720,266.7C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}

export default AboutHero;
