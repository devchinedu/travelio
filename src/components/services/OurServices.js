import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

function OurServices() {
  const data = [
    {
      title: "Hotel reservation",
      link: "/hotel-reservation",
      cost: "$10",
      fasIcon: "fas fa-hotel",
      color: "text-green-500",
      description:
        "We will secure a hotel reservation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Flight reservation",
      link: "/flight-reservation",
      cost: "$150",
      fasIcon: "fas fa-plane",
      color: "text-orange-500",
      description:
        "We will secure a flight reservation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Travel insurance",
      link: "/travel-insurance",
      cost: "$55",
      fasIcon: "fas fa-shield-alt",
      color: "text-blue-500",
      description:
        "We will secure a travel insurance for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Student admission",
      link: "/student-admission",
      cost: "$25",
      fasIcon: "fas fa-user-graduate",
      color: "text-yellow-500",
      description:
        "We will secure a student admission for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Visa interview preparation",
      link: "/visa-interview-preparation",
      cost: "$40",
      fasIcon: "fas fa-user-check",
      color: "text-pink-500",
      description:
        "We will secure a visa interview preparation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Appointment booking",
      link: "/appointment-booking",
      cost: "$80",
      fasIcon: "fas fa-calendar-check",
      color: "text-purple-500",
      description:
        "We will secure a appointment booking for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Cover letters and LOI",
      link: "/cover-letters-and-loi",
      cost: "$80",
      fasIcon: "fas fa-envelope-open-text",
      color: "text-teal-500",
      description:
        "We will secure a cover letters and LOI for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Invitation letters",
      link: "/invitation-letters",
      cost: "$80",
      fasIcon: "fas fa-envelope-open-text",
      color: "text-indigo-500",
      description:
        "We will secure a invitation letters for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Document attestation",
      link: "/document-attestation",
      cost: "$80",
      fasIcon: "fas fa-file-signature",
      color: "text-red-500",
      description:
        "We will secure a document attestation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      title: "Document translation",
      link: "/document-translation",
      cost: "$80",
      fasIcon: "fas fa-book",
      color: "text-lime-500",
      description:
        "We will secure a document translation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
  ];

  return (
    <div className=" max-full py-20 px-4 lg:px-20 lg:py-20 bg-gray-50">
      <div className="header">
        <Typography
          className="text-4xl lg:text-5xl font-extrabold text-black mb-10 text-center"
          variant="h1"
        >
          Virtual Assistant{" "}
          <span className="font-normal">Services we Offer</span>
        </Typography>

        <div className="list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {data.map((item) => (
            <Card className="mt-6 text-center transition duration-200 ease-in-out hover:shadow-orange-500 ">
              <CardBody>
                <i className={`${item.fasIcon} text-4xl ${item.color}`}></i>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {item.title}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                  <Button
                    size="sm"
                    variant="text"
                    className="flex items-center gap-2"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="product-hero flex items-center h-[calc(100vh_-_105px)]  justify-evenly lg:flex-nowrap flex-wrap">
      <div className="lg:w-2/5 bg-opacity-25  px-20 py-10 lg:px-10 lg:py-8 flex flex-col justify-center r">
        <Typography
          variant="h1"
          color="black"
          className="mb-5 lg:mb-10 text-4xl lg:text-6xl font-bold"
        >
          Streamlined Travel Planning 
          <span className="font-light"> and Visa Assistance Services </span>

        </Typography>
        <Typography variant="p" color="black" className="mb-10 font-normal text-justify">
        We understand the challenges involved in planning a trip, spanning from the visa application process to reaching your destination. We recognize that many travelers encounter obstacles when acquiring the necessary documents for their visa applications. That's precisely why we have customized our services to alleviate these burdens.
Our services have been meticulously crafted to cater to your needs seamlessly. We collaborate with you to formulate a strategy that aligns with both your requirements and financial constraints. Whether you require assistance with a single project or seek an enduring partnership, we are committed to supporting you throughout every stage of your journey.
        </Typography>
        <a href="/portofolio" className="z-40">
          <Button
            variant="filled"
            color="teal"
            className="neon-effect text-xl rounded-none z-40"
          >
            Learn More...
          </Button>
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="https://images.pexels.com/photos/15526759/pexels-photo-15526759/free-photo-of-palm-trees-on-a-tropical-beach.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-80 rounded-s-full rounded-b-full "
        />
        <img
          src="https://images.pexels.com/photos/4099168/pexels-photo-4099168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-80 rounded-e-full rounded-b-full "
        />
        <img
          src="https://images.pexels.com/photos/6025765/pexels-photo-6025765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-80 rounded-s-full rounded-t-full "
        />
        <img
          src="https://images.pexels.com/photos/2604792/pexels-photo-2604792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-80 rounded-e-full rounded-t-full"
        />
      </div>
    </div>
      </div>
    </div>
  );
}

export default OurServices;
