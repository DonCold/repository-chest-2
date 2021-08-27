import './App.css';

import Counter from './components/Counter';
import Notes from './components/Notes';

const initial = {
  left: 0,
  right: 0
};

const App = () => {
  return (
    <>
      <Counter initial={ initial } />
      <hr/>
      <hr />
      <Notes />
    </>
  );
}

export default App;
