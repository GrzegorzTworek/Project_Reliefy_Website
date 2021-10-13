import React from 'react';
import styles from './Prices.module.scss';
import PricesButtons from './PricesButtons/PricesButtons';
import PriceProgram from './PriceProgram/PriceProgram';
import ProgramType from './ProgramType';
import doctoricon from '../../assets/icons/doctoricon.svg';
import usericon from '../../assets/icons/usericon.svg';
import businessicon from '../../assets/icons/businessicon.svg';

const PriceSection = () => {
  return (
    <section className={styles.priceSection} id="pricing">
      <div className={styles.buttonsGroup}>
        <PricesButtons icon={doctoricon} active={false}>
          Doctor
        </PricesButtons>
        <PricesButtons icon={usericon} active>
          User
        </PricesButtons>
        <PricesButtons icon={businessicon} active={false}>
          Business
        </PricesButtons>
      </div>

      <div className={styles.programs}>
        <PriceProgram type={ProgramType.Basic} price={15.0} />
        <PriceProgram type={ProgramType.Premium} price={59.0} />
        <PriceProgram type={ProgramType.Enterprise} price={125.0} />
      </div>
      <div className={styles.circle} />
    </section>
  );
};

export default PriceSection;
