// src/pages/HomePage/HomePage.jsx

import { useEffect, useState } from "react";
import { getTrendingFilms } from "../../js/films-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingFilms = async () => {
      try {
        setIsLoading(true);
        const data = await getTrendingFilms();
        setFilms(data);
      } catch (error) {
        console.error("Error fetching trending films:", error);
        setError(error);
        setFilms([]); // Встановіть порожній масив у разі помилки
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingFilms();
  }, []);

  if (isLoading) {
    return (
      <main className={styles.homeContainer}>
        <h1 className={styles.pageTitle}>Trending Today</h1>
        <Loader />
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.homeContainer}>
        <h1 className={styles.pageTitle}>Trending Today</h1>
        <p>Something went wrong while fetching movies. Please try again later.</p>
      </main>
    );
  }

  return (
    <main className={styles.homeContainer}>
      <h1 className={styles.pageTitle}>Trending Today</h1>
      {films.length > 0 ? <MovieList movies={films} /> : <p>No movies found.</p>}
    </main>
  );
};

export default HomePage;