import './App.scss';
import Barf from '../barf/Barf';
import MainSection from '../mainSection/MainSection';
import SetsZoov from '../setsZoov/SetsZoov';
import RationsList from '../rationsList/RationsList';
import AboutUs from '../aboutUs/AboutUs';
import Faq from '../faq/Faq';
import Delivery from '../delivery/Delivery';
import Footer from '../footer/Footer';
import LoveZoov from '../love/LoveZoov';

function App() {
  return (
    <>
    <MainSection/>
    <Barf/>
    <SetsZoov/>
    <LoveZoov/>
    <RationsList/>
    <AboutUs/>
    <Faq/>
    <Delivery/>
    <Footer/>
    </>
  
  );
}

export default App;



