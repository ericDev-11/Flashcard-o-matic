import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api/index";

export default function DeleteDeckButton({ deck }) {
  const history = useHistory();
  const handleDeleteClick = () => {
    const warning = window.confirm(
      `Are you sure you want to delete the "${deck.name}" deck?

You will not be able to recover it!`
    );
    if (warning) {
      const ac = new AbortController();
      async function deleteDeckFinal() {
        await deleteDeck(deck.id, ac.signal);
      }
      deleteDeckFinal();
      history.push("/");
    }
    history.go(0);
  };

  return (
    <button
      type="button"
      className="btn btn-danger btn-lg mb-2"
      onClick={handleDeleteClick}
    >
      <span className="oi oi-trash"> Delete</span>
    </button>
  );
}
