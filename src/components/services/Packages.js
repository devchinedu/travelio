import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const packages = [
  {
    id: 11,
    title: "Standard",
    price: 29,
    description: "For the individual traveler",
    features: [
      "Hotel reservation",
      "Flight reservation",
      "Travel insurance",
      "Student admission",
      "Visa interview preparation",
      "Appointment booking",
      "Cover letters and LOI",
      "Invitation letters",
      "Document attestation",
      "Document translation",
    ],
  },
  {
    id: 12,
    title: "Premium",
    price: 49,
    description: "For the individual traveler",
    features: [
      "Hotel reservation",
      "Flight reservation",
      "Travel insurance",
      "Student admission",
      "Visa interview preparation",
      "Appointment booking",
      "Cover letters and LOI",
      "Invitation letters",
      "Document attestation",
      "Document translation",
    ],
  },
  {
    id: 13,
    title: "Business",
    price: 99,
    description: "For the individual traveler",
    features: [
      "Hotel reservation",
      "Flight reservation",
      "Travel insurance",
      "Student admission",
      "Visa interview preparation",
      "Appointment booking",
      "Cover letters and LOI",
      "Invitation letters",
      "Document attestation",
      "Document translation",
    ],
  },
  {
    id: 14,
    title: "Gold",
    price: 99,
    description: "For the individual traveler",
    features: [
      "Hotel reservation",
      "Flight reservation",
      "Travel insurance",
      "Student admission",
      "Visa interview preparation",
      "Appointment booking",
      "Cover letters and LOI",
      "Invitation letters",
      "Document attestation",
      "Document translation",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function Packages() {
  return (
    <div className="py-20 px-4 lg:px-20 lg:py-10 bg-gray-50">
      <div className="text-center mb-4">
        <Typography variant="h1" color="teal" className="font-bold text-3xl">
          <h1>Plans that fits your needs</h1>
        </Typography>
        <Typography variant="body1" color="gray" className="font-normal">
          <p>No hidden fees. No credit card needed. Cancel anytime.</p>
        </Typography>
        <hr />
      </div>
      <div className=" py-10 px-4 lg:px-20 lg:py-50 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {packages.map((item) => (
          <Card
            color="white"
            variant="gradient"
            className="w-full max-w-[20rem] p-8 hover:shadow-green-500 hover:scale-105 transition-all duration-300 mx-auto"
          >
            <Link to={/dynamicservices/ + item.id}>
            <CardHeader
              floated={false}
              shadow={false}
              color="black"
              className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
            >
              <Typography
                variant="small"
                color="blue"
                className="font-normal uppercase"
              >
                {item.name}
              </Typography>
              <Typography
                variant="h1"
                color="black"
                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
              >
                <span className="mt-2 text-4xl">$</span>
                {item.price}
                <span className="self-end text-4xl">/mo</span>
              </Typography>
            </CardHeader>
            <Typography className="text-center font-bold pb-6">
              {item.description}
            </Typography>
            <CardBody className="p-0">
              <ul className="flex flex-col gap-4">
                {item.features.map((feature) => (
                  <li className="flex items-center gap-4">
                    <span className="rounded-full border border-green-500 bg-green/20 p-1">
                      <CheckIcon />
                    </span>
                    {item.title === "Standard" &&
                    item.features.indexOf(feature) > 3 ? (
                      <span className="line-through">{feature}</span>
                    ) : item.title === "Premium" &&
                      item.features.indexOf(feature) > 5 ? (
                      <span className="line-through">{feature}</span>
                    ) : item.title === "Business" &&
                      item.features.indexOf(feature) > 6 ? (
                      <span className="line-through">{feature}</span>
                    ) : (
                      <span>{feature}</span>
                    )}
                  </li>
                ))}
              </ul>
            </CardBody>
            <CardFooter className="mt-12 p-0">
              <Button
                size="lg"
                color="blue"
                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                ripple={false}
                fullWidth={true}
              >
                Buy Now
              </Button>
            </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
