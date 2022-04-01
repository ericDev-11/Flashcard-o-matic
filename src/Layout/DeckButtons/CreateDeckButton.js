import React from "react";
import { useHistory } from "react-router-dom";

export default function CreateDeckButton() {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary btn-lg mb-2"
      onClick={() => history.push("/decks/new")}
    >
      <span className="oi oi-plus"> Create Deck</span>
    </button>
  );
}
