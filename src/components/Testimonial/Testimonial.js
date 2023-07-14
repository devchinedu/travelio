import React from 'react';
import { Card, CardBody, Rating } from '@material-tailwind/react';

const data = [
  {
    name: 'John Doe',
    review: "I'm extremely satisfied with the services provided. The team went above and beyond to meet our needs.",
    company: 'ABC Company',
    image: 'https://www.nj.com/resizer/dY2Wf8hZKncZsdiiOA7NdJhKI9E=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FM3QYFTNP5AUFAEVCPLVB73MSY.jpg',
    ratings: 3,
  },
  {
    name: 'John Doe',
    review: "I'm extremely satisfied with the services provided. The team went above and beyond to meet our needs.",
    company: 'ABC Company',
    image: 'https://www.nj.com/resizer/dY2Wf8hZKncZsdiiOA7NdJhKI9E=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FM3QYFTNP5AUFAEVCPLVB73MSY.jpg',
    ratings: 5,
  },
  {
    name: 'John Doe',
    review: "I'm extremely satisfied with the services provided. The team went above and beyond to meet our needs.",
    company: 'ABC Company',
    image: 'https://www.nj.com/resizer/dY2Wf8hZKncZsdiiOA7NdJhKI9E=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FM3QYFTNP5AUFAEVCPLVB73MSY.jpg',
    ratings: 4,
  },
  {
    name: 'John Doe',
    review: "I'm extremely satisfied with the services provided. The team went above and beyond to meet our needs.",
    company: 'ABC Company',
    image: 'https://www.nj.com/resizer/dY2Wf8hZKncZsdiiOA7NdJhKI9E=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FM3QYFTNP5AUFAEVCPLVB73MSY.jpg',
    ratings: 2,
  }
];

const Testimonial = () => {
  return (
    <div className="mx-auto max-w-screen-xl py-2 px-4 lg:px-0 lg:py-14 flex justify-center gap-4 flex-wrap lg:flex-nowrap">
  
      {data.map((item, index) => (
    <Card className='w-full w-md-1/3'>
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
        <p className="text-gray-700">{item.review}</p>
        <Rating value={item.ratings} readonly />
      </CardBody>
    </Card>
      ))}
    </div>
  );
};

export default Testimonial;
