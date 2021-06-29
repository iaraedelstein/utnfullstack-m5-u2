import React from 'react';
import './style.css';

export default function PrimerComponente({ url, title, description }) {
  const element = (
    <div className="card">
      <div className="card__img">
        <img src={url} alt={title} />
      </div>
      <div className="card__detail">
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
    </div>
  );
  return element;
}
