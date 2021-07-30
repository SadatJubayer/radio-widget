import Station from 'components/Station/Station';
import { IStation } from 'interfaces/Station.interface';
import styles from './stationList.module.css';

type Props = {
  stations: IStation[];
  active: IStation | null;
  handleActive: (station: IStation) => void;
};

const StationList = ({ stations, active, handleActive }: Props) => {
  return (
    <div className={styles.container}>
      {!stations?.length ? (
        <p>No Stations found ☹</p>
      ) : (
        stations?.map((station) => (
          <Station key={station.id} isActive={active === station} onClick={handleActive} station={station} />
        ))
      )}
    </div>
  );
};

export default StationList;
