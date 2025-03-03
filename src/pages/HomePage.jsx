import axios from "../api/axios";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Heading from "../components/ui/Heading";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-5 text-blue-950">
        <Heading level={3}>Film in evidenza</Heading>
      </div>
      <ul className="grid grid-cols-12 gap-6">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="col-span-12 md:col-span-6 lg:col-span-4"
          >
            <Card
              image={movie.image}
              title={movie.title}
              director={movie.director}
              content={movie.abstract}
              vote={movie.avg_vote}
              link={`/movies/${movie.id}`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
