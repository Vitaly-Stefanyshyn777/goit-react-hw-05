import { useEffect, useState } from "react";
import { getFilmsTrendingAccess } from "../../js/films-api";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import style from "../HomePage/HomePage.module.css";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";


function HomePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handelSearch = async () => {
    try {
      setLoading(true);
      setFilms([]);
      const dataFilms = await getFilmsTrendingAccess();
      setFilms(dataFilms);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handelSearch();
  }, []);

  return (
    <main className={style.mainSection}>
      <h1 className={style.mainTitle}>Trending today</h1>
      {loading && <Loader />}
      <MovieList filmsList={films} />
    </main>
  );
}

export default HomePage;


// --------------------------Скелетон--------------------------------------

// import { useEffect, useState } from "react";
// import { getFilmsTrendingAccess } from "../../js/films-api";
// import MovieList from "../../components/MovieList/MovieList";
// import MoviesSkeleton from "../../components/Movies/MoviesSkeleton";
// import style from "../HomePage/HomePage.module.css";

// const HomePage = () => {
//   const [films, setFilms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showSkeleton, setShowSkeleton] = useState(false); // Стан для скелетона

//   const handelSearch = async () => {
//     try {
//       setLoading(true);
//       setShowSkeleton(true); // Показуємо скелетон одразу
//       const dataFilms = await getFilmsTrendingAccess();

//       // Мінімальний час показу скелетона (наприклад, 2 секунди)
//       setTimeout(() => {
//         setFilms(dataFilms);
//         setShowSkeleton(false); // Ховаємо скелетон
//         setLoading(false);
//       }, 2000); // 2 секунди
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//       setShowSkeleton(false);
//     }
//   };

//   useEffect(() => {
//     handelSearch();
//   }, []);

//   return (
//     <main className={style.mainSection}>
//       <h1 className={style.mainTitle}>Trending today</h1>
//       {/* Умовне відображення скелетона або списку */}
//       {showSkeleton ? (
//         <MoviesSkeleton count={8} /> // Можна вказати кількість скелетонів
//       ) : (
//         <MovieList filmsList={films} />
//       )}
//     </main>
//   );
// };

// export default HomePage;

// --------------------------Скелетон--------------------------------------

// import { Field, Form, Formik } from "formik";
// // import styles from "./SearchBox.module.css";
// import styles from "../../components/SearchBox/SearchBox.module.css";
// // import styles from "..SearchBox/SearchBox.module.css";
// import toast from "react-hot-toast";

// const SearchBox = ({ onSubmit }) => {
//   const handleSubmit = (values, actions) => {
//     const formattedSearch = values.search.trim().toLowerCase();
//     if (!formattedSearch) {
//       toast.error("The search field cannot be empty!");
//       return;
//     }
//     onSubmit(formattedSearch);
//     actions.resetForm();
//   };

//   return (
//     <div className={styles.searchThumb}>
//       <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
//         <Form>
//           <Field
//             className={styles.inputSearch}
//             type="text"
//             name="search"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search films"
//           />
//           <button className={styles.btnSearch} type="submit">
//             Search
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// };

// export default SearchBox;