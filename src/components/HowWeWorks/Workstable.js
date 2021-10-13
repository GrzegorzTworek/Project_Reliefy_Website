import React from 'react';
import styles from './Workstable.module.scss';

// export interface WorkstableProps{
//   icon: string;
// header: string;
// firstly: string;
// text: string;
// }

// const Workstable = (props: WorkstableProps) => {
// const{icon,header,firstly,text} = props;
const Workstable = ({ firstly = false, icon, header, children }) => {
  return (
    <div className={`${styles.howWeWork} ${firstly && styles.primary}`}>
      <div className={styles.imgContainer}>
        <img src={icon} alt="icon" />
      </div>
      <div className={styles.info}>
        <h3>{header}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default Workstable;
