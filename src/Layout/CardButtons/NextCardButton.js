import React from "react";
import { useHistory } from "react-router-dom";

export default function NextCardButton({
  deck,
  cards,
  currentCard,
  setCurrentCard,
  currentCardSide,
  setCurrentCardSide,
}) {
  const history = useHistory();

  const handleNextClick = () => {
    if (cards.indexOf(currentCard) + 1 === cards.length) {
      const warning = window.confirm(
        `Restart "${deck.name}"?
          
Click 'cancel' to return to the Home screen!`
      );
      if (warning) {
        setCurrentCard(cards[0]);
        setCurrentCardSide(cards[0].front);
      } else {
        history.push("/");
      }
    } else {
      const nextCard = cards[cards.indexOf(currentCard) + 1];
      setCurrentCard(nextCard);
      setCurrentCardSide(nextCard.front);
    }
  };

  let nextButton = null;
  if (currentCardSide === currentCard.back) {
    nextButton = (
      <button
        type="button"
        className="btn btn-primary btn-lg mb-2 mx-2"
        onClick={handleNextClick}
      >
        <span className="oi oi-arrow-circle-right"> Next</span>
      </button>
    );
  }
  return <div>{nextButton}</div>;
}
