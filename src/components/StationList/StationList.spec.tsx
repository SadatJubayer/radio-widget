import { render } from '@testing-library/react';
import StationList from 'components/StationList';

describe('<StationList/> without data', () => {
  it('No stations check', () => {
    const { queryByTestId } = render(<StationList stations={[]} active={null} handleActive={() => null} />);
    expect(queryByTestId('no-stations')).toBeTruthy();
  });
});

const mockStations = [
  {
    id: '1',
    name: 'Putin FM',
    frequency: '19,1',
  },
];

describe('<StationList/> with data', () => {
  it('Should not display no stations found', () => {
    const { queryByTestId } = render(<StationList stations={mockStations} active={null} handleActive={() => null} />);
    expect(queryByTestId('no-stations')).toBeFalsy();
  });

  it('Should display the the station list', () => {
    const { container } = render(<StationList stations={mockStations} active={null} handleActive={() => null} />);
    expect(container.firstChild?.firstChild).toHaveClass('stationCard');
  });
});
