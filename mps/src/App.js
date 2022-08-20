import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
function App() {
  return (
    <> 
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

    <div className="App">

      <Navbar/> 
      <HomePage/>
    </div>
    </>
  );
}

export default App;
