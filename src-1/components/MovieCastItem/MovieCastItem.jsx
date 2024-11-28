// src/components/MovieCastItem/MovieCastItem.jsx

import styles from "./MovieCastItem.module.css";
// import defaultImage from "../../assets/img/image-not-found.jpg"; // Виправлений шлях

const MovieCastItem = ({ castData: { profile_path, name, character } }) => {
  const imageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
    : defaultImage;

  return (
    <div className={styles.castCard}>
      <img
        className={styles.castImage}
        src={imageUrl}
        alt={name}
        width="150"
        height="225"
      />
      <div className={styles.castDetails}>
        <h3 className={styles.castName}>{name}</h3>
        <p className={styles.castRole}>
          <span className={styles.label}>as</span> {character}
        </p>
      </div>
    </div>
  );
};

export default MovieCastItem;