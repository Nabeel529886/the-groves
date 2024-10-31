import React from "react";
import "./styles.css";
import Button from "@/components/Button";
import MinimalCard from "@/components/MinimalCard/MinimalCard";
import littleKrazy from "@/assets/little-krazy.png";
import hawanimGrovesCity from "@/assets/hawanim-groves-city.png";
import picnicMarket from "@/assets/picnic-market.png";
import lucaworld from "@/assets/lucaworld.png";

const cardsData = [
  {
    id: 1,
    title: "Little Krazy",
    image: littleKrazy,
    marginTop: "29px",
  },
  {
    id: 2,
    title: "Hawanim Groves City",
    image: hawanimGrovesCity,
    marginTop: "72px",
  },
  {
    id: 3,
    title: "Picnic Market",
    image: picnicMarket,
    marginTop: "0px",
  },
  {
    id: 4,
    title: "Lucaworld",
    image: lucaworld,
    marginTop: "62px",
  },
];

const AccessTicketSection = () => {
  return (
    <section className="ticket__root">
      <div className="container">
        <h2>Book General Access ticket and enjoy the attractions for free</h2>
        <Button icon>Book General Access Ticket</Button>
      </div>
      <div className="ticket__cards">
        {cardsData.map((data) => (
          <MinimalCard
            key={data.id}
            image={data.image}
            title={data.title}
            marginTop={data.marginTop}
          />
        ))}
      </div>
    </section>
  );
};

export default AccessTicketSection;
