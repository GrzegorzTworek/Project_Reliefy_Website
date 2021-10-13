import React from 'react';
import styles from './Footer.module.scss';
import logofooter from '../../assets/icons/logofooter.png';

const Footer = () => {
  return (
    <footer className={styles.wrapper} id="foot">
      <section className={styles.info}>
        <div className={styles.reliefy}>
          <img src={logofooter} className={logofooter} alt="logofooter" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
        </div>

        <div className={styles.company}>
          <h2>Company</h2>
          <p>Reliefy Sp. z o.o.</p>
          <p>Kielanówka 168</p>
          <p>35-106 Rzeszów</p>
        </div>

        <div className={styles.website}>
          <h2>Website</h2>
          <a href="/#">How we works</a>
          <a href="/#">Business</a>
          <a href="#blog">Blog</a>
          <a href="/#pricing"> Pricing</a>
        </div>

        <div className={styles.getin}>
          <h2>Get in touch with us</h2>
          <button type="button" className={styles.buttonPrimary}>
            info@reliefy.doctor
          </button>
        </div>
      </section>

      <div className={styles.copyright}>
        © 2021 Reliefy Sp. z o.o. All rights reserved
        <a href="/#">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
