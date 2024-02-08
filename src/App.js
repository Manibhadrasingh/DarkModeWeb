import logo from './logo.svg';
import './App.css';
import DarkMode from './components/DarkMode/DarkMode';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DarkMode />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit src/App.js and save to reload.
        </p>

      </header>
    </div>
  );
}
 
export default App;