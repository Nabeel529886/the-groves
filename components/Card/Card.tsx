import React from "react";
import "./styles.css";
import Image, { StaticImageData } from "next/image";
import RightArrow from "../Icons/RightArrow";

interface CardProps {
  imageUrl: StaticImageData;
  title: string;
  chipText: string;
}

const Card = ({ imageUrl, chipText, title }: CardProps) => {
  return (
    <div className="card__root">
      <div className="card__image_container">
        <Image src={imageUrl} alt={title} />
      </div>
      <div className="card__content_container">
        <div className="card__content">
          <h3>{title}</h3>
          <div className="card__chip">
            <p>{chipText}</p>
          </div>
        </div>
        <RightArrow />
      </div>
    </div>
  );
};

export default Card;
