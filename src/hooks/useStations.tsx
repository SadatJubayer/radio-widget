import { useContext } from 'react';
import { StationContext } from 'context/StationContext';

export const useStation = () => {
  const context = useContext(StationContext);

  if (context === undefined) {
    throw new Error('useStation must be used within a StationProvider.');
  }

  return context;
};
