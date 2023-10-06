import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Faq() {
  const data = [
    {
      id: 1,
      title: "How much does it cost?",
      description:
        "Price may vary depending on the service you need. However, we offer the best price in the market. Please see our pricing page for more information.",
    },
    {
      id: 2,
      title: "How long does it take?",
      description:
        "Processing time may vary depending on the service you need. We do our best to get back to you within 4hrs of your request.",
    },
    {
      id: 3,
      title: "Do I have to pay upfront?",
      description:
        "Yes, you have to pay upfront. However, we offer a 100% money-back guarantee if you are not satisfied with our service.",
    },
  ];
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-24 ">
      <Fragment>
        {data.map((item, index) => (
          <Accordion open={open === item.id}>
            <AccordionHeader onClick={() => handleOpen(item.id)}>
              {item.title}
            </AccordionHeader>
            <AccordionBody
              className="text-black text-normal leading-normal text-lg"
            >{item.description}</AccordionBody>
          </Accordion>
        ))}
      </Fragment>
    </div>
  );
}
