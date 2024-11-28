// src/components/Loader/Loader.jsx

import { Audio } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <Audio
        height={80}
        width={80}
        color="#ff6b6b"
        ariaLabel="audio-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;