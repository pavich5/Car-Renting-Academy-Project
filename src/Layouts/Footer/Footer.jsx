// Footer.js
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="Footer-contact">
          <div className="Footer-logo">Car Rental</div>
          <p>123 Main Street, City, Country</p>
          <p>Phone: (123) 456-7890</p>
          <div className="Footer-social">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <nav className="Footer-nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Cars</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Footer-copyright">
        &copy; {new Date().getFullYear()} Car Rental. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
