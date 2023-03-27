import React, { useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';


const cards = [
  {
    id: 1,
    title: 'PokeDex',
    description: 'Proyecto individual en Henry Labs',
    imageUrl: 'https://live.staticflickr.com/65535/52774160468_3dc5c234bb_b.jpg',
    url:"https://github.com/Alexpalagomez1255/Pokemon"
  },
  {
    id: 2,
    title: 'Huellitas de amor',
    description: 'Proyecto grupal en Henry Labs',
    imageUrl: 'https://live.staticflickr.com/65535/52769220781_811b847521_h.jpg',
    url:"https://huellitas-de-amor.vercel.app/"
  },
  {
    id: 3,
    title: 'Portafolio',
    description: 'Portafolio personal',
    imageUrl: 'https://live.staticflickr.com/65535/52773679716_d5f252371d_b.jpg',
    url:"https://github.com/Alexpalagomez1255/portfolio"
  },
];

const Card = ({ card }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={card.imageUrl} alt={card.title} className="h-48 w-64 object-cover mb-4" />
      <h3 className="text-lg font-bold mb-2">{card.title}</h3>
      <p className="text-gray-600">{card.description}</p>
      <a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:underline"
    >
      {card.title}
    </a>
    </div>
  );
};

const CardSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(currentIndex === 0 ? cards.length - 1 : currentIndex - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(currentIndex === cards.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-full transform transition-transform duration-300 ${
              index === currentIndex ? 'translate-x-0' : index < currentIndex ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <Card card={card} />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevClick}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full p-2 hover:bg-gray-800"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default CardSlider;