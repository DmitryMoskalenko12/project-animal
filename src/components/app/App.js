import './App.scss';
import MainSection from '../mainSection/MainSection';
import Barf from '../barf/Barf';
import SetsZoov from '../setsZoov/SetsZoov';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
       <Route path='/' element={<MainSection/>}/>
       <Route path='/barf' element={<Barf/>}/>
       <Route path='/sets' element={<SetsZoov/>}/>
      </Routes>  
    </Router>
  );
}

export default App;
