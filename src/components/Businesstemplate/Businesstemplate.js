import React from 'react';
import styles from './Businesstemplate.module.scss';
import eclipseback from '../../assets/icons/eclipseback.svg';
// import busmain from '../../assets/icons/busmain.svg';
import bussines from '../../assets/icons/bussines.svg';
// import busone from '../../assets/icons/busone.svg';
// import bustwo from '../../assets/icons/bustwo.svg';
// import busthree from '../../assets/icons/busthree.svg';

const Businesstemplate = () => (
  <>
    <section className={styles.business} id="business">
      <img className={styles.eclipse} src={eclipseback} alt="eclipse" />
      <img className={styles.busmain} src={bussines} alt="busmain" />

      {/* <div className={styles.gradien} /> */}
    </section>
  </>
);

export default Businesstemplate;
