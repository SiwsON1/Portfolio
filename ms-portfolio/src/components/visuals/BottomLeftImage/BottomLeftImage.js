
import styles from './BottomLeftImage.module.scss';
import React from 'react';

const BottomLeftImg = () => {
  return (
    <div className={`absolute bottom-0 left-0 mix-blend-color-dodge w-[200px] h-[200px] xl:w-[400px] xl:h-[400px] bg-bottomLeftImage ${styles.clipTriangle}`}>
    </div>
  );
};

export default BottomLeftImg;