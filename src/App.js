import logo from './logo.svg';
import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
    <Lottery />
    <Lottery title="çerez şans" maxBalls={4} maxNum={20} />

    </div>
  );
}

export default App;
