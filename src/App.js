
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects'
import MobileAbout from './mobile/MobileAbout';
import MobileHome from './mobile/MobileHome'
import { Desktop, Mobile } from './styles/Media';

function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={
      <>
      <Desktop><Home /></Desktop>
      <Mobile><MobileHome/></Mobile></> 
    }/>
      <Route path='/about' element={
      <>
      <Desktop><About/></Desktop>
      <Mobile><MobileAbout /></Mobile>
      </>
      }/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={ <Contact/>}/>
      
      </Routes>
      
     
     
    </div>
  );
}

export default App;
