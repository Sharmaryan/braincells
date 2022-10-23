import React, { useState, useEffect } from "react";
import data from "../../CardFlip.json";
import "./Cards.css";
import { Card } from "../Card/Card";

const getRandomCards = (images) => {
  for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = images[i];
    images[i] = images[j];
    images[j] = temp;
  }
  return images;
};

export const Cards = ({ score, setScore }) => {
  console.log(score);
  const [cardChoiceOne, setCardChoiceOne] = useState(null);
  const [cardChoiceTwo, setCardChoiceTwo] = useState(null);
  const [cards, setCards] = useState([]);
  const [nextQuiz, setNextQuiz] = useState(0);

  const images = data["Card-Flip"]?.[nextQuiz]?.imageSet;

  useEffect(() => {
    if (images === undefined) {
      alert("quiz finished, starting again");
      setNextQuiz(0);
      setScore(0);
      setCards([]);
    } else {
      setCards(getRandomCards(images));
    }
  }, [images, setScore]);

  useEffect(() => {
    if (cardChoiceOne && cardChoiceTwo) {
      if (cardChoiceOne.itemId === cardChoiceTwo.itemId) {
        setScore((score) => score + 10);
        setCards((cards) => {
          return cards.map((card) =>
            card.itemId === cardChoiceOne.itemId
              ? { ...card, isMatched: true }
              : card
          );
        });
        resetTurn();
      } else {
        setTimeout(() => {
          resetTurn();
        }, 1000);
      }
    }
  }, [cardChoiceOne, cardChoiceTwo, setScore]);

  useEffect(() => {
    if (cards.length !== 0) {
      const allClicked = cards.filter((item) => item.isMatched === true);

      if (allClicked.length === cards.length) {
        setNextQuiz((nextQuiz) => nextQuiz + 1);
      }
    }
  }, [cards]);

  const resetTurn = () => {
    setCardChoiceOne(null);
    setCardChoiceTwo(null);
  };

  const handleChoice = (card) => {
    cardChoiceOne ? setCardChoiceTwo(card) : setCardChoiceOne(card);
  };

  return (
    <div className="cards">
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          isFlipped={
            card === cardChoiceOne || card === cardChoiceTwo || card.isMatched
          }
        />
      ))}
    </div>
  );
};
