// src/components/MovieCast/MovieCast.jsx

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmDetails } from '../../js/films-api';
import MovieCastItem from '../MovieCastItem/MovieCastItem';
// import LoaderMoreInform from '../Loader/LoaderMoreInform';
import LoaderMoreInform from '../Loader/LoaderMoreInform';
import styles from './MovieCast.module.css';

const MovieCast = () => {
  const { id } = useParams();
  const [castMembers, setCastMembers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setIsLoading(true);
        const data = await getFilmDetails(id, '/credits');
        setCastMembers(data.cast);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  return (
    <section className={styles.castSection}>
      {isLoading && <LoaderMoreInform />}
      {castMembers && (
        <ul className={styles.castList}>
          {castMembers.map((member) => (
            <li className={styles.castListItem} key={member.id}>
              <MovieCastItem castData={member} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MovieCast;