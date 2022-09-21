import React from "react";
import "../styles/Banner.css";
import bannerImage from "../images/banner.jpg";

function Banner() {
  return (
    <div className="bannerContainer">
      <div className="banner">
        <img src={bannerImage} />
      </div>
      <h1 className="bannerText">Discover the best food &
      <br/> drinks in Kerala</h1>
    </div>
  );
}

export default Banner;
