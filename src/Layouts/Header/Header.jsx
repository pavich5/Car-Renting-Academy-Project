import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <Link to={`/`}>
      <img src="https://cars-showcase-ftmk.vercel.app/logo.svg" alt="logo" />
      </Link>
      <Link to={'/sign'}>
      <button>Sign In</button>
      </Link>
    </header>
  );
}

export default Header;
