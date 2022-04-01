import React from "react";
import { useHistory } from "react-router-dom";

export default function AddCardButton({ deck }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-primary btn-lg mb-2"
      onClick={() => history.push(`/decks/${deck.id}/cards/new`)}
    >
      <span className="oi oi-plus"> Add Cards</span>
    </button>
  );
}
