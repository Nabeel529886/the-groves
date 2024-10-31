import Socials from "@/components/Socials";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import visa from "@/assets/visa.png";
import mastercard from "@/assets/mastercard.png";
import americanExpress from "@/assets/american-express.png";

const FooterLinks = () => {
  return (
    <div className="footer__links">
      <div className="footer__links__logo_container">
        <Image
          src={"/logos/thegroves-logo.png"}
          width={286}
          height={65}
          className="footer__desktop_logo"
          alt="The Groves logo"
        />
        <Socials />
      </div>
      <div className="footer__links_container">
        <ul>
          <li>
            <Link href={"#"}>Terms & Conditions</Link>
          </li>
          <li>
            <Link href={"#"}>Privacy Policy</Link>
          </li>
          <li>
            &copy; {new Date().getFullYear()} The Groves for Entertainment
          </li>
        </ul>
        <div className="footer__links_card_logos">
          <Image src={visa} alt="Visa Card" />
          <Image src={mastercard} alt="Mastercard" />
          <Image src={americanExpress} alt="American Express" />
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
