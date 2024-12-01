import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Imprint } from './components/rechtliches/Imprint';
import { Datenschutz } from './components/rechtliches/Datenschutz';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/impressum" element={<Imprint />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
