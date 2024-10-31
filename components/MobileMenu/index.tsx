"use client";

import React, { useState } from "react";
import Hamburger from "../Icons/Hamburger";
import "./styles.css";
import Link from "next/link";
import { navLinks } from "@/utils/constants";
import Button from "../Button";
import Socials from "../Socials";
import CloseIcon from "../Icons/CloseIcon";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={"menu__root"}>
      <Hamburger className="header__hamburger" onClick={() => setOpen(true)} />
      <div className={`menu__container ${open ? "open" : ""}`}>
        <CloseIcon
          className="menu__close-icon"
          onClick={() => setOpen(false)}
        />
        <ul className="menu__list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        <Button className={"menu__login-btn"}>Log in</Button>

        <div className="menu__socials">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
