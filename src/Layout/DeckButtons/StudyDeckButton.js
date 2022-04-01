import React from "react";
import { useHistory } from "react-router-dom";

export default function StudyDeckButton({ deck }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-primary btn-lg mb-2 mx-2"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      <span className="oi oi-book"> Study</span>
    </button>
  );
}
