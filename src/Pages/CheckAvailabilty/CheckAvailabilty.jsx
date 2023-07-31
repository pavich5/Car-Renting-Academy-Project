import React, { useContext, useState } from 'react';
import './CheckAvailabilty.css';
import { FaSearch, FaCalendar } from 'react-icons/fa';
import carsData from '../../Data/Cars.json';
import RentCar from '../../Components/RentCarCart/RentCartCart';
import CarInformationContext from '../../Contex/CarInformationContex';
const CheckAvailabilty = () => {
  const [pickUpLocation, setPickUpLocation] = useState();
  const [pickUpDate, setPickUpDate] = useState();
  const [dropOffDate, setDropOffDate] = useState();
  const [showAvailableCars, setShowAvailableCars] = useState(false);
  const [filteredCars, setFilteredCars] = useState([]);
  console.log(carsData);

  const { dropOffDateContex, pickUpDateContex, pickUpLocationContex, setPickUpDateContex, setPickUpLocationContex, setdropOffDateContex } = useContext(CarInformationContext)

  console.log(pickUpDateContex, dropOffDateContex, pickUpLocationContex);
  const handleLocationChange = (event) => {
    setPickUpLocation(event.target.value);
    setPickUpLocationContex(event.target.value);
  };

  const handlesetPickUpDateContex = (selectedPickUpDate) => {
    setPickUpDateContex(selectedPickUpDate)
  }

  const handlePickUpDateChange = (event) => {
    const selectedPickUpDate = event.target.value;
    if (selectedPickUpDate <= getTodayDate()) {
    } else {
      setPickUpDate(selectedPickUpDate);
      handlesetPickUpDateContex(selectedPickUpDate)
    }
  };

  const handleDropOffDateChange = (event) => {
    const selectedDropOffDate = event.target.value;
    if (pickUpDate && pickUpDate >= selectedDropOffDate) {
      setDropOffDate(null)
    } else {
      setDropOffDate(selectedDropOffDate);
      setdropOffDateContex(selectedDropOffDate)
    }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  };

  const submitSearch = () => {
    if (!pickUpLocation || !pickUpDate || !dropOffDate) {
      alert('Please select valid pick-up location, pick-up date, and drop-off date.');
      return;
    }

    // Perform search logic based on pickUpLocation, pickUpDate, and dropOffDate
    // For demo purposes, we'll just filter the cars here
    const filteredCars = carsData.filter((car) =>
      car.availability.some(
        (availabilityItem) =>
          availabilityItem.location === pickUpLocation &&
          availabilityItem.dates.includes(pickUpDate)
      )
    );

    setShowAvailableCars(true);
    setFilteredCars(filteredCars);
  };

  return (
    <>
      <div className="CheckAvailabilty">
        <div className="FullSearchCard">
          <div className="instructions">
            <h1>Car Hire – Search, Compare & Save</h1>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
              </svg>{' '}
              Free cancellations on most bookings
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
              </svg>{' '}
              60,000+ locations
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                <path d="M56.33 100a4 4 0 0 1-2.82-1.16L20.68 66.12a4 4 0 1 1 5.64-5.65l29.57 29.46 45.42-60.33a4 4 0 1 1 6.38 4.8l-48.17 64a4 4 0 0 1-2.91 1.6z"></path>
              </svg>{' '}
              Customer support in 40+ languages
            </p>
          </div>
          <div className="inputDetails">
            <div className="enterLocation">
              <FaSearch />
              <select name="location" id="locationSelect" value={pickUpLocation} onChange={handleLocationChange}>
                <option value="">Select pick-up location</option>
                <option value="Bogdanci">Bogdanci</option>
                <option value="Gevgelija">Gevgelija</option>
                <option value="Furka">Furka</option>
              </select>
            </div>

            <div className="pickUpDate">
              <FaCalendar />
              <input
                type="date"
                name=""
                id=""
                placeholder="Pick-up Date"
                value={pickUpDate}
                onChange={handlePickUpDateChange}
              />
              <label className="inputLabel">Pick up date</label>
            </div>

            <div className="dropOffDate">
              <FaCalendar />
              <input
                type="date"
                name=""
                id=""
                placeholder="Drop-off-location"
                value={dropOffDate}
                onChange={handleDropOffDateChange}
              />
              <label className="inputLabel">Drop off date</label>
            </div>

            <div className="Button">
              <button onClick={submitSearch}>Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="ShowAvailableCars">
        {showAvailableCars ? (
          <div className="carsList">
            {filteredCars.length === 0 ? (
              <h1 style={{ textAlign: 'center', marginBottom: '130px' }}>No available cars for the selected location and dates.</h1>
            ) : (
              filteredCars.map((car) => <RentCar key={car.id} car={car} />)
            )}
          </div>
        ) : (
          <h1 style={{ textAlign: 'center', marginBottom: '130px' }}>Search for your car</h1>
        )}
      </div>
    </>

  );
};

export default CheckAvailabilty;
