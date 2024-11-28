// import { format } from "date-fns";
// import style from "../MovieItem/MovieItem.module.css";
// import notFoundImg from "../../assets/img/image-not-found.jpg";

// const MovieItem = ({
//   dataFilm: { poster_path, title, release_date, vote_average },
// }) => {
//   const formatDate = (date) => {
//     if (!date || isNaN(new Date(date))) {
//       return "Unknown date";
//     }
//     return format(new Date(date), "MMMM dd yyyy");
//   };
//   const urlImg = `https://image.tmdb.org/t/p/w500/${poster_path}`;
//   const voteAverage = Number(vote_average).toFixed(2);
//   return (
//     <div>
//       <img
//         className={style.movieImg}
//         src={poster_path ? urlImg : notFoundImg}
//         alt={title}
//         width="350"
//         height="500"
//       />
//       <div className={style.trandingThumb}>
//         <h3 className={style.trandingTitle}>{title}</h3>
//         <p className={style.trandingText}>
//           Release date: {formatDate(release_date)}
//         </p>
//         {voteAverage !== "0.00" && (
//           <p className={style.trandingText}>Rating: {voteAverage}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MovieItem;

import styles from "./MovieItem.module.css";
import defaultImage from "../../assets/img/image-not-found.jpg";
import { format } from "date-fns";

const MovieItem = ({ dataFilm }) => {
  const { poster_path, title, release_date, vote_average } = dataFilm;

  const formattedDate = release_date
    ? format(new Date(release_date), "MMMM dd yyyy")
    : "Unknown date";
  const imageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : defaultImage;
  const voteAverage = vote_average ? vote_average.toFixed(1) : null;

  return (
    <div className={styles.movieItem}>
      <img
        className={styles.movieImg}
        src={imageUrl}
        alt={title}
        width="350"
        height="500"
      />
      <div className={styles.movieInfo}>
        <h3 className={styles.movieTitle}>{title}</h3>
        <p className={styles.movieText}>Release date: {formattedDate}</p>
        {voteAverage && <p className={styles.movieText}>Rating: {voteAverage}</p>}
      </div>
    </div>
  );
};

export default MovieItem;