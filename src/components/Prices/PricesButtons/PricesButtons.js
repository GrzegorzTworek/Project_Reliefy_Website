import React from 'react';
import styles from './PricesButtons.module.scss';

const PriceButtons = ({ active, icon, children }) => {
  return (
    <button type="button" className={`${styles.priceButton} ${active && styles.priceButtonActive}`}>
      <img src={icon} alt={children} /> <span>{children}</span>
    </button>
  );
};

export default PriceButtons;
