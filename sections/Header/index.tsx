import Image from "next/image";
import React from "react";
import "./styles.css";
import Button from "@/components/Button";
import Socials from "@/components/Socials";
import Navbar from "@/components/Navbar";
import Hamburger from "@/components/Icons/Hamburger";
import MobileMenu from "@/components/MobileMenu";

const Header = () => {
  return (
    <header className="header__root">
      <div className="header__top container">
        <Image
          src={"/logos/thegroves-logo.png"}
          width={220}
          height={50}
          alt="The Groves"
          className="header__logo"
        />
        <div className={"header__ctas"}>
          <Socials />
          <Button>Log in</Button>
        </div>
        <MobileMenu />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
