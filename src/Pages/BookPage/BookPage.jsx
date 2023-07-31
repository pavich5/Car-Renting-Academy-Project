import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FaCar, FaCalendar, FaMapMarkerAlt, FaMoneyBillAlt, FaCalendarAlt } from 'react-icons/fa';
import { Box, Button, Card, CardContent, CardHeader, Divider, Grid, Typography } from '@mui/material';
import cars from '../../Data/Cars.json';
import CarInformationContext from '../../Contex/CarInformationContex';
import './BookPage.css';

const BookPage = () => {
  const { dropOffDateContex, pickUpDateContex, pickUpLocationContex, dropOffLocationContex } = useContext(CarInformationContext);
  const { id: CarId } = useParams();
  const bookedCar = cars.find((car) => car.id === parseInt(CarId));

  if (!bookedCar) {
    return <div className="BookPage">Car not found</div>;
  }

  const calculateTotalPrice = () => {
    const pricePerDay = bookedCar.price_per_day;
    const startDate = new Date(pickUpDateContex);
    const endDate = new Date(dropOffDateContex);
    const numberOfDays = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
    return pricePerDay * numberOfDays;
  };

  const totalPrice = calculateTotalPrice();

  return (
    <div className="BookPage">
      <div className="WholeThing">
  <Card>
        <CardHeader title={bookedCar.name} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <img className="car-image" src={bookedCar.image} alt={bookedCar.name} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                <FaCar /> Car Type: {bookedCar.make}
              </Typography>
              <Typography variant="subtitle1">
                <FaMapMarkerAlt /> Location: {pickUpLocationContex}
              </Typography>
              <Typography variant="subtitle1">
                <FaCalendarAlt /> Pick-up Date: {pickUpDateContex}
              </Typography>
              <Typography variant="subtitle1">
                <FaCalendar /> Drop-off Date: {dropOffDateContex}
              </Typography>
              <Typography variant="subtitle1">
                <FaMoneyBillAlt /> Total Price: {totalPrice} USD
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

      <Card>
        <CardHeader title="Booking Details" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">Car Name: {bookedCar.make}</Typography>
              <Typography variant="subtitle1">Location: {pickUpLocationContex}</Typography>
              <Typography variant="subtitle1">Pick-up Date: {pickUpDateContex}</Typography>
              <Typography variant="subtitle1">Drop-off Date: {dropOffDateContex}</Typography>
              <Typography variant="subtitle1">Total Price: {totalPrice} USD</Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" color="primary" fullWidth>
                Pay
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Divider sx={{ my: 4 }} />

   <Box sx={{ mt: 4 }}>
        <Box display="flex" alignItems="center">
          <div className="pickup-dot"></div>
          <div className="line"></div>
          <div className="dropoff-dot"></div>
        </Box>
        <Card variant="outlined" sx={{ p: 4, mt: 2 }}>
          <Typography variant="h6">Reviews</Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Star">&#11088;</span> Great choice!
          </Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Star">&#11088;</span> Customer rating: 8.1 / 10
          </Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Star">&#11088;</span> Most popular fuel policy
          </Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Star">&#11088;</span> Short lines
          </Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Star">&#11088;</span> Easy to find counter
          </Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Star">&#11088;</span> Helpful counter staff
          </Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Star">&#11088;</span> Free Cancellation
          </Typography>
        </Card>
      </Box>
      </div>
    
    </div>
  );
};

export default BookPage;
