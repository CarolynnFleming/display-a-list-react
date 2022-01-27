import './App.css';
import StarWarsList from './StarWarsList/StarWarsList';
import { starWars } from './StarWarsList/star-wars';
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
