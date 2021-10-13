import React from 'react';
import styles from './Input.module.scss';

const Textarea = ({ placeholder }) => {
  return (
    <div className={styles.areaDiv}>
      <textarea type="text" placeholder="" className={styles.input} />
      <label htmlFor={placeholder} className={styles.inputLabel}>
        {placeholder}
      </label>
    </div>
  );
};

export default Textarea;
