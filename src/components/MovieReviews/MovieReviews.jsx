// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getFilmsDetails } from "../../js/films-api";
// import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";
// import LoaderMoreInform from "../Loader/LoaderMoreInform";
// import style from "../MovieReviews/MovieReviews.module.css";

// const MovieReviews = () => {
//   const { id } = useParams();
//   const [reviews, setReviews] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const handelClick = async () => {
//       try {
//         setLoading(true);
//         setReviews([]);
//         const dataCredits = await getFilmsDetails(id, "/reviews");
//         setReviews(dataCredits.results);
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     handelClick();
//   }, [id]);
//   return (
//     <section>
//       {loading && <LoaderMoreInform />}
//       {!loading && reviews !== null && reviews.length === 0 && (
//         <p
//           className={style.reviewNotFound}
//         >{`We don't have any reviews for this movie`}</p>
//       )}
//       {reviews && (
//         <ul>
//           {reviews.map((review) => (
//             <li className={style.reviewItem} key={review.id}>
//               <MovieReviewsItem dataReviews={review} />
//             </li>
//           ))}
//         </ul>
//       )}
//     </section>
//   );
// };

// export default MovieReviews;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { getFilmsDetails } from "../../js/films-api";
// import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";
// import Loader from "../Loader/Loader";
// import styles from "./MovieReviews.module.css";

// const MovieReviews = () => {
//   const { id } = useParams();
//   const [reviews, setReviews] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchReviews = async () => {
//       setLoading(true);
//       try {
//         const data = await getFilmsDetails(id, "/reviews");
//         setReviews(data.results);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchReviews();
//   }, [id]);

//   return (
//     <section className={styles.reviewsSection}>
//       {loading && <Loader />}
//       {!loading && reviews.length === 0 && (
//         <p className={styles.noReviews}>We don't have any reviews for this movie.</p>
//       )}
//       <ul className={styles.reviewList}>
//         {reviews.map((review) => (
//           <li key={review.id} className={styles.reviewItem}>
//             <MovieReviewsItem dataReviews={review} />
//           </li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default MovieReviews;


import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmsDetails } from "../../js/films-api";
import MovieReviewsItem from "../MovieReviewsItem/MovieReviewsItem";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./MovieReviews.module.css";

const MovieReviews = ({ initialLoadingTime = 3000 }) => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [userComments, setUserComments] = useState([]); // Стан для користувацьких коментарів
  const [newComment, setNewComment] = useState(""); // Стан для нового коментаря
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const data = await getFilmsDetails(id, "/reviews");
        setReviews(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, initialLoadingTime);
        return () => clearTimeout(timer);
      }
    };

    fetchReviews();
  }, [id, initialLoadingTime]);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;
    const newCommentObject = {
      id: Date.now(), 
      content: newComment,
      author: "You",
    };
    setUserComments((prevComments) => [...prevComments, newCommentObject]);
    setNewComment(""); 
  };

  return (
    <section className={styles.reviewsSection}>
{isLoading ? (
  <ul className={styles.reviewList}>
    {Array.from({ length: 3 }).map((_, index) => (
      <li key={index} className={styles.reviewItem}>
        <div className={styles.author}>
          <Skeleton height={20} width="30%" />
        </div>
        <div>
          <Skeleton height={15} width="90%" style={{ marginBottom: "5px", borderRadius: "4px" }} />
          <Skeleton height={15} width="85%" style={{ borderRadius: "4px" }} />
        </div>
      </li>
    ))}
  </ul>
) : (
  <>
    {reviews.length === 0 && userComments.length === 0 && (
      <p className={styles.noReviews}>No reviews available for this movie. Be the first to leave a comment below!</p>
    )}
    <ul className={styles.reviewList}>
      {reviews.map((review) => (
        <li key={review.id} className={styles.reviewItem}>
          <MovieReviewsItem dataReviews={review} />
        </li>
      ))}
      {userComments.map((comment) => (
        <li key={comment.id} className={styles.reviewItem}>
          <p className={styles.author}>Author: {comment.author}</p>
          <p>{comment.content}</p>
        </li>
      ))}
    </ul>
    <div className={styles.commentForm}>
      <textarea
        className={styles.commentInput}
        placeholder="Add your comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button className={styles.addCommentButton} onClick={handleAddComment}>
        Add Comment
      </button>
    </div>
  </>
)}
    </section>
  );
};

export default MovieReviews;