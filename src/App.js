
import { Route, Routes } from 'react-router';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
    
     <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact' element={ <Contact/>}/>
      
      </Routes>
      
      <Nav />
     
    </div>
  );
}

export default App;
