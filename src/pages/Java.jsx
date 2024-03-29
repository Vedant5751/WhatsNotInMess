// Java.js
import React from 'react';
import RestaurantCard from '../components/RestaurantList'; // Import your new RestaurantCard component

function Java() {
  // Sample restaurant data
  const restaurants = [
    {
      id: 1,
      name: 'Butty ',
      picture: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
      location: 'Java',
      phone: ['Sample no. ', 'Sample no. ', 'Sample no. '],
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 2,
      name: 'Restaurant 2',
      picture: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
      location: 'Location 1',
      phone: ['Sample no. ', 'Sample no. ', 'Sample no. '],
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 3,
      name: 'Restaurant 3',
      picture: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
      location: 'Location 1',
      phone: ['Sample no. ', 'Sample no. ', 'Sample no. '],
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 4,
      name: 'Restaurant 4',
      picture: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
      location: 'Location 1',
      phone: ['Sample no. ', 'Sample no. ', 'Sample no. '],
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 5,
      name: 'Restaurant 5',
      picture: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
      location: 'Location 1',
      phone: ['Sample no. ', 'Sample no. ', 'Sample no. '],
      menu: ['Item 1', 'Item 2', 'Item 3'],
    },
    {
      id: 6,
      name: 'Restaurant 6',
      picture: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
      location: 'Location 1',
      phone: ['Sample no. ', 'Sample no. ', 'Sample no. '],
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
    <div className = "bg-[rgb(142,167,233)]">
      <h1>Java</h1>
      <div className="flex flex-wrap justify-center">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            name={restaurant.name}
            picture={restaurant.picture}
            location={restaurant.location}
            menu={restaurant.menu}
            phone={restaurant.phone.map((number) => (
              <p key={number}>{number}</p>
            ))}
            onClick={() => handleCardClick(restaurant.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Java;
