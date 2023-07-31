import React, { useState } from 'react';
import './CarDetailsPage.css';
import cars from '../../Data/Cars.json';
import { Link, useParams } from 'react-router-dom';
import { FaCar, FaCalendarAlt, FaCog, FaRoad, FaTachometerAlt, FaCube, FaBolt, FaMoneyBillAlt } from 'react-icons/fa';

const CarDetailsPage = () => {
  const { id: CarId } = useParams();
  const foundCar = cars.find((car) => car.id === parseInt(CarId));
  const [showDates, setShowDates] = useState(false);
  console.log(foundCar);
  const handleClick = () => {
    setShowDates(true)
  }
  return (
    <div className="CarDetailsPage">
      {foundCar ? (
        <div className="CarCard">
          <div className="CarImageWrapper">
            <img src={foundCar.image} alt={`${foundCar.make} ${foundCar.model}`} className="CarImage" />
          </div>
          <div className="CarInfo">
            <h2>{foundCar.make} {foundCar.model}</h2>
            <div className="carDetails">
              <p>
                <FaCar />
                <span>{foundCar.class}</span>
              </p>
              <p>
                <FaCalendarAlt />
                <span>{foundCar.year}</span>
              </p>
              <p>
                <FaCog />
                <span>{foundCar.transmission === 'A' ? 'Automatic' : 'Manuel'}</span>
              </p>
              <p>
                <FaRoad />
                <span>{foundCar.drive}</span>
              </p>
              <p>
                <FaTachometerAlt />
                <span>{foundCar.city_mpg} City / {foundCar.highway_mpg} Highway / {foundCar.combination_mpg} Combined</span>
              </p>
              <p>
                <FaCube />
                <span>{foundCar.displacement}</span>
              </p>
              <p>
                <FaBolt />
                <span>{foundCar.fuel_type}</span>
              </p>
              <p>
                <FaMoneyBillAlt />
                <span>${foundCar.price_per_day} per day</span>
              </p>
            </div>
            <button onClick={handleClick}>Check Availability</button>
            {showDates ? (
              <div className="availabilityDates">
                {foundCar.availability.map((availability) => (
                  availability.dates.map((date) => (
                    <Link to={`/available`}>
                       <div key={date} className="dateBox">
                    <p>{date}</p>
                  </div>
                    </Link>
                  ))
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <p className="CarNotAvailable">Car not found!</p>
      )}
    </div>
  );
};

export default CarDetailsPage;
