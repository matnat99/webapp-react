import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function MoviePage() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        if (err.response?.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, navigate]);

  return (
    <div>
      <h1>
        <strong>Film:</strong> {movie.title}
      </h1>
      <h2>
        <strong>Regista:</strong> {movie.director}
      </h2>
      <p>
        <strong>Genere:</strong> {movie.genre}
      </p>
      <p>
        <strong>Anno di uscita:</strong> {movie.release_year}
      </p>
      <p>{movie.abstract}</p>

      <h2>Recensioni</h2>
      {movie.reviews && movie.reviews.length > 0 ? (
        <ul>
          {movie.reviews.map((review) => (
            <li key={review.id}>
              <span>{review.name}</span> - Voto: {review.vote}/5
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessuna recensione disponibile.</p>
      )}
    </div>
  );
}
