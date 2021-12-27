
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Services from './components/Services'
import Team from './components/Team'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nuestro_equipo" element={<Team />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
