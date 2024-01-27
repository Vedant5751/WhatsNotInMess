// App.js
import React from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const cards = [
    {
      id: 1,
      title: 'Java',
      content: 'This is the content of Card 1.',
      imageUrl: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg', // Sample image URL
    },
    {
      id: 2,
      title: 'Potheri',
      content: 'This is the content of Card 2.',
      imageUrl: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg', // Sample image URL
    },
    {
      id: 3,
      title: '2nd year',
      content: 'This is the content of Card 3.',
      imageUrl: 'https://assets.architecturaldigest.in/photos/61db1eed472e5c4d0d4c8dd8/3:2/w_5973,h_3982,c_limit/Main%20seating%20area%20Ekaa.jpg', // Sample image URL
    },
  ];

  const handleCardClick = (id) => {
    console.log(`Card ${id} clicked`);
    // Add your logic to handle the click event here
  };

  return (
    <>
    <Router>
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center my-8">What's not in mess</h1>
        
        {/* <div className="flex flex-wrap justify-center">
          {cards.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              content={card.content}
              imageUrl={card.imageUrl}
              onClick={() => handleCardClick(card.id)}
            />
          ))}
        </div> */}
        <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/detail' element={<Details/>}/>
        </Routes>
        
      </div>
      <Footer />
      </Router>
    </>
  );
}

export default App;
