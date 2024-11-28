import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilmDetails } from "../../js/films-api";
// import MovieReviewItem from "../MovieReviewItem/MovieReviewItem";
import MovieReviewItem from "../MovieReviewsItem/MovieReviewsItem";
// import LoaderMoreInfo from "../LoaderMoreInfo/LoaderMoreInfo";
import LoaderMoreInfo from "../Loader/LoaderMoreInform";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getFilmDetails(id, "/reviews");
        setReviews(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [id]);

  return (
    <section className={styles.reviewsSection}>
      {isLoading && <LoaderMoreInfo />}
      {!isLoading && reviews && reviews.length === 0 && (
        <p className={styles.noReviews}>We don't have any reviews for this movie.</p>
      )}
      {reviews && (
        <ul className={styles.reviewList}>
          {reviews.map((review) => (
            <li className={styles.reviewListItem} key={review.id}>
              <MovieReviewItem reviewData={review} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieReviews;