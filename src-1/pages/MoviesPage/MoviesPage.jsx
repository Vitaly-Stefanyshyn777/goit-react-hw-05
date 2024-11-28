import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { searchFilms } from "../../js/films-api"; // Виправлений шлях
import Loader from "../../components/Loader/Loader";
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query) return;

      try {
        setIsLoading(true);
        const data = await searchFilms(query, currentPage);
        setMovies(data.results);
        setTotalPages(data.total_pages);

        if (data.total_results === 0) {
          toast.error("No films found for your search query.");
        } else {
          toast.success(`Found ${data.total_results} films.`);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchResults();
  }, [query, currentPage]);

  const handleSearch = (searchQuery) => {
    setSearchParams({ search: searchQuery });
    setCurrentPage(1);
  };

  return (
    <main className={styles.moviesPage}>
      <SearchBox onSearch={handleSearch} />
      <Toaster position="top-right" reverseOrder={false} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {movies.length > 0 && <MovieList movies={movies} />}
          {movies.length > 0 && (
            <div className={styles.pagination}>
              <button
                className={styles.paginationButton}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous Page
              </button>
              <button
                className={styles.paginationButton}
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next Page
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default MoviesPage;