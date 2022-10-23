import React from "react";
import "./Card.css";

export const Card = ({ card, handleChoice, isFlipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card" key={card.id}>
      <div className={isFlipped ? "flipped" : ""}>
        <img
          className="card__front card__image"
          src={card.image}
          alt="card front"
        />
        <img
          className="card__back card__image"
          src="https://www.solidbackgrounds.com/images/1920x1080/1920x1080-light-blue-solid-color-background.jpg"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
