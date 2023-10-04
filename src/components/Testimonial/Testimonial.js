import React from "react";

// const data = [
//   {
//     name: "Orji UG",
//     review:
//       "I'm extremely satisfied and happy with the services provided. The team went above and beyond to meet our needs.",
//     company: "DAMAC Properties",
//     image:
//       "https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ratings: 4,
//   },
//   {
//     name: "John BH",
//     review:
//       "Visa IO was quick to respond,i enjoyed the seamless process and i'm happy with the service.",
//     company: "R & B Group",
//     image:
//       "https://images.pexels.com/photos/2719416/pexels-photo-2719416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ratings: 5,
//   },
//   {
//     name: "Gab S.",
//     review:
//       "I contacted Visa IO  to review my visa documents. They were very helpful and professional. ",
//     company: "GUS systems",
//     image:
//       "https://images.pexels.com/photos/1995130/pexels-photo-1995130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ratings: 4,
//   },
//   {
//     name: "Mark ChuckZ",
//     review:
//       "Second passport application was a breeze. I was able to get my passport in 2 weeks. well done Visa IO",
//     company: "De-sadel Consortium",
//     image:
//       "https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     ratings: 4,
//   },
// ];

const Testimonial = () => {
  return (
    // <div className="mx-auto flex flex-col lg:flex-row max-w-full py-4 px-10 lg:px-10 lg:py-8 lg:mt-24">
    //   <div className="flex flex-col items-center lg:border-r-2  p-4">
    //     <Typography
    //       variant="h3"
    //       className="font-bold text-left mb-2 text-gray-700"
    //     >
    //       Excellent
    //     </Typography>
    //     <Typography
    //       variant="h3"
    //       className="font-bold text-left mb-2 text-deep-orange-700"
    //     >
    //       <Rating value={5} readonly />
    //     </Typography>
    //     <Typography
    //       variant="p"
    //       className="font-bold text-center mb-4 text-gray-700"
    //     >
    //       Based on 48 reviews from Google
    //     </Typography>
    //     <Button color="indigo" className="text-md">
    //       review us
    //     </Button>
    //   </div>

    //     <div className=" flex justify-center gap-4 flex-wrap md:flex-wrap lg:flex-nowrap">
    //       {data.map((item, index) => (
    //         <Card className="w-full w-md-1/3">
    //           <CardBody>
    //             <div className="flex items-center mb-4">
    //               <img
    //                 src={item.image}
    //                 alt={item.name}
    //                 className="w-12 h-12 rounded-full mr-4 object-cover"
    //               />
    //               <div>
    //                 <h4 className="text-lg font-medium">{item.name}</h4>
    //                 <span className="text-gray-500 text-sm">
    //                   {item.company}
    //                 </span>
    //               </div>
    //             </div>
    //             <p className="text-gray-700 pb-2">{item.review}</p>
    //             <Rating value={item.ratings} readonly />
    //           </CardBody>
    //         </Card>
    //       ))}
    //     </div>

    // </div>

    <div className="min-w-screen   flex items-center justify-center">
      <div className="w-full  px-5 py- lg:py-20 text-gray-800">
        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-black">
              What people <br />
              <span className="font-normal">are saying.</span>
            </h1>
            <h3 className="text-xl mb-5 font-light">
              Some of our most recent reviews.
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
              <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
              <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
            </div>
          </div>
          <div className="-mx-3 md:flex items-start">
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://images.pexels.com/photos/2701660/pexels-photo-2701660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Kenzie Edgar.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    I had the pleasure of working with Danatex for my website
                    redesign, and I couldn't be happier with the results. They
                    have an incredible team of designers and developers who
                    truly understand the client's needs. The final product
                    exceeded my expectations, and the attention to detail was
                    outstanding. I highly recommend Danatex for anyone looking
                    for top-notch website design services.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://images.pexels.com/photos/2719416/pexels-photo-2719416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Stevie Tifft.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    They handled my custom software project with professionalism
                    and skill, delivering a product that streamlined my business
                    operations. I was impressed by their clear communication
                    throughout the development process, and they were always
                    receptive to my feedback. Great job, Danatex!
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://images.pexels.com/photos/936117/pexels-photo-936117.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Tommie Ewart.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    The team at Danatex did a fantastic job on my e-commerce
                    website. From the initial concept to the final
                    implementation, they demonstrated creativity and expertise
                    in every aspect. The website not only looks stunning but
                    also functions flawlessly. Working with Danatex was a smooth
                    and enjoyable experience, and I can't thank them enough for
                    their hard work and dedication.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://images.pexels.com/photos/1995130/pexels-photo-1995130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Charlie Howse.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    They created a visually appealing and user-friendly website
                    for my business that has received countless compliments from
                    my customers. The team is highly talented, and their
                    professionalism is second to none. I highly recommend
                    Danatex for anyone seeking top-quality website design
                    services.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="px-3 md:w-1/3">
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img src="https://i.pravatar.cc/100?img=5" alt="" />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Nevada Herbertson.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    Choosing Danatex for my mobile app development was a
                    game-changer. They brought my app idea to life and added
                    valuable insights to enhance its functionality. The app was
                    delivered on time and within budget, which was impressive.
                    Danatex is a reliable and skilled agency that I would
                    happily work with again.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
              <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
                <div className="w-full flex mb-4 items-center">
                  <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                    <img
                      src="https://img.freepik.com/free-photo/young-woman-wearing-yellow-sweater_273609-23405.jpg?w=1480&t=st=1689971033~exp=1689971633~hmac=f293a27de45b8dd50327dcac5f04004028859aab81cf062c0de90044a5381e49"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-sm uppercase text-gray-600">
                      Kris Stanton.
                    </h6>
                  </div>
                </div>
                <div className="w-full">
                  <p className="text-sm leading-tight">
                    <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                      "
                    </span>
                    They developed a custom solution for my business that helped
                    automate tasks and improve efficiency significantly. The
                    team was professional, responsive, and the level of support
                    even after the project was completed was commendable. I
                    highly recommend Danatex for any software development needs.
                    <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                      "
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
