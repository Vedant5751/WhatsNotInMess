// Potheri.js
import React from 'react';
import RestaurantCard from '../components/RestaurantList'; // Import your new RestaurantCard component

function Potheri() {
  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: 'Restaurant 1',
      picture: 'url_to_picture',
      location: 'Location 1',
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 2,
      name: 'Restaurant 2',
      picture: 'url_to_picture',
      location: 'Location 1',
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 3,
      name: 'Restaurant 3',
      picture: 'url_to_picture',
      location: 'Location 1',
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 4,
      name: 'Restaurant 4',
      picture: 'url_to_picture',
      location: 'Location 1',
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 5,
      name: 'Restaurant 5',
      picture: 'url_to_picture',
      location: 'Location 1',
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 6,
      name: 'Restaurant 6',
      picture: 'url_to_picture',
      location: 'Location 1',
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    // Add more restaurant data as needed
  ];

  // Function to handle card click
  const handleCardClick = (restaurantId) => {
    // Logic to show the restaurant details in fullscreen
    console.log('Clicked on restaurant with ID:', restaurantId);
  };

  return (
    <div>
      <h1>Potheri</h1>
      <div className="flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            picture={restaurant.picture}
            location={restaurant.location}
            menu={restaurant.menu}
            onClick={() => handleCardClick(restaurant.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Potheri;