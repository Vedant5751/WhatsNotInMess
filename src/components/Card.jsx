// Card.js
import React from 'react';

function Card({ title, content, imageUrl, onClick }) {
  return (
    <a href="www.google.com" onClick={onClick}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <img className="w-full h-64 object-cover" src={imageUrl} alt={title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{content}</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
