import './App.css';
import StarWarsList from './StarWars/StarWarsList.js';
import { starWars } from './StarWars/star-wars.js';
import { candyLand } from './Candy/Candy.js';
import CandyList from './Candy/CandyList.js';
import { hiddenLeaf } from './HiddenLeaf/HiddenLeaf.js';
import HiddenLeafList from './HiddenLeaf/HiddenLeafList.js';
import SodaList from './Soda/SodaList.js';
import { sodaPop } from './Soda/Soda.js';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <StarWarsList starWars={starWars} />
      <CandyList candyLand={candyLand} />
      <HiddenLeafList hiddenLeaf={hiddenLeaf} />
      <SodaList sodaPop={sodaPop}/>
    </div>
  );
}

export default App;
