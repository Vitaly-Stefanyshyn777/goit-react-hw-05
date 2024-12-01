// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import MovieList from "../../components/MovieList/MovieList.jsx";
// import SearchBox from "../../components/SearchBox/SearchBox.jsx";
// import { getFilmsSearch } from "../../js/films-api.js";
// import Loader from "../../components/Loader/Loader.jsx";
// import style from "../MoviesPage/MoviesPage.module.css";

// const MoviesPage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get("search");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setSearchResults([]);
//     const searchData = async (query, page) => {
//       try {
//         setLoading(true);

//         const response = await getFilmsSearch(query, page);
//         setSearchResults(response.results);
//         setTotalPages(response.total_pages);

//         if (!response.total_results) {
//           toast(
//             "Sorry, we have not found the films for your request. Try to write it differently.",
//             {
//               duration: 5000,
//             }
//           );
//         } else {
//           toast.success(`Wow! We found ${response.total_results} films`);
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (searchQuery) {
//       searchData(searchQuery, currentPage);
//     }
//   }, [searchQuery, currentPage]);

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePreviousPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };
//   return (
//     <main>
//       <section className={style.moviesSearch}>
//         <SearchBox onSubmit={(query) => setSearchParams({ search: query })} />
//         <Toaster
//           position="top-right"
//           reverseOrder={false}
//           toastOptions={{
//             className: style.toastTextCenter,
//           }}
//         />
//         {loading && <Loader />}
//         {searchResults.length !== 0 && <MovieList filmsList={searchResults} />}
//         {searchResults.length !== 0 && (
//           <div className={style.btnPaginationThumb}>
//             <button
//               className={style.btnPagination}
//               onClick={handlePreviousPage}
//               disabled={currentPage === 1}
//             >
//               Previous Page
//             </button>
//             <button
//               className={style.btnPagination}
//               onClick={handleNextPage}
//               disabled={currentPage === totalPages}
//             >
//               Next Page
//             </button>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };
// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import MovieList from "../../components/MovieList/MovieList";
// import SearchBox from "../../components/SearchBox/SearchBox";
// import { getFilmsSearch } from "../../js/films-api";
// // import Loader from "../../components/Loader/Loader";
// import styles from "./MoviesPage.module.css";
// // import Skeleton from 'react-loading-skeleton';  // Ось так має виглядати імпорт
// import MoviesSkeleton from "../../components/Movies/MoviesSkeleton";


// const MoviesPage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get("search");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!searchQuery) return;

//     const searchData = async () => {
//       setLoading(true);

//       // Додаємо штучну затримку для імітації часу завантаження
//       setTimeout(async () => {
//         try {
//           const response = await getFilmsSearch(searchQuery);
//           setSearchResults(response.results);
//           if (!response.total_results) {
//             toast.error(
//               "Sorry, we have not found the films for your request. Try to write it differently."
//             );
//           } else {
//             toast.success(`Wow! We found ${response.total_results} films`);
//           }
//         } catch (error) {
//           console.error(error);
//         } finally {
//           setLoading(false);
//         }
//       }, 2000);  // Затримка в 2 секунди (можете змінити час)
//     };

//     searchData();
//   }, [searchQuery]);

//   const handleSearchSubmit = (query) => {
//     setSearchParams({ search: query });
//   };

//   return (
//     <main>
//       <section className={styles.moviesSearch}>
//         <SearchBox onSubmit={handleSearchSubmit} />
//         <Toaster position="top-right" reverseOrder={false} />

//         {loading ? (
//           <MoviesSkeleton />  // Викликаємо компонент для скелетона
//         ) : searchResults.length > 0 ? (
//           <MovieList filmsList={searchResults} />
//         ) : (
//           <p>No results found.</p>
//         )}
//       </section>
//     </main>
//   );
// };

// export default MoviesPage;
// -----------------------------наче працює-----------------------------------

// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import MovieList from "../../components/MovieList/MovieList";
// import SearchBox from "../../components/SearchBox/SearchBox";
// import { getFilmsSearch } from "../../js/films-api";
// // import Loader from "../../components/Loader/Loader";
// import styles from "./MoviesPage.module.css";

// const MoviesPage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get("search");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!searchQuery) return;

//     const searchData = async () => {
//       setLoading(true);
//       try {
//         const response = await getFilmsSearch(searchQuery);
//         setSearchResults(response.results);
//         if (!response.total_results) {
//           toast.error(
//             "Sorry, we have not found the films for your request. Try to write it differently."
//           );
//         } else {
//           toast.success(`Wow! We found ${response.total_results} films`);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     searchData();
//   }, [searchQuery]);

//   const handleSearchSubmit = (query) => {
//     setSearchParams({ search: query });
//   };

//   return (
//     <main>
//       <section className={styles.moviesSearch}>
//         <SearchBox onSubmit={handleSearchSubmit} />
//         <Toaster position="top-right" reverseOrder={false} />

//         {loading ? (
//           <div className={styles.skeletonContainer}>
//             {/* Тут більше немає скелетона */}
//           </div>
//         ) : searchResults.length > 0 ? (
//           <MovieList filmsList={searchResults} />
//         ) : (
//           <p>No results found.</p>
//         )}
//       </section>
//     </main>
//   );
// };

// export default MoviesPage;
// // -----------------------------наче працює-----------------------------------


// import { useSearchParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import MovieList from "../../components/MovieList/MovieList";
// import SearchBox from "../../components/SearchBox/SearchBox";
// import { getFilmsSearch } from "../../js/films-api";
// // import Loader from "../../components/Loader/Loader";
// import styles from "./MoviesPage.module.css";

// const MoviesPage = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const searchQuery = searchParams.get("search");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!searchQuery) return;

//     const searchData = async () => {
//       setLoading(true);
//       try {
//         const response = await getFilmsSearch(searchQuery);
//         setSearchResults(response.results);
//         if (!response.total_results) {
//           toast.error(
//             "Sorry, we have not found the films for your request. Try to write it differently."
//           );
//         } else {
//           toast.success(`Wow! We found ${response.total_results} films`);
//         }
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     searchData();
//   }, [searchQuery]);

//   const handleSearchSubmit = (query) => {
//     setSearchParams({ search: query });
//   };

//   return (
//     <main>
//       <section className={styles.moviesSearch}>
//         <SearchBox onSubmit={handleSearchSubmit} />
//         <Toaster position="top-right" reverseOrder={false} />

//         {loading ? (
//           <div className={styles.loadingContainer}>
//             {/* Простий текст завантаження */}
//             <p>Loading...</p>
//           </div>
//         ) : searchResults.length > 0 ? (
//           <MovieList filmsList={searchResults} />
//         ) : (
//           <p>No results found.</p>
//         )}
//       </section>
//     </main>
//   );
// };

// export default MoviesPage;

import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import MovieList from "../../components/MovieList/MovieList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { getFilmsSearch } from "../../js/films-api"; // Актуальний API для пошуку фільмів
import styles from "./MoviesPage.module.css";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = searchQuery || "popular"; // Якщо немає запиту, шукаємо популярні фільми
        const response = await getFilmsSearch(query);
        
        setSearchResults(response.results);
        if (response.total_results === 0) {
          toast.error("No results found.");
        } else {
          toast.success(`Found ${response.total_results} films.`);
        }
      } catch (error) {
        console.error("Error fetching films:", error);
        toast.error("Something went wrong, please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]); // Виконується щоразу, коли змінюється searchQuery

  const handleSearchSubmit = (query) => {
    setSearchParams({ search: query }); // Оновлює параметри URL при пошуку
  };

  return (
    <main>
      <section className={styles.moviesSearch}>
        <SearchBox onSubmit={handleSearchSubmit} />
        <Toaster position="top-right" reverseOrder={false} />

        {loading ? (
          <div className={styles.loadingContainer}>
            <p>Loading...</p>
          </div>
        ) : searchResults.length > 0 ? (
          <MovieList filmsList={searchResults} />
        ) : (
          <p>No results found.</p>
        )}
      </section>
    </main>
  );
};

export default MoviesPage;