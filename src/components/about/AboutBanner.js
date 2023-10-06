import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

function AboutBanner() {
  return (
    <div className="flex items-center  bg-white relative">
      {/* <div className="absolute top-0 w-screen ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L1440,224L1440,0L0,0Z"></path></svg>
      </div>
      <div className="absolute top-2 w-screen ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="0.5" d="M0,160L1440,224L1440,0L0,0Z"></path></svg>
      </div> */}

      <div className="w-full lg:w-2/4 mx-auto  h-1/2 px-6 py-8 lg:py-8 lg:px-10 flex flex-col justify-center items-center mt-10 lg:mt-20">
        <Typography
          variant="h2"
          color="black"
          className="mb-8 lg:mb-14 text-3xl lg:text-5xl font-bold w-full lg:w-1/2"
        >
          Seamless Travel Experiences:
          <span className="font-thin">
            {" "}
            Explore the World with Our Virtual Travel Assistant
          </span>
        </Typography>
        <Typography
          variant="p"
          color="black"
          className="mb-8 lg:mb-14 text-normal font-normal text-justify"
        >
          Step into the realm of virtual travel assistance, where innovation and
          imagination know no bounds! We are a dynamic and impassioned team
          dedicated to redefining the way you explore the world. Our mission is
          simple: to offer you an extraordinary travel experience powered by
          cutting-edge technology. At the heart of our ethos lies the commitment
          to create immersive journeys through the digital realm. We don't just
          build websites; we craft portals to new adventures, design mobile apps
          that open doors to unseen destinations, and develop SaaS solutions
          that streamline your travel planning process. Our IT wizards stand
          ready to provide unparalleled technical support, ensuring that your
          virtual travels are smooth and seamless. Our team is a vibrant mix of
          talent and enthusiasm, fueled by a shared passion for reimagining the
          travel industry. But words alone can't capture the essence of our
          innovation. To truly grasp the spirit of our virtual travel assistant
          provider, we invite you to connect with us directly. Let's embark on a
          journey together and elevate your digital exploration to unprecedented
          heights. Welcome aboard, fellow traveler, and let's embark on an
          adventure of boundless possibilities!
        </Typography>
        <Link to="/services">
          <Button
            variant="filled"
            className="w-auto text-md font-light rounded-none bg-black"
          >
            OUR SERVICES
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default AboutBanner;
