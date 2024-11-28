// src/components/Loader/LoaderMoreInform.jsx

import { ThreeDots } from 'react-loader-spinner';
import styles from './LoaderMoreInfo.module.css';

const LoaderMoreInform = () => {
  return (
    <div className={styles.loaderWrapper}>
      <ThreeDots
        height={80}
        width={80}
        color="#4a90e2"
        radius="9"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </div>
  );
};

export default LoaderMoreInform;