import styles from './App.module.css';
import Jokes from './components/Jokes';
import Header from './components/Header';
import SelectJokes from './components/SelectJoke';
import RandomJokes from './components/RandomJoke';

function App() {
  return (
    <div className='App'>
      <Header />
      <Jokes />
      <SelectJokes />
      <RandomJokes />
    </div>
  );
}

export default App;
