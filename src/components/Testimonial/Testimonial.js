import React from "react";
import { Card, CardBody, Rating, Typography } from "@material-tailwind/react";

const data = [
  {
    name: "Orji UG",
    review:
      "I'm extremely satisfied and happy with the services provided. The team went above and beyond to meet our needs.",
    company: "DAMAC Properties",
    image:
      "https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ratings: 4,
  },
  {
    name: "John BH",
    review:
      "Visa IO was quick to respond,i enjoyed the seamless process and i'm happy with the service.",
    company: "R & B Group",
    image:
      "https://images.pexels.com/photos/2719416/pexels-photo-2719416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ratings: 5,
  },
  {
    name: "Gab S.",
    review:
      "I contacted Visa IO  to review my visa documents. They were very helpful and professional. ",
    company: "GUS systems",
    image:
      "https://images.pexels.com/photos/1995130/pexels-photo-1995130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ratings: 4,
  },
  {
    name: "Mark ChuckZ",
    review:
      "Second passport application was a breeze. I was able to get my passport in 2 weeks. well done Visa IO",
    company: "De-sadel Consortium",
    image:
      "https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    ratings: 4,
  },
];

const Testimonial = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-0 lg:py-14">
      <Typography className="text-xl font-semibold text-left mb-8 text-gray-700">
        What our customers are saying 😀
      </Typography>
      <div className=" flex justify-center gap-4 flex-wrap lg:flex-nowrap">
        {data.map((item, index) => (
          <Card className="w-full w-md-1/3">
            <CardBody>
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="text-lg font-medium">{item.name}</h4>
                  <span className="text-gray-500 text-sm">{item.company}</span>
                </div>
              </div>
              <p className="text-gray-700 pb-2">{item.review}</p>
              <Rating value={item.ratings} readonly />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
