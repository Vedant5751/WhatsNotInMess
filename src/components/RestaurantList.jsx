// RestaurantCard.js
import React, { useState } from 'react';

function RestaurantCard({ name, picture, location, menu, phone, onClick }) {
    const [showDetail, setShowDetail] = useState(false);

    const handleReadMoreClick = () => {
        setShowDetail(true);
    };

    const handleCloseClick = () => {
        setShowDetail(false);
    };

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [picture, picture, picture, picture, picture ]; // Add more image URLs here

    const handlePrevClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="m-4 max-w-sm border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-2xl object-cover" src={picture} alt={name} />
            </a>
            <div className="p-5 bg-[rgb(229,224,255)] rounded-b-2xl">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{location}</p>
                <p>{menu}</p>
                <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={handleReadMoreClick}
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>

            {showDetail && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="relative bg-white w-1/2 h- rounded-lg">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={handleCloseClick}
                        >
                            X
                        </button>
                        <div className="flex">
                            <div className="m-4 w-1/2 border border-gray-200 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex">
                                    <div className=''>
                                            <img className="object-scale-down" src={images[currentImageIndex]} alt={name} />
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button
                                            className="bg-gray-200 rounded-full p-2 mr-2"
                                            onClick={handlePrevClick}
                                        >
                                            &lt;
                                        </button>
                                        <button
                                            className="bg-gray-200 rounded-full p-2"
                                            onClick={handleNextClick}
                                        >
                                            &gt;
                                    </button>
                                </div>
                            </div>
                            <div className="w-1/2 p-4">
                                <h2 className="text-2xl font-bold mb-4">{name}</h2>
                                <p>{location}</p>
                                <p>{phone}</p>
                                {/* Add more text content here */}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RestaurantCard;
