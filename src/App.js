import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BasicExample from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <BasicExample />
      </body>
    </div>
  );
}

export default App;
