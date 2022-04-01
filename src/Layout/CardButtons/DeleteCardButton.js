import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../utils/api/index";

export default function DeleteCardButton({ card }) {
  const history = useHistory();
  const handleDeleteClick = () => {
    const warning = window.confirm(
      `Are you sure you want to delete this card?

You will not be able to recover it!`
    );
    if (warning) {
      const ac = new AbortController();
      async function deleteCardFinal() {
        await deleteCard(card.id, ac.signal);
      }
      deleteCardFinal();
      history.go(0);
    }
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
