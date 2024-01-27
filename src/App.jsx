// App.js
import React from 'react';
import Footer from './components/Footer';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  

  return (
    <>
    <Router>
      <Navbar/>

      {/* <div className="container mx-auto"> */}
        {/* <h1 className="text-5xl font-bold text-center my-8">What's not in mess</h1> */}
        
        
        
        <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/detail' element={<Details/>}/>
        {/* <Route path='/potheri' element={<Potheri/>}/> */}
        {/* <Route path='/java' element={<Java/>}/> */}
        {/* <Route path='/secondyear' element={<SecondYear/>}/> */}
        </Routes>
        
      {/* </div> */}
      <Footer />
      </Router>
    </>
  );
}

export default App;
