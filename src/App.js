
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
