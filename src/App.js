import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import ProjectPage from './pages/Projects/ProjectPage';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

function App() {
  return (
    <Router>
      <div className='app'>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/admin" element={<Admin />} exact />
      <Route path="/projects" element={<ProjectPage />} exact />
      <Route path="/contact" element={<Contact />} exact />  
      <Route path="/about" element={<About />} exact />    
    </Routes>
    </div>
  </Router>
  );
}

export default App;
