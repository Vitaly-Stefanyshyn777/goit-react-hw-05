// import React, { useState, useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { Box, Grid, Typography } from '@mui/material';

// export default function MoviesList({ moviesData }) {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000); // Емулюємо затримку завантаження даних
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Box mt={2}>
//       {isLoading ? (
//         <Grid container spacing={2}>
//           {Array.from({ length: 6 }).map((_, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Box
//                 sx={{
//                   padding: 2,
//                   border: '1px solid #ddd',
//                   borderRadius: '8px',
//                   backgroundColor: '#fff',
//                 }}
//               >
//                 <Skeleton height={25} width="80%" style={{ marginBottom: '8px' }} />
//                 <Skeleton height={20} width="60%" style={{ marginBottom: '8px' }} />
//                 <Skeleton height={20} width="40%" />
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Grid container spacing={2}>
//           {moviesData.length > 0 ? (
//             moviesData.map((movie) => (
//               <Grid item xs={12} sm={6} md={4} key={movie.id}>
//                 <Box
//                   sx={{
//                     padding: 2,
//                     border: '1px solid #ddd',
//                     borderRadius: '8px',
//                     backgroundColor: '#fff',
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     {movie.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Release date: {movie.releaseDate}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Rating: {movie.rating}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" color="textSecondary" textAlign="center">
//               No movies found.
//             </Typography>
//           )}
//         </Grid>
//       )}
//     </Box>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import { Box, Grid, Typography } from '@mui/material';

// export default function MoviesList({ moviesData }) {
//   const [isLoading, setIsLoading] = useState(true);

//   // Використовуємо useEffect для емулювання затримки завантаження
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);  // Завершуємо завантаження через 2 секунди
//     }, 2000); // Штучна затримка завантаження даних
//     return () => clearTimeout(timer);  // Очистка таймера при анмаунті компоненту
//   }, []);

//   return (
//     <Box mt={2}>
//       {/* Якщо завантаження все ще триває, показуємо скелетон */}
//       {isLoading ? (
//         <Grid container spacing={2}>
//           {Array.from({ length: 6 }).map((_, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Box
//                 sx={{
//                   padding: 2,
//                   border: '1px solid #ddd',
//                   borderRadius: '8px',
//                   backgroundColor: '#fff',
//                 }}
//               >
//                 {/* Скелетон для кожної картки */}
//                 <Skeleton height={25} width="80%" style={{ marginBottom: '8px' }} />
//                 <Skeleton height={20} width="60%" style={{ marginBottom: '8px' }} />
//                 <Skeleton height={20} width="40%" />
//               </Box>
//             </Grid>
//           ))}
//         </Grid>
//       ) : (
//         <Grid container spacing={2}>
//           {/* Якщо дані вже завантажено */}
//           {moviesData.length > 0 ? (
//             moviesData.map((movie) => (
//               <Grid item xs={12} sm={6} md={4} key={movie.id}>
//                 <Box
//                   sx={{
//                     padding: 2,
//                     border: '1px solid #ddd',
//                     borderRadius: '8px',
//                     backgroundColor: '#fff',
//                   }}
//                 >
//                   <Typography variant="h6" gutterBottom>
//                     {movie.title}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Release date: {movie.releaseDate}
//                   </Typography>
//                   <Typography variant="body2" color="textSecondary">
//                     Rating: {movie.rating}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))
//           ) : (
//             <Typography variant="h6" color="textSecondary" textAlign="center">
//               No movies found.
//             </Typography>
//           )}
//         </Grid>
//       )}
//     </Box>
//   );
// }



// MoviesSkeleton.js
// import React from 'react';
// // import Skeleton from 'react-loading-skeleton';
// import { Box, Grid } from '@mui/material';
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'



// const MoviesSkeleton = () => {
//   return (
//     <Box mt={2}>
//       <Grid container spacing={2}>
//         {Array.from({ length: 6 }).map((_, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Box
//               sx={{
//                 padding: 2,
//                 border: '1px solid #ddd',
//                 borderRadius: '8px',
//                 backgroundColor: '#fff',
//               }}
//             >
//               {/* Скелетон для картки */}
//               <Skeleton height={25} width="80%" style={{ marginBottom: '8px' }} />
//               <Skeleton height={20} width="60%" style={{ marginBottom: '8px' }} />
//               <Skeleton height={20} width="40%" />
//             </Box>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default MoviesSkeleton;

// -----------------------Скелетон-----------------------------------------

import { format } from "date-fns";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./MovieReviewsItem.module.css";
import { useState, useEffect } from "react";

const MovieReviewsItem = ({ dataReviews, isLoading }) => {
  const [delayedLoading, setDelayedLoading] = useState(true);
  
  
  const skeletonDelay = 2000; 

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setDelayedLoading(false); 
      }, skeletonDelay); 

      return () => clearTimeout(timer);
    }
    setDelayedLoading(false); 
  }, [isLoading, skeletonDelay]);

 
  if (delayedLoading) {
    return (
      <div className={styles.reviewItem}>
        <Skeleton height={20} width="50%" className={styles.skeletonAuthor} />
        <Skeleton height={15} width="30%" className={styles.skeletonUsername} />
        <Skeleton height={15} width="40%" className={styles.skeletonDate} />
        <Skeleton height={60} width="100%" className={styles.skeletonContent} />
      </div>
    );
  }

  
  const { author, author_details, content, created_at } = dataReviews;
  const formattedDate = format(new Date(created_at), "MMMM dd yyyy HH:mm:ss");

  return (
    <div className={styles.reviewItem}>
      <h2 className={styles.reviewAuthor}>{author}</h2>
      <p className={styles.reviewUsername}>
        <span className={styles.label}>Username:</span> {author_details.username}
      </p>
      <p className={styles.reviewDate}>{formattedDate}</p>
      <p className={styles.reviewContent}>{content}</p>
    </div>
  );
};

export default MovieReviewsItem;

// -----------------------Скелетон-----------------------------------------
