import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readCard, readDeck } from "../utils/api";
import EditCardBreadcrumbNav from "./BreadcrumbNavs/EditCardBreadcrumbNav";
import CardForm from "./Forms/CardForm";

export default function EditCard() {
  const initFormState = {
    id: "",
    front: "",
    back: "",
  };
  const btnLabel = "Cancel";
  const [deck, setDeck] = useState({});
  const [card, setCard] = useState({ ...initFormState });
  const deckId = useParams().deckId;
  const cardId = useParams().cardId;

  useEffect(() => {
    const ac = new AbortController();
    async function loadDeck() {
      const response = await readDeck(deckId, ac.signal);
      setDeck(response);
    }
    loadDeck();
  }, [deckId]);

  useEffect(() => {
    const ac = new AbortController();
    async function loadCard() {
      const response = await readCard(cardId, ac.signal);
      setCard(response);
    }
    loadCard();
  }, [cardId]);

  return (
    <div>
      <EditCardBreadcrumbNav deck={deck} card={card} />
      <h1>Edit Card</h1>
      <CardForm
        deckId={deckId}
        cardId={cardId}
        card={card}
        setCard={setCard}
        btnLabel={btnLabel}
      />
    </div>
  );
}
