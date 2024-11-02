import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import quotesData from '../data.json'; 

const Cover = ({ onDismiss }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // Randomize quotes
    const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
    setQuote(quotesData.quotes[randomIndex].quote);
    setAuthor(quotesData.quotes[randomIndex].author);
  }, []);

  const handleClick = () => {
    setIsAnimating(true);
  };

  return (
    <div
      className={`fixed inset-0 bg-customGreen flex items-center justify-center transition-opacity duration-500 z-50 ${isAnimating ? 'animate-moveIn' : ''}  px-8`}
      onClick={handleClick}
    >
      <div className="mb-2 mx-8">
        <div className="text-gray-900  text-4xl sm:text-5xl md:text-6xl mb-6">{quote}</div>
        <div className="text-gray-900 text-2xl sm:text-3xl md:text-4xl mb-6 text-right">{author}</div>
      </div>
      <div className="absolute bottom-20">
        <FontAwesomeIcon icon={faSortDown} size="6x" className="text-white mt-4 animate-upDown" />
      </div>
    </div>
  );
};

export default Cover;
