import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import Button from "./ui/Button";

const initialFormData = {
  name: "",
  vote: 0,
  text: "",
};

export default function FormAddReviews({ onFormSubmitted }) {
  const [formData, setFormData] = useState(initialFormData);
  const { id } = useParams();

  const handleField = (fieldName, fieldValue) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [fieldName]: fieldValue,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`/movies/${id}/reviews`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setFormData(initialFormData);
        onFormSubmitted();
      });
  };

  return (
    <form className="mt-2" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-2">
        <label className="font-semibold" htmlFor="name">
          Nome
        </label>
        <input
          className="bg-gray-100 p-2 rounded-md"
          type="text"
          id="name"
          name="name"
          placeholder="Inserisci il tuo nome"
          value={formData.name}
          onChange={(event) => handleField("name", event.target.value)}
          required
        />
        <label className="font-semibold" htmlFor="vote">
          Voto
        </label>
        <input
          className="bg-gray-100 p-2 rounded-md"
          type="number"
          id="vote"
          name="vote"
          placeholder="Inserisci il voto"
          min={0}
          max={5}
          value={formData.vote}
          onChange={(event) => handleField("vote", event.target.value)}
          required
        />
        <label className="font-semibold" htmlFor="text">
          Recensione
        </label>
        <textarea
          className="bg-gray-100 p-2 rounded-md"
          name="text"
          id="text"
          placeholder="Inserisci recensione"
          rows={5}
          value={formData.text}
          onChange={(event) => handleField("text", event.target.value)}
          required
        />
        <div className="text-center mt-4">
          <Button type="submit">Invia</Button>
        </div>
      </div>
    </form>
  );
}
