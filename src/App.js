import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import envelope from './assets/symbols/envelope.png';
import person from './assets/symbols/person.png';
import Button from "./components/Button/Button";
import Tile from "./components/Tile/Tile";


function App() {
  return (
      <>

    <header className="header">
        <div className="header-container">
            <Nav>
                <li><a href="/">Home</a> </li>
                <li><a href="/">Log in</a> </li>
                <li><a href="/">Contact</a> </li>
            </Nav>
            <Header />
            <div className="tile-container">
            <Tile
                image={person}
                title="inloggen"
                text="log in bij uw Homecare account"
            >inloggen </Tile>
            <Tile
                image={envelope}
                title="contact"
                text="neemt contact op via het contactformulier"
            >naar het contactformulier </Tile>
        </div>
        </div>

    </header>

      </>
  );
}

export default App;
