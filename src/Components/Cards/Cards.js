import React from "react";
import data from "../../CardFlip.json";
import "./Cards.css";

export const Cards = () => {
  const images = data["Card-Flip"][0].imageSet;

  const getRandomCards = (images) => {
    for (let i = images.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = images[i];
      images[i] = images[j];
      images[j] = temp;
    }
    return images;
  };

  return (
    <div className="cards">
      {getRandomCards(images).map((item) => {
        return (
          <img
            className="cards__image"
            key={item.id}
            src={item.image}
            alt={item.id}
          />
        );
      })}
    </div>
  );
};
