import Station from 'components/Station/Station';
import { IStation } from 'interfaces/Station.interface';
import styles from './stationList.module.css';

type Props = {
  stations: IStation[];
  active: IStation | null;
  onClick: (station: IStation) => void;
};

const StationList = ({ stations, active, onClick }: Props) => {
  return (
    <div className={styles.container}>
      {stations.length === 0 && <p>No Stations found ☹</p>}
      {stations.map((station) => (
        <Station isActive={active === station} key={station.id} onClick={() => onClick(station)} {...station} />
      ))}
    </div>
  );
};

export default StationList;
