// src/pages/NotFoundPage/NotFoundPage.jsx

import { Link } from "react-router-dom";
import styles from "./NotFoundPage.module.css";
import notFoundImage from "../../assets/img/not-found-page.png"; // Виправлений шлях

const NotFoundPage = () => {
  return (
    <section className={styles.notFoundSection}>
      <div className={styles.notFoundContainer}>
        <h1 className={styles.errorCode}>404</h1>
        <img className={styles.errorImage} src={notFoundImage} alt="Page Not Found" />
        <h2 className={styles.errorMessage}>Oops! Page Not Found</h2>
        <p className={styles.errorDescription}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <button className={styles.homeButton}>Back to Home</button>
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;