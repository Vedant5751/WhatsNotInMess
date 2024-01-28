// RestaurantCard.js
import React from 'react';

function RestaurantCard({ name, picture, location, menu, onClick }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" onClick={onClick}>
      <img className="w-full h-64 object-cover" src={picture} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Location: {location}</p>
        {/* You can customize the display of other details as needed */}
      </div>
    </div>
  );
}

export default RestaurantCard;
