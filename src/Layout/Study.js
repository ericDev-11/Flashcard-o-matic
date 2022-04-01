import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import StudyBreadcrumbNav from "./BreadcrumbNavs/StudyBreadcrumbNav";
import AddCardButton from "./CardButtons/AddCardButton";
import FlipCardButton from "./CardButtons/FlipCardButton";
import NextCardButton from "./CardButtons/NextCardButton";

export default function Study() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const [currentCardSide, setCurrentCardSide] = useState("");
  const deckId = useParams().deckId;

  useEffect(() => {
    const ac = new AbortController();
    async function loadDeck() {
      const response = await readDeck(deckId, ac.signal);
      setDeck(response);
      setCards(response.cards);
      setCurrentCard(response.cards[0]);
      if (response.cards[0]) {
        setCurrentCardSide(response.cards[0].front);
      }
    }
    loadDeck();
  }, [deckId]);

  if (cards.length < 3) {
    return (
      <div>
        <StudyBreadcrumbNav deck={deck} />
        <h1>Study: {deck.name}</h1>
        <h3>Not enough cards!</h3>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
        <AddCardButton deck={deck} />
      </div>
    );
  } else {
    return (
      <div>
        <StudyBreadcrumbNav deck={deck} />
        <h1>Study: {deck.name}</h1>
        <div className="card" key={currentCard.id}>
          <div className="card-body">
            <div className="justify-content-between">
              <h3 className="card-title">
                Card {cards.indexOf(currentCard) + 1} of {cards.length}
              </h3>
              <p className="card-text">{currentCardSide}</p>
              <div className="d-flex mr-auto">
                <FlipCardButton
                  currentCard={currentCard}
                  currentCardSide={currentCardSide}
                  setCurrentCardSide={setCurrentCardSide}
                />
                <NextCardButton
                  deck={deck}
                  cards={cards}
                  currentCard={currentCard}
                  setCurrentCard={setCurrentCard}
                  currentCardSide={currentCardSide}
                  setCurrentCardSide={setCurrentCardSide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
