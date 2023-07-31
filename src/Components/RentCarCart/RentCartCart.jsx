import { Link } from 'react-router-dom';

const RentCar = ({ car }) => {
  return (
    <div className="CarCart">
      <Link to={`/book/${car.id}`}>
      <div key={car.make + car.model} className="carItem">
        <h1>{car.make} {car.model}</h1>
        <p style={{textAlign:'left', fontSize:'15px', fontWeight:500, color:'#636e72'}}>{car.class}</p>
        <img src={car.image} alt="" />
        <div className="carDetailsInfo">
          <div className="mode">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="2 2 20 20"><path fill="#90A3BF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.53 2 12 2Z"></path><rect width="16" height="16" x="4" y="4" fill="#fff" rx="8"></rect><path fill="#90A3BF" d="M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6Z"></path><rect width="8" height="8" x="8" y="8" fill="#fff" rx="4"></rect><path fill="#90A3BF" d="M11 17h2v4h-2zm6-6h4v2h-4zM3 11h4v2H3z"></path></svg>
            <p>{car.transmission === 'M' ? 'Manual' : 'Automatic'}</p>
          </div>
          <div className="mode">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="2 2 20 20"><path fill="#90A3BF" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.53 2 12 2Z"></path><rect width="16" height="16" x="4" y="4" fill="#fff" rx="8"></rect><path fill="#90A3BF" d="M12 6c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.682-6-6-6Z"></path><rect width="8" height="8" x="8" y="8" fill="#fff" rx="4"></rect><path fill="#90A3BF" d="M11 17h2v4h-2zm6-6h4v2h-4zM3 11h4v2H3z"></path></svg>
            <p>{car.drive}</p>
          </div>
          <div className="mode">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="1.25 2 21.5 20.75"><path fill="#90A3BF" d="m22.34 9.33-2-1c-.37-.18-.83-.04-1.01.33-.19.38-.04.83.33 1.01l1.59.79v4.79l-3.75.01V5c0-2-1.34-3-3-3h-8c-1.66 0-3 1-3 3v16.25H2c-.41 0-.75.34-.75.75s.34.75.75.75h17c.41 0 .75-.34.75-.75s-.34-.75-.75-.75h-1.5v-4.49l4.5-.01c.42 0 .75-.34.75-.75v-6a.76.76 0 0 0-.41-.67ZM6 6.89C6 5.5 6.85 5 7.89 5h5.23C14.15 5 15 5.5 15 6.89v1.23C15 9.5 14.15 10 13.11 10H7.89C6.85 10 6 9.5 6 8.11V6.89Zm.5 5.36h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75Z"></path></svg>
            <p>{car.combination_mpg} MPG</p>
          </div>
        </div>
        <div className="price">
          ${car.price_per_day}/day
          <button>Rent Now</button>
        </div>
      </div>
      </Link>
   
    </div>
  );
};

export default RentCar;
