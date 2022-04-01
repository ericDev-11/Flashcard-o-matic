import React, { useState } from "react";
import CreateDeckBreadcrumbNav from "./BreadcrumbNavs/CreateDeckBreadcrumbNav";
import DeckForm from "./Forms/DeckForm";

export default function CreateDeck() {
  const initFormState = {
    name: "",
    description: ""
  };
  const [deck, setDeck] = useState({ ...initFormState });

  return (
    <div>
      <CreateDeckBreadcrumbNav />
      <h1>Create Deck</h1>
      <DeckForm deck={deck} setDeck={setDeck} />
    </div>
  );
}
