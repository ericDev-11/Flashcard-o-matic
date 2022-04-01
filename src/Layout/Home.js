import React, { useState, useEffect } from "react";
import { listDecks } from "../utils/api/index";
import CreateDeckButton from "./DeckButtons/CreateDeckButton";
import ViewDeckButton from "./DeckButtons/ViewDeckButton";
import StudyDeckButton from "./DeckButtons/StudyDeckButton";
import DeleteDeckButton from "./DeckButtons/DeleteDeckButton";

export default function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    async function loadDecks() {
      const response = await listDecks(ac.signal);
      setDecks(response);
    }
    loadDecks();
  }, []);

  return (
    <div>
      <CreateDeckButton />
      {decks.map((deck) => {
        return (
          <div className="card" key={deck.id}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle text-muted">
                  {deck.cards.length} cards
                </h6>
              </div>
              <p className="card-text">{deck.description}</p>
              <div className="d-flex">
                <div className="mr-auto">
                  <ViewDeckButton deck={deck} />
                  <StudyDeckButton deck={deck} />
                </div>
                <div>
                  <DeleteDeckButton deck={deck} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
