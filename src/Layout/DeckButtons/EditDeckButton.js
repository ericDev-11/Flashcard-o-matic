import React from "react";
import { useHistory } from "react-router-dom";

export default function EditDeckButton({ deck }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg mb-2"
      onClick={() => history.push(`/decks/${deck.id}/edit`)}
    >
      <span className="oi oi-pencil"> Edit</span>
    </button>
  );
}