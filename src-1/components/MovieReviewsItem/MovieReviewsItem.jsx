import { format } from "date-fns";
import styles from "./MovieReviewsItem.module.css";

const MovieReviewItem = ({ reviewData: { author, author_details, content, created_at } }) => {
  const formattedDate = format(new Date(created_at), "MMMM dd, yyyy HH:mm:ss");
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

export default MovieReviewItem;