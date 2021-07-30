import minus from 'assets/images/minus.png';
import plus from 'assets/images/plus.png';

import styles from './station.module.css';

type Props = {
  id: string;
  name: string;
  frequency: string;
  cover?: string;
  isActive: boolean;
  onClick: (id: string) => void;
};

const Station = ({ id, name, frequency, cover, isActive, onClick }: Props) => {
  return (
    <div onClick={() => onClick(id)} className={`${styles.container} ${isActive && styles.active}`}>
      <div className={styles.detail}>
        <img className={styles.button} src={minus} alt='Previous' />
        <img className={styles.cover} src={cover} alt='Cover' />
        <img className={styles.button} src={plus} alt='Next' />
      </div>
      <p className={styles.item}>
        <span>{name} </span> <b>{frequency}</b>
      </p>
    </div>
  );
};

export default Station;
