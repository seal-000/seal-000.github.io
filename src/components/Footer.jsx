import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-customPeach text-gray-900 p-4 text-center space-x-6">
      <a
        href="https://linkedin.com/in/mirandacasan/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-black transition-transform duration-300 hover:scale-110 inline-flex "
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/seal-000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-black transition-transform duration-300 hover:scale-110 inline-flex "
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
    </footer>
  );
};

export default Footer;
