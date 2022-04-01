import React from "react";
import { useHistory } from "react-router-dom";

export default function ViewDeckButton({ deck }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg mb-2"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      <span className="oi oi-eye"> View</span>
    </button>
  );
}
