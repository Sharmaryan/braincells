import React from "react";
import "./Card.css";

export const Card = ({ card, handleChoice, isFlipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card" key={card.id}>
      <div className={isFlipped ? "flipped" : ""}>
        <img className="card__front card__image" src={card.image} alt="card front" />
        <img
          className="card__back card__image"
          src="https://i.pinimg.com/originals/86/8b/48/868b48f0ec5b3d88216f4a484b880f59.jpg"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
