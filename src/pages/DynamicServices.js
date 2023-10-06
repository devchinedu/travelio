import { Button, Timeline, Typography } from "@material-tailwind/react";
import { Link, useParams } from "react-router-dom";
import { HowToBuy } from "../components/services/HowToBuy";
import admission from "../assets/img/admission.jpg";
import flight from "../assets/img/flight.jpg";
import hotel from "../assets/img/hotel.jpg";
import insurance from "../assets/img/insurance.jpg";
import visa from "../assets/img/visa.jpg";
import invite from "../assets/img/invite.jpg";
import letter from "../assets/img/letter.jpg";
import loi from "../assets/img/loi.jpg";
import appointment from "../assets/img/appointment.jpg";
import translate from "../assets/img/translate.jpg";

function DynamicServices() {
  const { id } = useParams();

  const data = [
    {
      id: 1,
      image: hotel,
      title: "Hotel reservation",
      link: "/hotel-reservation",
      cost: "$10",
      fasIcon: "fas fa-hotel",
      color: "text-green-500",
      description:
        "We will secure a hotel reservation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 2,
      image: flight,
      title: "Flight reservation",
      link: "/flight-reservation",
      cost: "$150",
      fasIcon: "fas fa-plane",
      color: "text-orange-500",
      description:
        "We will secure a flight reservation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 3,
      image: insurance,
      title: "Travel insurance",
      link: "/travel-insurance",
      cost: "$55",
      fasIcon: "fas fa-shield-alt",
      color: "text-blue-500",
      description:
        "We will secure a travel insurance for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 4,
      image: admission,
      title: "Student admission",
      link: "/student-admission",
      cost: "$25",
      fasIcon: "fas fa-user-graduate",
      color: "text-yellow-500",
      description:
        "We will secure a student admission for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 5,
      image: visa,
      title: "Visa interview preparation",
      link: "/visa-interview-preparation",
      cost: "$40",
      fasIcon: "fas fa-user-check",
      color: "text-pink-500",
      description:
        "We will secure a visa interview preparation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 6,
      image: appointment,
      title: "Appointment booking",
      link: "/appointment-booking",
      cost: "$80",
      fasIcon: "fas fa-calendar-check",
      color: "text-purple-500",
      description:
        "We will secure a appointment booking for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 7,
      image: loi,
      title: "Cover letters and LOI",
      link: "/cover-letters-and-loi",
      cost: "$80",
      fasIcon: "fas fa-envelope-open-text",
      color: "text-teal-500",
      description:
        "We will secure a cover letters and LOI for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 8,
      image: invite,
      title: "Invitation letters",
      link: "/invitation-letters",
      cost: "$80",
      fasIcon: "fas fa-envelope-open-text",
      color: "text-indigo-500",
      description:
        "We will secure a invitation letters for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 9,
      image: letter,
      title: "Document attestation",
      link: "/document-attestation",
      cost: "$80",
      fasIcon: "fas fa-file-signature",
      color: "text-red-500",
      description:
        "We will secure a document attestation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 10,
      image: translate,
      title: "Document translation",
      link: "/document-translation",
      cost: "$80",
      fasIcon: "fas fa-book",
      color: "text-lime-500",
      description:
        "We will secure a document translation for your visa application, which can be easily canceled without the need for a credit card. We will manage the booking on our own.",
    },
    {
      id: 11,
      title: "Standard Service",
      cost: "$29",
      description: "Tailored to the discerning individual traveler, our comprehensive service encompasses Hotel Reservations, Flight Bookings, Travel Insurance, and Student Admissions, ensuring a seamless journey from start to finish. Experience the convenience of secure and hassle-free arrangements without the necessity of a credit card. Entrust us with managing your bookings, as we prioritize your ease and satisfaction throughout every step of your adventure.",
      image: visa,
    },
    {
      id: 12,
      title: "Premium Service",
      cost: "$49",
      description: "Tailored to the discerning individual traveler, our comprehensive service encompasses Hotel Reservations, Flight Bookings, Travel Insurance,  Student Admissions and Visa interview preparation, ensuring a seamless journey from start to finish. Experience the convenience of secure and hassle-free arrangements without the necessity of a credit card. Entrust us with managing your bookings, as we prioritize your ease and satisfaction throughout every step of your adventure.",
      image: flight,
    },
    {
      id: 13,
      title: "Business Service",
      cost: "$69",
      description: "Tailored to the discerning individual traveler, our comprehensive service encompasses Hotel Reservations, Flight Bookings, Travel Insurance,  Student Admissions, Visa interview preparation, Appointment booking, Cover letters and LOI, Invitation letters, Document attestation and Document translation, ensuring a seamless journey from start to finish. Experience the convenience of secure and hassle-free arrangements without the necessity of a credit card. Entrust us with managing your bookings, as we prioritize your ease and satisfaction throughout every step of your adventure.",
      image: insurance,
    },
    {
      id: 14,
      title: "Gold Service",
      cost: "$99",
      description: "Tailored to the discerning individual traveler, our comprehensive service encompasses Hotel Reservations, Flight Bookings, Travel Insurance,  Student Admissions, Visa interview preparation, Appointment booking, Cover letters and LOI, Invitation letters, Document attestation and Document translation, ensuring a seamless journey from start to finish. Experience the convenience of secure and hassle-free arrangements without the necessity of a credit card. Entrust us with managing your bookings, as we prioritize your ease and satisfaction throughout every step of your adventure.",
      image: loi,
    },
  ];

  const service = data.find((service) => service.id == id);
  console.log(service);
  return (
    <div className="mx-auto max-w-screen-xl py-20 px-6 lg:px-8 lg:py-20">
      {service ? (
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="md:w-1/2">
            <Typography color="black" className="text-2xl font-bold mb-4">
              {service.title}
            </Typography>
            <Typography
              color="gray"
              variant="p"
              className=" font-normal mb-4 text-justify"
            >
              {service.description}
            </Typography>
            <Link to={service.link}>
              <Button
                color="lightBlue"
                buttonType="filled"
                size="lg"
                className="mb-6"
              >
                Buy Now - {service.cost}
              </Button>
            </Link>
            <img src={service.image} alt="" className="w-full" />
          </div>
          <div className="howto">
            <HowToBuy />
          </div>
                          
        </div>
      ) : (
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-center py-20 px-20">
          {" "}
          ⛔️ 404 Not Found...
        </h1>
      )}
    </div>
  );
}

export default DynamicServices;
