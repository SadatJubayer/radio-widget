import { IStation } from 'interfaces/Station.interface';
import { createContext, useState } from 'react';
import { getStaticStations } from 'utils/staticStations';

interface IContextProps {
  loading: boolean;
  setLoading: (p: boolean) => void;
  stations: IStation[];
  setStations: (value: IStation) => void;
  fetchStations: () => void;
}

export const StationContext = createContext({} as IContextProps);

export const StationProvider = (props: any) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [stations, setStations] = useState<IStation[]>([]);

  const fetchStations = async () => {
    // fetching static Data
    await getStaticStations()
      .then((stations) => setStations(stations))
      .catch(() => setStations([]))
      .finally(() => setLoading(false));

    // fetching data from SERVER
    /*  try {
      const response = await fetch('http://localhost:3000/stations');
      const stations = await response.json();
      setStations(stations);
    } catch (error) {
      setStations([]);
    } finally {
      setLoading(false);
    } */
  };

  const value = { loading, setLoading, stations, setStations, fetchStations };

  return <StationContext.Provider value={value} {...props} />;
};
