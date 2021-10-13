import React from 'react';
import styles from './Mail.module.scss';
import cloud from '../../assets/icons/cloud.png';
import flowers from '../../assets/icons/flowers.png';
import Input from '../atoms/Input/Input';
import Textarea from '../atoms/Input/Textarea';

const Mail = () => {
  return (
    <section className={styles.mailWrapper} id="mail">
      <div className={styles.description}>
        <h2>
          Let<span>&#39;</span>s talk with us!
        </h2>
        <p>
          Our team will contact you within 12 hours to discuss the details ansd provide you with
          realavent inforamtion on cooperation.
        </p>
        <img src={cloud} className={styles.cloud} alt="cloud" />
        <img src={flowers} className={styles.flowers} alt="flowers" />
      </div>
      <form className={styles.interface}>
        {/* <Input type="text" />
      <Input type="email" />
      <Input /> */}
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="E-mail" />
        <Textarea type="email" placeholder="Message" />

        <div className={styles.buttonContainer}>
          <button type="button" className={styles.buttonPrimary}>
            Submit
          </button>
        </div>
      </form>
      <div className={styles.gradient} />
      <div className={styles.gradienttwo} />
    </section>
  );
};

export default Mail;
