import React from "react";
import { Helmet } from "react-helmet";
import Faq from "../components/accordian/Faq";
import CallToAction from "../components/cta/CallToAction";
import OtherServices from "../components/services/OtherServices";
import Testimonial from "../components/Testimonial/Testimonial";
import Timelines from "../components/timeline/Timelines";
function Home() {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Visa support AI</title>
        <meta name="description" content="Helmet app" />
        <link rel="canonical" href="http://example.com/my-app" />
      </Helmet>
      <Testimonial />
      <CallToAction />
      <Timelines />
      <OtherServices />
      <Faq />
    </div>
  );
}

export default Home;
