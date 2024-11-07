import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Project';

function App() {
  return (
    <div className="App">

      <div >
        <Header />
      </div>

      
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
     </Routes>

      <div >
        <Footer />
      </div>


    </div>
  );
}

export default App;
