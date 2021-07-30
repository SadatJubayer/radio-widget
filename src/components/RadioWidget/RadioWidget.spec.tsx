import { render } from '@testing-library/react';
import RadioWidget from 'components/RadioWidget';
import { StationProvider } from 'context/StationContext';
import { StationContext } from 'context/StationContext';
import { IStation } from 'interfaces/Station.interface';

describe('<RadioWidget/>', () => {
  it('Renders radio widget and header', () => {
    const { getByText } = render(
      <StationProvider>
        <RadioWidget />
      </StationProvider>
    );
    getByText('Stations');
  });
});

describe('<RadioWidget/> fetch stations', () => {
  let loading = true;
  let stations: IStation[] = [];
  const fetchStations = jest.fn();
  const setLoading = jest.fn();
  const setStations = jest.fn();

  it('Render spinner', () => {
    const { container } = render(
      <StationContext.Provider value={{ loading, setLoading, setStations, fetchStations, stations }}>
        <RadioWidget />
      </StationContext.Provider>
    );
    expect(container.querySelector('.spinner')).toBeTruthy();
  });

  it('Render Stations', () => {
    loading = false;
    stations = [
      {
        id: '1',
        name: 'Putin FM',
        frequency: '19,1',
      },
    ];
    const { container } = render(
      <StationContext.Provider value={{ loading, setLoading, setStations, fetchStations, stations }}>
        <RadioWidget />
      </StationContext.Provider>
    );
    expect(container.querySelector('.stationCard')).toBeTruthy();
  });
});
