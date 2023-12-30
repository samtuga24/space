import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { NavProvider } from './context/NavContext';
import NavBar from './Components/NavBar';
import Introduction from './Components/Introduction';
import Cards from './Components/Cards';
import GetStarted from './Components/GetStarted';
import Choose from './Components/Choose';
import CreateCard from './Components/CreateCard';
import Check from './Components/Check';
import VirtualCard from './Components/VirtualCard';
import General from './Components/General';
import ServicePay from './Components/ServicePay';
import FAQs from './Components/FAQs';
import Footer from './Components/Footer';
import MobileNav from './Components/MobileNav';
function App() {
  return (
    <NavProvider>
      <div className='home-wrapper'>
        <div className='home-navbar'><NavBar /></div>
        <div><Introduction /></div>
        <div><Cards /></div>
        <div><GetStarted /></div>
        <div><Choose /></div>
        <div><CreateCard /></div>
        <div><Check /></div>
        <div className='section'><VirtualCard /></div>
        <div className='general'><General /></div>
        <div><ServicePay /></div>
        <div className='fa'><FAQs /></div>
        <div><Footer /></div>
        <div><MobileNav /></div>
      </div>
    </NavProvider>
  );
}

export default App;
