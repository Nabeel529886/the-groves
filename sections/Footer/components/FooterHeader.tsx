import React from "react";
import Image from "next/image";
import playstore from "@/assets/playstore.png";
import applestore from "@/assets/applestore.png";

const FooterHeader = () => {
  return (
    <div className="footer__header">
      <h2>Join us for an unforgettable experience</h2>
      <div className="footer__download_btn_container">
        <p>DOWNLOAD THE GROVES APP</p>
        <div className="footer__download_btns">
          <Image src={applestore} alt="Download on Apple Store" />
          <Image src={playstore} alt="Download on Play Store" />
        </div>
      </div>
    </div>
  );
};

export default FooterHeader;
