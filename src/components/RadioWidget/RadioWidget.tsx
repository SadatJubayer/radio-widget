import backArrow from 'assets/images/back-arrow.png';
import switchIcon from 'assets/images/switch.png';
import StationList from 'components/StationList';
import { IStation } from 'interfaces/Station.interface';
import { useState } from 'react';

import styles from './radioWidget.module.css';

const staticData: IStation[] = [
  {
    id: '1',
    name: 'Putin FM',
    frequency: '66,6',
    cover: '/images/cover.png',
  },
  {
    id: '2',
    name: 'Dribble FM',
    frequency: '101,2',
    cover: '/images/cover.png',
  },
  {
    id: '3',
    name: 'Doge FM',
    frequency: '99,4',
    cover: '/images/cover.png',
  },
];

const RadioWidget = () => {
  const [active, setActive] = useState<IStation | null>(null);

  const handleActive = (station: IStation) => {
    setActive(station);
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={backArrow} alt='back arrow' className={styles.icon} />
        <div className={styles.title}>Stations</div>
        <img onClick={() => setActive(null)} src={switchIcon} alt='switch' className={styles.icon} />
      </div>
      <StationList active={active} onClick={handleActive} stations={staticData} />
      <div className={styles.footer}>
        {active && (
          <>
            <p>Currently Playing</p>
            <h2>{active.name}</h2>
          </>
        )}
      </div>
    </div>
  );
};

export default RadioWidget;
