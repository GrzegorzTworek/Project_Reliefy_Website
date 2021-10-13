import React from 'react';
// import PropTypes from 'prop-types';
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
// Workstable.propTypes = {
//   firstly: PropTypes.string.isRequired,
//   icon: PropTypes.string.isRequired,
//   header: PropTypes.string.isRequired,
//   children: PropTypes.string.isRequired,
// };

// Workstable.defaultProps={
// icon: null;
// children: null;
// };
// export default Workstable;

// const Workstable = () => (
//   <div className={styles.table}>
//     <div className={styles.title}> How we works? </div>

//     <div className={styles.first}>
//       <div className={styles.rectangle}>
//         <img className={styles.one} src={one} alt="one" />
//       </div>
//       <div className={styles.description}>
//         <div className={styles.titleone}> Schedule a consultation </div>
//         <div className={styles.describeone}>
//           {' '}
//           Book an appointment with a doctor, remote or traditional in a clinic. You do not know
//           which specialist do you need? Fill in a quick survey and the result will point you in the
//           right direction.{' '}
//         </div>
//       </div>
//     </div>

//     <div className={styles.tab}>
//       <div className={styles.rectangletab}>
//         <img className={styles.one} src={two} alt="one" />
//       </div>
//       <div className={styles.description}>
//         <div className={styles.titleone}> Enter data </div>
//         <div className={styles.describeone}>
//           {' '}
//           Information entered will shorten the time you spend during an appointment. The specialist
//           will ask less questions and the diagnosis will be more accurate.{' '}
//         </div>
//       </div>
//     </div>

//     <div className={styles.tab}>
//       <div className={styles.rectangletab}>
//         <img className={styles.one} src={three} alt="one" />
//       </div>
//       <div className={styles.description}>
//         <div className={styles.titleone}> Conduct an advanced visit. </div>
//         <div className={styles.describeone}>
//           {' '}
//           The highest possible quality of your appointment will be aided by 3D technology, AI and
//           the professional experience of your doctor.{' '}
//         </div>
//       </div>
//     </div>

//     <div className={styles.tabend}>
//       <div className={styles.rectangletab}>
//         <img className={styles.one} src={four} alt="one" />
//       </div>
//       <div className={styles.descriptiontab}>
//         <div className={styles.titleone}> Get help </div>
//         <div className={styles.describeone}>
//           {' '}
//           When it comes to your health, it&#39;s important to use the best accessible technology and
//           knowledge to ensure your safety. AI will support the specialist in taking your past into
//           account. Your allergies, intolerances and past health issues will be analysed to aid in
//           making sure you get better. The process is designed to minimise number of errors and
//           maximise effectiveness. Don&#39;t worry, the final decisions will be made by the
//           specialist{' '}
//         </div>
//       </div>
//     </div>
//   </div>
// );
