import './App.css';
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";

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
        </div>


    </header>

      </>
  );
}

export default App;
