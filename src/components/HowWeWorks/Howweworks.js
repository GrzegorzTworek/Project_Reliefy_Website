import React from 'react';
import styles from './Howweworks.module.scss';
import Workstable from './Workstable';
import heart from '../../assets/icons/heart.svg';
import { worksItems } from './worksItems';
// import cloud from '../../assets/icons/cloud.svg';

const Howweworks = () => {
  return (
    <section className={styles.wrapper} id="howWeWorks">
      <div className={styles.imageContainer}>
        <img src={heart} alt="howweworks" />
        {/* <img src={cloud} alt="howweworks" /> */}
      </div>
      <div className={styles.dataContainer}>
        <h2>How we works?</h2>

        {worksItems.map(({ icon, header, firstly, text }) => {
          return (
            <Workstable key={icon} icon={icon} header={header} firstly={firstly}>
              {text}
            </Workstable>
          );
        })}
      </div>

      {/* <div className={styles.circle} /> */}
    </section>
  );
};

export default Howweworks;
