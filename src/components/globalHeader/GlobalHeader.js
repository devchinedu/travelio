import React from "react";
import HeaderSearch from "../headerSearch/HeaderSearch";
import Nav from "../navigation/Nav";
import Footer from "../navigation/Footer";
import globalheader from "../../assets/img/globalheader.jpg";

function GlobalHeader({ children }) {
  // const overlayColor = "#05203C";
  const overlayColor = "rgba(5, 32, 60, 0.9)";
  // const overlayColors = "rgba(5, 32, 30, 0.9)";
  const backgroundImageUrl = globalheader;

  const headerStyle = {
    backgroundImage: `linear-gradient(${overlayColor}, ${overlayColor}), url(${backgroundImageUrl})`,
    // backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };

  return (
    <div>
      <div style={headerStyle}>
        <Nav />
        <HeaderSearch />
      </div>
      {children}
      <Footer />
    </div>
  );
}

export default GlobalHeader;
