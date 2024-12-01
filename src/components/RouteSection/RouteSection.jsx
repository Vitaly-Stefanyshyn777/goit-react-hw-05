// import { Route, Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";

// const NotFoundPage = lazy(() =>
//   import("../../pages/NotFoundPage/NotFoundPage")
// );
// const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const MovieDetailsPage = lazy(() =>
//   import("../../pages/MovieDetailsPage/MovieDetailsPage")
// );
// const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
// const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

// const RouteSection = () => {
//   return (
//     <Suspense>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/movies" element={<MoviesPage />} />
//         <Route path="/movies/:id" element={<MovieDetailsPage />}>
//           <Route path="cast" element={<MovieCast />} />
//           <Route path="reviews" element={<MovieReviews />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default RouteSection;

// import { Route, Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";
// import Loader from "../Loader/Loader";

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() =>
//   import("../../pages/MovieDetailsPage/MovieDetailsPage")
// );
// const NotFoundPage = lazy(() =>
//   import("../../pages/NotFoundPage/NotFoundPage")
// );
// const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
// const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

// const RouteSection = () => (
//   <Suspense fallback={<Loader />}>
//     <Routes>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/movies" element={<MoviesPage />} />
//       <Route path="/movies/:id" element={<MovieDetailsPage />}>
//         <Route path="cast" element={<MovieCast />} />
//         <Route path="reviews" element={<MovieReviews />} />
//       </Route>
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   </Suspense>
// );
// --------------------------------Скелетон--------------------------------
// export default RouteSection;
// import { Route, Routes } from "react-router-dom";
// import { Suspense, lazy, useState, useEffect } from "react";
// import Skeleton from 'react-loading-skeleton'; // Імпортуємо Skeleton для використання
// import 'react-loading-skeleton/dist/skeleton.css'; // Імпортуємо стилі для скелетона

// const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() =>
//   import("../../pages/MovieDetailsPage/MovieDetailsPage")
// );
// const NotFoundPage = lazy(() =>
//   import("../../pages/NotFoundPage/NotFoundPage")
// );
// const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
// const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

// const RouteSection = () => {
//   const [loadingDelay, setLoadingDelay] = useState(false); // Стан для контролю часу затримки

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setLoadingDelay(true); // Встановлюємо час затримки для завантаження
//     }, 30000); // Встановіть тут свій бажаний час затримки в мілісекундах (наприклад, 3000мс = 3 секунди)

//     return () => clearTimeout(timeout); // Очищуємо таймаут при демонтажі компонента
//   }, []);

//   return (
//     <Suspense
//       fallback={
//         loadingDelay ? (
//           <div style={{ padding: '20px' }}>
//             {/* Скелетон, який показується до завантаження */}
//             <Skeleton height={50} width="80%" style={{ marginBottom: '10px' }} />
//             <Skeleton height={50} width="80%" style={{ marginBottom: '10px' }} />
//             <Skeleton height={50} width="80%" style={{ marginBottom: '10px' }} />
//           </div>
//         ) : (
//           <div style={{ padding: '20px' }}>
//             {/* Скелетон для коротшої затримки */}
//             <Skeleton height={50} width="80%" style={{ marginBottom: '10px' }} />
//             <Skeleton height={50} width="80%" style={{ marginBottom: '10px' }} />
//           </div>
//         )
//       }
//     >
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/movies" element={<MoviesPage />} />
//         <Route path="/movies/:id" element={<MovieDetailsPage />}>
//           <Route path="cast" element={<MovieCast />} />
//           <Route path="reviews" element={<MovieReviews />} />
//         </Route>
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </Suspense>
//   );
// };

// export default RouteSection;


// // --------------------------------Скелетон--------------------------------


// ---------------------------Без--скелетону-------------------------------------


import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../Loader/Loader";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("../../pages/MovieDetailsPage/MovieDetailsPage")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage")
);
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));

const RouteSection = () => (
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />}>
        <Route path="cast" element={<MovieCast />} />
        <Route path="reviews" element={<MovieReviews />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default RouteSection;



// ---------------------------Без--скелетону-------------------------------------

