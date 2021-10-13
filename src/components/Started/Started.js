import React from 'react';
import Button from '../atoms/Button/Button';
import styles from './Started.module.scss';

const Started = () => (
  <div className={styles.wrapper}>
    <div className={styles.start}>
      <h1>Health care with big data help</h1>

      <p>
        Reliefy is an telemedic platform where you will receive comprehensive assistance during the
        whole treatment process. We support doctors using new technologies and offer state of the
        art service. We increase the accuracy of remote medical consultations with the use of 3D
        solutions and AI. Application of hybrid solutions guarantees safety unheard of in other
        forms of treatment.
      </p>

      <Button>Get Started</Button>
    </div>
  </div>
);

export default Started;
