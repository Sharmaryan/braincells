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
          src="https://static.vecteezy.com/system/resources/previews/004/435/902/original/white-plane-symbol-on-a-blue-background-airplane-flight-path-banner-travel-tours-banner-template-horizontal-advertising-business-banner-layout-template-clean-abstract-background-for-web-vector.jpg"
          alt="card back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
