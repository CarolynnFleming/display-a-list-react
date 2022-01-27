import './App.css';
import StarWarsList from './StarWars/StarWarsList.js';
import { starWars } from './StarWars/star-wars.js';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <StarWarsList starWars={starWars} />
    </div>
  );
}

export default App;
