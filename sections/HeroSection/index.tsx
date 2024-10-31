import React from "react";
import "./styles.css";
import Header from "../Header";
import Button from "@/components/Button";

const HeroSection = () => {
  return (
    <div className={"hero__root"}>
      <Header />
      <section className={"hero__container"}>
        <div
          style={{ height: "100%", position: "relative" }}
          className="container"
        >
          <div className="hero__content">
            <h5>KHWAJA YANNI</h5>
            <h1>
              The new <br /> era of Luxury
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. In
              inventore repellat praesentium necessitatibus ipsam
            </p>
            <Button icon>Book reservation now</Button>
          </div>
        </div>
        <div className="hero__container__overlay" />
      </section>
    </div>
  );
};

export default HeroSection;
