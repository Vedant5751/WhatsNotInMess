import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-5xl font-bold my-8 mx-auto">What's not in mess</h1>
        <div>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </Link>
          <Link to="/detail" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
