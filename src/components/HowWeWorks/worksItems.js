import one from '../../assets/icons/one.png';
import two from '../../assets/icons/two.svg';
import three from '../../assets/icons/three.svg';
import four from '../../assets/icons/four.svg';

export const worksItems = [
  {
    // eslint-disable-next-line prettier/prettier
    icon: one,
    // eslint-disable-next-line prettier/prettier
    header: 'Schedule a consultation',
    firstly: true,
    // eslint-disable-next-line prettier/prettier
    text: `Book an appointment with a doctor, remote or traditional in a clinic. You don't know which specialist do you need? Fill in a quick survey and the result will point you in the right direction.`,
  },
  {
    icon: two,
    header: 'Enter the data',
    firstly: false,
    // eslint-disable-next-line prettier/prettier
    text: 'Information entered will shorten the time you spend during an appointment. The specialist will ask less questions and the diagnosis will be more accurate.',
  },
  {
    icon: three,
    header: 'Conduct an advanced visit.',
    firstly: false,
    text: 'The highest possible quality of your appointment will be aided by 3D technology, AI and the professional experience of your doctor.',
  },
  {
    icon: four,
    header: 'Get help',
    firstly: false,
    text: `When it comes to your health, it's important to use the best accessible technology and knowledge to ensure your safety. AI will support the specialist in taking your past into account. Your allergies, intolerances and past health issues will be analysed to aid in making sure you get better. The process is designed to minimise number of errors and maximise effectiveness. Don't worry, the final decisions will be made by the specialist.`,
  },
];
