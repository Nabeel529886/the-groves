import React from "react";
import "./styles.css";
import Button from "@/components/Button";
import MinimalCard from "@/components/MinimalCard/MinimalCard";
import restaurants from "@/assets/hawanim-groves-city.png";
import experiences from "@/assets/experiences.png";
import events from "@/assets/events.png";

const CurateExperienceSection = () => {
  return (
    <section className="experience__root">
      <div className="experience__header">
        <h2>Curate your experience as you like</h2>
        <Button icon>Book Tickets</Button>
      </div>
      <div className="experience__cards_container">
        <MinimalCard image={restaurants} title="Restaurants" marginTop="72px" />
        <MinimalCard image={experiences} title="Experiences" marginTop="0px" />
        <MinimalCard image={events} title="Events" marginTop="62px" />
      </div>
    </section>
  );
};

export default CurateExperienceSection;
