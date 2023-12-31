import React from "react";
import { Helmet } from "react-helmet";
import Faq from "../components/accordian/Faq";
import CallToAction from "../components/cta/CallToAction";
import OtherServices from "../components/services/OtherServices";
import Testimonial from "../components/Testimonial/Testimonial";
import Timelines from "../components/timeline/Timelines";
import OurServices from "../components/services/OurServices";
import Packages from "../components/services/Packages";
import ChatWidget from "../components/chat/ChatWidget";
function Home() {
  return (
    <div>
      {" "}
      <Helmet>
        <title>Virtual Travel Assistant</title>
        <meta name="description" content="Helmet app" />
        <link rel="canonical" href="http://example.com/my-app" />
      </Helmet>
      <OurServices />
      <Packages/>
      <Testimonial />
      <CallToAction />
      <Timelines />
      {/* <OtherServices /> */}
      <Faq />
      <ChatWidget />
    </div>
  );
}

export default Home;
