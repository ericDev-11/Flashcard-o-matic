import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api";
import AddCardBreadcrumbNav from "./BreadcrumbNavs/AddCardBreadcrumbNav";
import CardForm from "./Forms/CardForm";

export default function AddCard() {
  const initFormState = {
    deckId: "",
    front: "",
    back: "",
  };
  const btnLabel = "Done";
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({ ...initFormState });
  const deckId = useParams().deckId;

  useEffect(() => {
    const ac = new AbortController();
    async function loadDeck() {
      const response = await readDeck(deckId, ac.signal);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]);

  return (
    <div>
      <AddCardBreadcrumbNav deck={deck} />
      <h1>{deck.name}: Add Card</h1>
      <CardForm
        deckId={deckId}
        card={card}
        setCard={setCard}
        initFormState={initFormState}
        btnLabel={btnLabel}
      />
    </div>
  );
}
