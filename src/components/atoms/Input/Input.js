import React from 'react';
import styles from './Input.module.scss';

const Input = ({
  type,
  placeholder,
  handleFunction = () => {},
  value = '',
  name = '',
  // label,
  // required,
  ...rest
}) => {
  return (
    <div className={styles.inputDiv}>
      <input
        type={type}
        placeholder=""
        className={styles.input}
        value={value}
        onChange={handleFunction}
        name={name}
        required
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
      />
      <label htmlFor={name} className={styles.inputLabel}>
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
