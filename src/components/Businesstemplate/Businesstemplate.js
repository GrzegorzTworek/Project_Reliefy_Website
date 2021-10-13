import React from 'react';
import styles from './Businesstemplate.module.scss';
import eclipseback from '../../assets/icons/eclipseback.svg';
import bussines from '../../assets/icons/bussines.svg';

const Businesstemplate = () => (
  <>
    <section className={styles.business} id="business">
      <img className={styles.eclipse} src={eclipseback} alt="eclipse" />
      <img className={styles.busmain} src={bussines} alt="busmain" />
    </section>
  </>
);

export default Businesstemplate;
