import React from "react";
import { useHistory } from "react-router-dom";
import { createCard, updateCard } from "../../utils/api";

export default function CardFrom({
  deckId,
  card,
  setCard,
  initFormState,
  btnLabel,
}) {
  const history = useHistory();
  const handleChange = ({ target }) =>
    setCard({
      ...card,
      [target.name]: target.value,
    });
  const handleSubmit = (event) => {
    event.preventDefault();
    const ac = new AbortController();
    if (deckId) {
      async function newCard() {
        await createCard(deckId, card, ac.signal);
        setCard(initFormState);
      }
      newCard();
    } else {
      async function updateCardFinal() {
        const response = await updateCard(card, ac.signal);
        history.push(`/decks/${response.deckId}`);
      }
      updateCardFinal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          id="front"
          name="front"
          rows={2}
          placeholder="Front side of card"
          onChange={handleChange}
          value={card.front}
          style={{ width: "100%" }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          id="back"
          name="back"
          rows={2}
          placeholder="Back side of card"
          onChange={handleChange}
          value={card.back}
          style={{ width: "100%" }}
        />
      </div>
      <div className="mr-auto">
        <button
          className="btn btn-secondary btn-lg mb-2 mx-2"
          type="button"
          onClick={() => history.push(`/decks/${deckId}`)}
        >
          <span className="oi oi-x"> {btnLabel}</span>
        </button>
        <button className="btn btn-primary btn-lg mb-2" type="submit">
          <span className="oi oi-check"> Submit</span>
        </button>
      </div>
    </form>
  );
}
