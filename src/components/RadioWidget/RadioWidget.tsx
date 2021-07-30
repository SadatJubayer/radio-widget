import backArrow from 'assets/images/back-arrow.png';
import switchIcon from 'assets/images/switch.png';
import Spinner from 'components/Spinner/Spinner';
import StationList from 'components/StationList';
import { useStation } from 'hooks/useStations';
import { IStation } from 'interfaces/Station.interface';
import { useEffect, useState } from 'react';

import styles from './radioWidget.module.css';

const RadioWidget = () => {
  const { loading, stations, fetchStations } = useStation();

  const [active, setActive] = useState<IStation | null>(null);

  const handleActive = (station: IStation) => {
    setActive(station);
  };

  useEffect(() => {
    fetchStations(); // fetch stations on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={backArrow} alt='back arrow' className={styles.icon} />
        <div className={styles.title}>Stations</div>
        <img onClick={() => setActive(null)} src={switchIcon} alt='switch' className={styles.icon} />
      </div>
      {loading ? <Spinner /> : <StationList active={active} handleActive={handleActive} stations={stations} />}

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
