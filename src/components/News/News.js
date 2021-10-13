import React from 'react';
import NewsTable from './NewsTable/NewsTable';
import styles from './News.module.scss';
import newso from '../../assets/icons/newso.png';
import newstwo from '../../assets/icons/newstwo.svg';
import newsthree from '../../assets/icons/newsthree.svg';
// import newsfour from '../../assets/icons/newsfour.svg';
import newsf from '../../assets/icons/newsf.png';

const News = () => {
  return (
    <section className={styles.newsContainer} id="blog">
      <NewsTable primary header="Our Technology Stack" imageSrc={newso}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </NewsTable>
      <div className={styles.newsRowContainer}>
        <NewsTable header="Our strategy for 2020 year" imageSrc={newstwo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </NewsTable>
        <NewsTable header="Our strategy for 2020 year" imageSrc={newsthree}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </NewsTable>
        <NewsTable header="Our strategy for 2020 year" imageSrc={newsf}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </NewsTable>
      </div>
      <div className={styles.gradien} />
    </section>
  );
};

export default News;
