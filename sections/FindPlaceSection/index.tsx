import React from "react";
import "./styles.css";
import Image from "next/image";
import map from "@/assets/map.png";
import Button from "@/components/Button";

const FindPlaceSection = () => {
  return (
    <section className="place__root container">
      <div className="place__image_container">
        <Image src={map} alt="Find your place" />
      </div>
      <div className="place__content_container">
        <p className="place__content_caption">EXPERIENCE THE GROVES</p>
        <h2>Find your place</h2>
        <p className="place__content_desc">
          Our interactive map will show you the way to the shops and restaurants
          that you want to see.
        </p>
        <Button icon>Open the Map</Button>
      </div>
    </section>
  );
};

export default FindPlaceSection;
