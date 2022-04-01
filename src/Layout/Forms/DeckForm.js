import React from "react";
import { useHistory } from "react-router-dom";
import { createDeck, updateDeck } from "../../utils/api";

export default function DeckForm({ deck, setDeck }) {
  const history = useHistory();
  const handleChange = ({ target }) =>
    setDeck({
      ...deck,
      [target.name]: target.value
    });
  const handleCancel = (event) => {
    event.preventDefault();
    if (!deck.id) {
      history.push("/");
    } else {
      history.push(`/decks/${deck.id}`)
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const ac = new AbortController();
    if (!deck.id) {
      async function newDeck() {
        const response = await createDeck(deck, ac.signal);
        history.push(`/decks/${response.id}`);
      }
      newDeck();
    } else {
      async function updateDeckFinal() {
        await updateDeck(deck, ac.signal);
        history.push(`/decks/${deck.id}`);
      }
      updateDeckFinal();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Deck Name"
          onChange={handleChange}
          value={deck.name}
          style={{ width: "100%" }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={4}
          placeholder="Breif description of the deck"
          onChange={handleChange}
          value={deck.description}
          style={{ width: "100%" }}
        />
      </div>
      <div className="mr-auto">
        <button
          className="btn btn-secondary btn-lg mb-2 mx-2"
          type="button"
          onClick={handleCancel}
        >
          <span className="oi oi-x"> Cancel</span>
        </button>
        <button className="btn btn-primary btn-lg mb-2" type="submit">
          <span className="oi oi-check"> Submit</span>
        </button>
      </div>
    </form>
  );
}
