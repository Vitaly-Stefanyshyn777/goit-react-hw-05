// src/components/MovieItem/MovieItem.jsx

import { format } from "date-fns";
import styles from "./MovieItem.module.css";
// import defaultPoster from "../../assets/img/image-not-found.jpg"; // Правильний шлях та назва файлу

const MovieItem = ({ filmData: { poster_path, title, release_date, vote_average } }) => {
  const formattedDate = release_date ? format(new Date(release_date), "MMMM dd, yyyy") : "Unknown";
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultPoster;
  const rating = vote_average ? vote_average.toFixed(1) : "N/A";

  return (
    <div className={styles.movieItem}>
      <img
        className={styles.posterImage}
        src={imageUrl}
        alt={title}
        width="350"
        height="500"
      />
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{title}</h3>
        <p className={styles.movieReleaseDate}>Release Date: {formattedDate}</p>
        <p className={styles.movieRating}>Rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieItem;