import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import EditDeckBreadcrumbNav from "./BreadcrumbNavs/EditDeckBreadcrumbNav";
import DeckForm from "./Forms/DeckForm";

export default function EditDeck() {
  const initFormState = {
      id: "",
      name: "",
      description: ""
  };
  const [deck, setDeck] = useState({ ...initFormState });
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
      <EditDeckBreadcrumbNav deck={deck} />
      <h1>Edit Deck</h1>
      <DeckForm deck={deck} setDeck={setDeck} />
    </div>
  );
}
