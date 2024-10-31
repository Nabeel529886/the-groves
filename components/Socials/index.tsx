import React from "react";
import "./styles.css";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  {
    id: 1,
    name: "TikTok",
    icon: "/icons/tiktok-icon.png",
    href: "#",
  },
  {
    id: 2,
    name: "Instagram",
    icon: "/icons/instagram-icon.png",
    href: "#",
  },
  {
    id: 3,
    name: "Twitter",
    icon: "/icons/twitter-icon.png",
    href: "#",
  },
  {
    id: 4,
    name: "Snapchat",
    icon: "/icons/snapchat-icon.png",
    href: "#",
  },
];

const Socials = () => {
  return (
    <div className="socials__root">
      {socialLinks.map((link) => (
        <Link href={link.href} key={link.id}>
          <Image src={link.icon} alt={link.name} width={26} height={26} />
        </Link>
      ))}
    </div>
  );
};

export default Socials;
