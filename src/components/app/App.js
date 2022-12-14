import './App.scss';
/* import MainSection from '../mainSection/MainSection';
import Barf from '../barf/Barf';
import SetsZoov from '../setsZoov/SetsZoov'; */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';


const Main = lazy(() => import('../mainSection/MainSection'));
const Barf = lazy(() => import('../barf/Barf'));
const SetsZoov = lazy(() => import('../setsZoov/SetsZoov'));
const RationsList = lazy(() => import('../rationsList/RationsList'))
const AboutUs = lazy(() => import('../aboutUs/AboutUs'))
const Faq = lazy(() => import ('../faq/Faq'));
const Delivery = lazy(() => import('../delivery/Delivery'));
const Footer = lazy(() => import('../footer/Footer'));

function App() {
  return (
    <Suspense fallback={<div style={{display: 'flex', justifyContent: 'center', marginTop: '20%'}}>...Загрузка</div>}>
    <Router>
          <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/barf' element={<Barf/>}/>
          <Route path='/sets' element={<SetsZoov/>}/>
          <Route path='/rations' element={<RationsList/>}/>
          <Route path='/about' element = {<AboutUs/>}/>
          <Route path='/faq' element = {<Faq/>}/>
          <Route path='/delivery' element = {<Delivery/>}/>
          <Route path='/footer' element = {<Footer/>}/>
          </Routes>  
        </Router>
    </Suspense>
  );
}

export default App;



