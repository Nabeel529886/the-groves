import React from "react";
import "./styles.css";
import Image, { StaticImageData } from "next/image";

interface MinimalCardProps {
  image: StaticImageData;
  title: string;
  marginTop?: string;
}

const MinimalCard = ({ image, title, marginTop }: MinimalCardProps) => {
  return (
    <div style={{ marginTop }} className="minimal_card__root">
      <Image src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
};

export default MinimalCard;
