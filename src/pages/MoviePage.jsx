import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Heading from "../components/ui/Heading";
import Stars from "../components/ui/Stars";

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
    <div className="max-w-6xl mx-auto px-4">
      <Link to="/" className="text-blue-950">
        <Heading level={6}>
          <i className="fa-solid fa-arrow-left-long"></i> Indietro
        </Heading>
      </Link>
      <div className="grid grid-cols-12 gap-2 mt-3 bg-white rounded-t-xl shadow-md shadow-black">
        <div className="col-span-12 md:col-span-4">
          <img className="w-full" src={movie.image} alt={movie.title} />
        </div>
        <div className="col-span-12 md:col-span-8 p-4 space-y-2">
          <Heading level={3}>{movie.title}</Heading>
          <Heading level={5}>
            <strong>Regista:</strong> {movie.director}
          </Heading>
          <Heading level={6}>
            <strong>Genere:</strong> {movie.genre}
          </Heading>
          <Heading level={6}>
            <strong>Anno di uscita:</strong> {movie.release_year}
          </Heading>
          <p>
            <strong>Trama: </strong>
            {movie.abstract}
          </p>
        </div>
      </div>
      <div className="mt-1 p-4 bg-white rounded-b-xl shadow-md shadow-black">
        <Heading level={4}>Recensioni</Heading>
        {movie.reviews && movie.reviews.length > 0 ? (
          <ul>
            {movie.reviews.map((review) => (
              <li key={review.id} className="mt-4 not-last:border-b-1">
                <strong>{review.name}</strong>
                <Stars vote={review.vote} />
                <p>{review.text}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Nessuna recensione disponibile.</p>
        )}
      </div>
    </div>
  );
}
