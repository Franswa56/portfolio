import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import ProjectPage from './pages/Projects/ProjectPage';

function App() {
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/admin" element={<Admin />} exact />
      <Route path="/projets" element={<ProjectPage />} exact />     
    </Routes>
  </Router>
  );
}

export default App;
