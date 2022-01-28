import './App.css';
import StarWarsList from './StarWars/StarWarsList.js';
import { starWars } from './StarWars/star-wars.js';
import { candyLand } from './Candy/Candy.js';
import CandyList from './Candy/CandyList.js';
import { hiddenLeaf } from './HiddenLeaf/HiddenLeaf.js';
import HiddenLeafList from './HiddenLeaf/HiddenLeafList.js';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <StarWarsList starWars={starWars} />
      <CandyList candyLand={candyLand} />
      <HiddenLeafList hiddenLeaf={hiddenLeaf} />
    </div>
  );
}

export default App;
