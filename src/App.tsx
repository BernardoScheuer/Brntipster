import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Palpites from './pages/Palpites';
import Navbar from './assets/components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/palpites" element={<Palpites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;