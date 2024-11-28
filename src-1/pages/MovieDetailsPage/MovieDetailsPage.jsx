import { Link, NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { format } from "date-fns";
import { GoArrowLeft } from "react-icons/go";
import { Suspense, useEffect, useState } from "react";
import { getFilmDetails } from '../../js/films-api';
import Loader from "../../components/Loader/Loader";
// import defaultImage from "../../assets/images/default-poster.jpg";
import defaultImage from "../../assets/img/image-not-found.jpg";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const backLink = location.state?.from || "/";

  useEffect(() => {
    const fetchFilmDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getFilmDetails(id);
        setFilm(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilmDetails();
  }, [id]);

  if (isLoading) return <Loader />;

  if (!film) return null;

  const releaseDate = film.release_date ? format(new Date(film.release_date), "MMMM dd, yyyy") : "Unknown";
  const userScore = film.vote_average ? (film.vote_average * 10).toFixed(0) : "N/A";
  const imageUrl = film.poster_path ? `https://image.tmdb.org/t/p/w500/${film.poster_path}` : defaultImage;

  return (
    <section className={styles.detailsSection}>
      <Link to={backLink}>
        <button className={styles.backButton}>
          <GoArrowLeft size={20} /> Back
        </button>
      </Link>

      <div className={styles.detailsContainer}>
        <img
          className={styles.poster}
          src={imageUrl}
          alt={film.title}
          width="350"
          height="500"
        />
        <div className={styles.info}>
          <h2 className={styles.title}>{film.title}</h2>
          <p className={styles.tagline}>{film.tagline}</p>
          <p className={styles.releaseDate}>
            <span className={styles.label}>Release Date:</span> {releaseDate}
          </p>
          <p className={styles.userScore}>
            <span className={styles.label}>User Score:</span> {userScore}%
          </p>
          <h3 className={styles.overviewTitle}>Overview</h3>
          <p className={styles.overview}>{film.overview}</p>
          <h3 className={styles.genresTitle}>Genres</h3>
          <ul className={styles.genresList}>
            {film.genres.map((genre) => (
              <li key={genre.id} className={styles.genreItem}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <nav className={styles.additionalInfo}>
        <NavLink className={styles.infoLink} to="cast" state={location.state}>
          Cast
        </NavLink>
        <NavLink className={styles.infoLink} to="reviews" state={location.state}>
          Reviews
        </NavLink>
      </nav>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </section>
  );
};

export default MovieDetailsPage;