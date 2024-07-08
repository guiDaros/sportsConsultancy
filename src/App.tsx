import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'; // Importe a página inicial

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        
        
        <Routes>
          {/* Rotas */}
          <Route path="/" element={<Home />} />
          {/* Adicione mais rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
