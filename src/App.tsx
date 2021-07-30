import RadioWidget from 'components/RadioWidget';
import { StationProvider } from 'context/StationContext';

function App() {
  return (
    <div className='App'>
      <StationProvider>
        <RadioWidget />
      </StationProvider>
    </div>
  );
}

export default App;
