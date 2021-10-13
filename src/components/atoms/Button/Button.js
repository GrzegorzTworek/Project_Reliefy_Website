import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, secondary, tritary }) => {
  let buttonClass;
  if (secondary) {
    buttonClass = styles.secondary;
  } else if (tritary) {
    buttonClass = styles.tritary;
  } else {
    buttonClass = styles.button;
  }

  return (
    <button type="button" className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
