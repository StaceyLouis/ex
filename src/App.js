
import { Route, Routes } from 'react-router';
import { ThemeProvider } from 'styled-components';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import Projects from './components/Projects'
import MobileAbout from './mobile/MobileAbout';
import MobileContact from './mobile/MobileContact';
import MobileHome from './mobile/MobileHome'
import MobileProjects from './mobile/MobileProjects';
import { Desktop, Mobile, Tablet } from './styles/Media';

function App() {
  return (
  
    <div className="App">
    
     <Routes>
      <Route path='/' element={
      <>
      <Desktop><Home /></Desktop>
      <Mobile><MobileHome/></Mobile>
      <Tablet><Home /></Tablet>
      </> 
    }/>
      <Route path='/about' element={
      <>
      <Desktop><About/></Desktop>
      <Mobile><MobileAbout /></Mobile>
      <Tablet><About /></Tablet>
      </>
      }/>
      <Route path='/projects' element={
        <>
        <Mobile><MobileProjects /></Mobile>
        <Desktop><Projects/></Desktop>
        <Tablet><Projects /></Tablet>
        </>
      
      }/>
      <Route path='/contact' element={ 
         <>
         <Mobile><MobileContact /></Mobile>
         <Desktop><Contact/></Desktop>
         <Tablet><Contact /></Tablet>
         </>
      }/>
      
      </Routes>
      
     
     <Footer />
    </div>

   
  );
}

export default App;
