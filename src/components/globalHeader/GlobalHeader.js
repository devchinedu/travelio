import React from "react";
import HeaderSearch from "../headerSearch/HeaderSearch";
import Nav from "../navigation/Nav";
import Footer from "../navigation/Footer";

function GlobalHeader({ children }) {
  const overlayColor = "#05203C";
  const backgroundImageUrl =
    "https://images.pexels.com/photos/164646/pexels-photo-164646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const headerStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  const overlayStyle = {
    backgroundColor: overlayColor,
    opacity: 0.7,
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  };

  return (
    <div>
      <div style={headerStyle}>
        {/* <div style={overlayStyle}></div> */}
        <Nav />
        <HeaderSearch />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default GlobalHeader;
