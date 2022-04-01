import React from "react";

export default function FlipCardButton({
  currentCard,
  currentCardSide,
  setCurrentCardSide
}) {
  const handleFlipClick = () => {
    if (currentCardSide === currentCard.front) {
      setCurrentCardSide(currentCard.back);
    } else {
      setCurrentCardSide(currentCard.front);
    }
  };

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg mb-2"
      onClick={handleFlipClick}
    >
      <span className="oi oi-loop"> Flip</span>
    </button>
  );
}
