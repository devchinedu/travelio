import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function OtherServices() {
  const data = [
    {
      title: "Second Passport",
      description:
        "If you are a frequent traveler, you may want to consider getting a second passport. A second passport gives you the ability to travel to more countries without a visa.",
      fasIcon: "fas fa-passport",
    },
    {
      title: "Visa Application",
      description:
        "We can help you with your visa application. We will review your application and make sure it is complete and accurate. We will also provide you with a list of documents that you need to submit with your application.",
      fasIcon: "fas fa-plane-departure",
    },
    {
      title: "Passport Renewal",
      description:
        "If your passport is about to expire, you can renew it online. We will review your application and make sure it is complete and accurate. We will also provide you with a list of documents that you need to submit with your application.",
      fasIcon: "fas fa-sync-alt",
    },
    {
      title: "Flight Booking",
      description:
        "We can help you book your flight. We will find the best deal for you and make sure that you get the best price.",
      fasIcon: "fas fa-plane",
    },
    {
      title: "Hotel Booking",
      description:
        "At Visa IO we can help you book your hotel. We will find the best deal for you and make sure that you get the best price.",
      fasIcon: "fas fa-hotel",
    },
  ];

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl  py-24">
        <Typography className="text-center text-3xl font-bold pb-4">
          Other Services
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {data.map((item, index) => (
            <Card className="mt-6 w-84 text-center transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-10 hover:shadow-xl">
              <CardBody>
                <i
                  className={`${item.fasIcon} text-4xl text-green-500 pb-5`}
                ></i>
                <Typography variant="h6" color="blue-gray">
                  {item.title}
                </Typography>
                <Typography className="text-justify">
                  {item.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
