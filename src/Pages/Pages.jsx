import {Routes,Route} from 'react-router-dom'
import LandingPage from './LandingPage/LandingPage'
import CarDetailsPage from './CarDetailsPage/CarDetailsPage'
import SignInPage from '../SignInPage/SignInPage'
import CheckAvailabilty from './CheckAvailabilty/CheckAvailabilty'
import BookPage from './BookPage/BookPage'
const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/available' element={<CheckAvailabilty/>}/>
        <Route path='/sign' element={<SignInPage/>}/>
        <Route path='/book/:id' element={<BookPage/>}/>
        <Route path='/:id' element={<CarDetailsPage/>}/>

    </Routes>
  )
}

export default Pages