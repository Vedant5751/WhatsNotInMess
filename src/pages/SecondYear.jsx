import React from 'react';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();

  return (
    <div>
      <h2>Details for Card {id}</h2>
      {/* Add additional details based on the card ID */}
    </div>
  );
}

export default Details;