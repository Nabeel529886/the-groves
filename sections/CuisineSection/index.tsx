import React from "react";
import "./styles.css";
import Card from "@/components/Card/Card";
import vidaVera from "@/assets/vida-vera.png";
import zamazulu from "@/assets/zamazulu.png";
import khwajaYanni from "@/assets/khwajayanni.png";
import yamagata from "@/assets/yamagata.png";

const cardsData = [
  {
    id: 1,
    title: "Vida Vera",
    chipText: "100 SR per guest",
    image: vidaVera,
  },
  {
    id: 2,
    title: "Zama Zulu",
    chipText: "100 SR per guest",
    image: zamazulu,
  },
  {
    id: 3,
    title: "Khawaja Yanni",
    chipText: "100 SR per guest",
    image: khwajaYanni,
  },
  {
    id: 4,
    title: "Yamagata",
    chipText: "100 SR per guest",
    image: yamagata,
  },
];

const CuisineSection = () => {
  return (
    <section className="cuisine__root container">
      <div className="cuisine__header">
        <h2>Experience the Finest Cuisine</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="cuisine__cards_container">
        {cardsData.map((data) => (
          <Card
            key={data.id}
            imageUrl={data.image}
            title={data.title}
            chipText={data.chipText}
          />
        ))}
      </div>
    </section>
  );
};

export default CuisineSection;
