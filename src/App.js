import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { NavProvider } from './context/NavContext';

function App() {
  return (
    <NavProvider>
    <Home/>
    </NavProvider>
  );
}

export default App;
