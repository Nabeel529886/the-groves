import React from "react";
import "./styles.css";
import FooterHeader from "./components/FooterHeader";
import FooterDetails from "./components/FooterDetails";
import FooterLinks from "./components/FooterLinks";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer__root container">
      <Image
        src={"/logos/thegroves-logo.png"}
        width={286}
        height={65}
        alt="The Groves logo"
        className="footer__mobile_logo"
      />
      <FooterHeader />
      <FooterDetails />
      <FooterLinks />
    </footer>
  );
};

export default Footer;
