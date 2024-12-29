import React from 'react';
import './App.css';
import Tariff from './Tariff';

const tariffs = [
  { id: 1, name: 'Тариф А', price: 300 },
  { id: 2, name: 'Тариф B', price: 450 },
  { id: 3, name: 'Тариф C', price: 550 },
  { id: 4, name: 'Тариф D', price: 1000 },
];

function App() {
  return (
    <div className="app">
      <h1>Список тарифов</h1>
      <div className="tariffs">
        {tariffs.map((tariff) => (
          <Tariff
            key={tariff.id}
            name={tariff.name}
            price={tariff.price}
            highlight={tariff.price === 550}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
