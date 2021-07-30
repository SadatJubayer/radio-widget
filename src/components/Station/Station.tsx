import minus from 'assets/images/minus.png';
import plus from 'assets/images/plus.png';
import { IStation } from 'interfaces/Station.interface';

import styles from './station.module.css';

type Props = {
  isActive: boolean;
  station: IStation;
  onClick: (station: IStation) => void;
};

const Station = ({ station, isActive, onClick }: Props) => {
  const { name, cover, frequency } = station;

  return (
    <div onClick={() => onClick(station)} className={`${styles.container} ${isActive && styles.active}`}>
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
