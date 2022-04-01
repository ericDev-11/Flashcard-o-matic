import React from "react";
import { useHistory } from "react-router-dom";

export default function EditCardButton({ deck, card }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg mb-2 mx-2"
      onClick={() => history.push(`/decks/${deck.id}/cards/${card.id}/edit`)}
    >
      <span className="oi oi-pencil"> Edit</span>
    </button>
  );
}