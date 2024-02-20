// index.tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Importe o componente principal da sua aplicação

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export {}; // Adicione essa linha para transformar o arquivo em um módulo
