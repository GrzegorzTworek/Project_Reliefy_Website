import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/icons/logo.svg';
// import contact from '../../assets/icons/contact.svg';
// import Button from '../atoms/Button/Button';

const Header = () => (
  <header className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.bar}>
        <img src={logo} alt="logo" />
        <button type="button" className={styles.contact}>
          Contact with us
        </button>
      </div>
      <div className={styles.menu}>
        <a href="#howWeWorks">How we works</a>
        <a href="#business">Business</a>
        <a href="#blog">Blog</a>
        <a href="#pricing">Pricing</a>
        <a href="#mail">Contact</a>
      </div>
      <div className={styles.login}>
        <a href="/" className={styles.signin}>
          Sign in
        </a>
        <a className={styles.buttonPrimary} href="/">
          {/* <Button>Sign up</Button> */}Sign up
        </a>
      </div>
    </div>
  </header>
);

export default Header;
