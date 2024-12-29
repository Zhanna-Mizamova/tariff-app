import React from 'react';
import './Tariff.css';

function Tariff({ name, price, highlight }) {
  return (
    <div className={`tariff ${highlight ? 'highlight' : ''}`}>
      <h2>{name}</h2>
      <p>Цена: {price}₽</p>
    </div>
  );
}

export default Tariff;
