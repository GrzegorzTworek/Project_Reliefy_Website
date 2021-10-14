import React from 'react';
import styles from './NewsTable.module.scss';

const NewsTable = ({ imageSrc, children, primary = false, header }) => {
  return (
    <article className={`${styles.newsComponent} ${primary && styles.newsComponentRow}`}>
      <div className={styles.imgContainer}>
        <img src={imageSrc} alt="news" />
      </div>
      <div className={styles.newsInfo}>
        <div className={styles.new}>News</div>
        <h3>{header}</h3>
        <p>{children}</p>
        {primary && (
          <a className={styles.buttonPrimary} href="/#">
            Read more
          </a>
        )}
      </div>
    </article>
  );
};

export default NewsTable;
