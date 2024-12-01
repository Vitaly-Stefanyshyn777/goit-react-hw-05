// import { Link, useLocation } from "react-router-dom";

// import MovieItem from "../MovieItem/MovieItem";
// import style from "../MovieList/MovieList.module.css";

// const MovieList = ({ filmsList }) => {
//   const location = useLocation();
//   return (
//     <div className={style.containerList}>
//       <ul className={style.filmsList}>
//         {filmsList.map((film) => (
//           <li key={film.id} className={style.filmItem}>
//             <Link to={`/movies/${film.id}`} state={{ from: location }}>
//               <MovieItem dataFilm={film} />
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default MovieList;

import { Link, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import styles from "./MovieList.module.css";

const MovieList = ({ filmsList }) => {
  const location = useLocation();

  return (
    <div className={styles.containerList}>
      <ul className={styles.filmsList}>
        {filmsList.map((film) => (
          <li key={film.id} className={styles.filmItem}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              <MovieItem dataFilm={film} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;



// -----------------------------------Скелетон-----------------------------
// import { Link, useLocation } from "react-router-dom";
// import MovieItem from "../MovieItem/MovieItem";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import { useState, useEffect } from "react";
// import styles from "./MovieList.module.css";

// const MovieList = ({ filmsList, initialLoadingTime = 300000 }) => {
//   const location = useLocation();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, initialLoadingTime);

//     return () => clearTimeout(timer); // Очищення таймера при розмонтуванні компонента
//   }, [initialLoadingTime]);

//   return (
//     <div className={styles.containerList}>
//       {isLoading ? (
//         <ul className={styles.filmsList}>
//           {/* Скелетони для завантаження */}
//           {Array.from({ length: 10 }).map((_, index) => (
//             <li key={index} className={styles.filmItem}>
//               <Skeleton height={300} width={200} style={{ marginBottom: "10px" }} />
//               <Skeleton height={20} width="80%" />
//               <Skeleton height={20} width="60%" />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <ul className={styles.filmsList}>
//           {filmsList.map((film) => (
//             <li key={film.id} className={styles.filmItem}>
//               <Link to={`/movies/${film.id}`} state={{ from: location }}>
//                 <MovieItem dataFilm={film} />
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default MovieList;
// -----------------------------------Скелетон-----------------------------

