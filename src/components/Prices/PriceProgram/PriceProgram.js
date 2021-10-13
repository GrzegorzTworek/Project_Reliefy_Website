/* eslint-disable no-nested-ternary */
import React from 'react';
import Ok from './Ok';
import ProgramType from '../ProgramType';
import styles from './PriceProgram.module.scss';

const Benefit = ({ type, disabled, children }) => (
  <p className={`${styles.benefit} ${disabled && styles.benefitDisabled}`}>
    <Ok
      color={
        disabled
          ? type === ProgramType.Premium
            ? 'rgba(255, 255, 255, 0.5)'
            : '#a7b1c8'
          : type === ProgramType.Premium
          ? 'white'
          : 'black'
      }
    />
    <span>{children}</span>
  </p>
);

const PriceProgram = ({ type, price }) => {
  return (
    <article
      className={`${styles.priceProgram} ${
        type === ProgramType.Premium && styles.priceProgramActive
      }`}
    >
      {/* <article className={ className={type === 'ProgramType.Premium'  ? styles.priceProgramActive : styles.priceProgram}> */}
      <h3>{type}</h3>

      <Benefit type={type}>Priority</Benefit>
      <Benefit type={type}>Reliefy CSM</Benefit>
      <Benefit type={type} disabled={type === ProgramType.Basic}>
        Available
      </Benefit>
      <Benefit type={type} disabled={type === ProgramType.Basic}>
        Support
      </Benefit>
      <Benefit type={type} disabled={type === ProgramType.Basic || type === ProgramType.Premium}>
        Community
      </Benefit>
      <a href="/features" className={styles.features}>
        {/* <a className={styles.features}> */}
        View all features
      </a>
      <p className={styles.price}>
        ${price}.00<span>/Month</span>
      </p>
      <div>
        <button type="button" className={styles.ButtonPrimaryLight}>
          Choose plan
        </button>
      </div>
    </article>
  );
};

export default PriceProgram;
