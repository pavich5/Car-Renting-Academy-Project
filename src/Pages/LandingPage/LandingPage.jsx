import { useEffect, useRef, useState } from 'react';
import './LandingPage.css';
import carsdata from '../../Data/Cars.json';
import Car from '../../Components/Car/Car';
import { Link } from 'react-router-dom';
import { motion, useScroll } from "framer-motion"

const LandingPage = () => {
  const [cars, setCars] = useState(carsdata);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 8;
  const [itemsPerPage, setItemsPerPage] = useState(carsPerPage);
  const carsRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const handleExploreCars = () => {
    carsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const totalPagesCars = Math.ceil(cars.length / itemsPerPage);

  const handleNextPageCars = () => {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPagesCars));
  };
  
  const handlePrevPageCars = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  return (
    <>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="LandingPage">
          <div className="informations">
            <h2>Find, book, or<br /> rent a car — <br />quickly and <br />easily!</h2>
            <p>Streamline your car rental experience with<br /> our effortless booking process.</p>
            <div className="buttons">
              <button onClick={handleExploreCars}>Explore Cars</button>
              <Link to={'/available'}>
                <button style={{marginLeft: '30px'}}>Find Available Cars</button>
              </Link>
            </div>
          </div>
          <div className="image">
            <img src="https://assets-clean.local-car-finder.com/images/11277/11277_st1280_089.png" alt="car" />
          </div>
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="carsShowing" ref={carsRef}>
          <h1 className='carCatalog'>Car Catalogue</h1>
          <p>Explore our cars you might like</p>

          <div className="carsList">
            {cars.map((car) => (
              <Car key={car.make + car.model} car={car} />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default LandingPage;
