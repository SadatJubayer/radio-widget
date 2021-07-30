import { render, fireEvent } from '@testing-library/react';
import Station from 'components/Station';

const fakeStation = {
  id: '1',
  name: 'Putin FM',
  frequency: '19,1',
};

describe('<Station/> without active', () => {
  it('Render station', () => {
    const { container } = render(<Station station={fakeStation} isActive={false} onClick={() => null} />);
    expect(container.firstChild?.firstChild).not.toHaveClass('active');
  });
});

describe('<Station/> with active', () => {
  it('Render active station with cover', () => {
    const { container } = render(<Station station={fakeStation} isActive={true} onClick={() => null} />);
    expect(container.firstChild).toHaveClass('active');
    expect(container.querySelector('img')).toBeTruthy();
  });
});

const handleClick = jest.fn();

describe('<Station/> Toggle active', () => {
  it('Toggle active station', async () => {
    const { findByTestId, container } = render(<Station station={fakeStation} isActive={true} onClick={handleClick} />);
    const stationCard = await findByTestId('station');
    fireEvent.click(stationCard);
    expect(handleClick).toHaveBeenCalledTimes(1);
    // No active class
    expect(container.firstChild?.firstChild).not.toHaveClass('active');
  });
});
