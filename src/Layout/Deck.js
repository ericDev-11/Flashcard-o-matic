import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import DeckBreadcrumbNav from "./BreadcrumbNavs/DeckBreadcrumbNav";
import EditDeckButton from "./DeckButtons/EditDeckButton";
import StudyDeckButton from "./DeckButtons/StudyDeckButton";
import DeleteDeckButton from "./DeckButtons/DeleteDeckButton";
import AddCardButton from "./CardButtons/AddCardButton";
import EditCardButton from "./CardButtons/EditCardButton";
import DeleteCardButton from "./CardButtons/DeleteCardButton";

export default function Deck() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const deckId = useParams().deckId;

  useEffect(() => {
    const ac = new AbortController();
    async function loadDeck() {
      const response = await readDeck(deckId, ac.signal);
      setDeck(response);
      setCards(response.cards);
    }
    loadDeck();
  }, [deckId]);

  return (
    <div>
      <DeckBreadcrumbNav deck={deck} />
      <h5>{deck.name}</h5>
      <p>{deck.description}</p>
      <div className="d-flex">
        <div className="mr-auto">
          <EditDeckButton deck={deck} />
          <StudyDeckButton deck={deck} />
          <AddCardButton deck={deck} />
        </div>
        <div>
          <DeleteDeckButton deck={deck} />
        </div>
      </div>
      <h3>Cards</h3>
      {cards.map((card) => {
        return (
          <div className="card" key={card.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div className="col">
                  <p className="card-text mr-2 mb-4 p-2">
                    {card.front}
                  </p>
                </div>
                <div className="col">
                  <p className="card-text ml-2 mb-4 p-2">
                    {card.back}
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <div className="ml-auto">
                  <EditCardButton deck={deck} card={card} />
                  <DeleteCardButton card={card} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
