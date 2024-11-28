// src/components/MovieList/MovieList.jsx

import { Link, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  if (!movies || movies.length === 0) {
    return <p>No movies found.</p>; // Додайте повідомлення для порожнього списку
  }

  return (
    <div className={styles.movieListContainer}>
      <ul className={styles.movieGrid}>
        {movies.map((movie) => (
          <li key={movie.id} className={styles.movieGridItem}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              <MovieItem filmData={movie} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;