// Home.js
import React from 'react';
import Card from '../components/Card';

function Home() {
  const cards = [
    {
      id: 1,
      title: 'Java',
      content: 'This is the content of Card 1.',
      imageUrl: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
    },
    {
      id: 2,
      title: 'Potheri',
      content: 'This is the content of Card 2.',
      imageUrl: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
    },
    {
      id: 3,
      title: '2nd year',
      content: 'This is the content of Card 3.',
      imageUrl: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
    </div>
  );
}

export default Home;
