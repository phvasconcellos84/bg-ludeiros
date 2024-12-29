import { BrowserRouter, Routes, Route } from 'react-router';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Header from './components/Header';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
