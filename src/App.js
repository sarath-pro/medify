import { useState, useRef } from 'react';
import Advertisement from './Advertisement';
import './App.css';
import BlogsAndNews from './BlogsAndNews';
import Caring from './Caring';
import Download from './Download';
import Faqs from './Faqs';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import Hospital from './Hospital';
import MedicalSpecialist from './MedicalSpecialist';
import OfferSwiper from './OfferSwiper';
import Search from './Search';
import Specialisation from './Specialisation';
import Stats from './Stats';
import MedCenters from './MedCenters';
import MyBookings from './MyBookings';

function App() {
  const [cls, setCls] = useState('main')
  const [medCenters, setMedCenters] = useState([])
  let selectedCity = useRef('')

  const logoClick = () => {
    setCls('main')
  }

  const handleSearch = (data, city) => {
    console.log('in handleSearch::data:: ', data)
    console.log('in handleSearch::city:: ', city)
    setCls('meds')
    setMedCenters(data)
    selectedCity.current = city
  }

  const handleBookings = () => {
    setCls('bookings')
  }

  let bookingDetails = {
    time: '10:30 AM',
    date: '20 April 2024'
  }
  return (
    <div className="App">
      <Header handleBookings={handleBookings} logoClick={logoClick}/>
      {
        cls === 'main' ? (
          <>
            <Hero />
            <Search mainPage={true} handleSearch={handleSearch} cls={'search-container'}/>
            <OfferSwiper />
            <Specialisation />
            <MedicalSpecialist />
            <Caring />
            <BlogsAndNews />
            <Stats />
            <Faqs />
          </>
        ) : (
          cls === 'meds' ? (
            <>
          <MedCenters centers={medCenters} city={selectedCity.current} handleSearch={handleSearch} />
          <Faqs />
          </>
          ) : (
            <MyBookings />
          ) 
          
        )
      }
      <Download />
      <Footer />
    </div>
    // <div>
    //   {/* <Hospital count={5} hospTitle={'Fortis Hospital Richmond Road'} city={'Bangalore'} state={'Karnataka'} hospType={'Smilessence Center for Advanced Dentistry + 1'} isBooking={false}/>
    //   <Advertisement />
    //   <Hospital count={10} hospTitle={'Fortis Hospital Richmond Road'} city={'Bangalore'} state={'Karnataka'} hospType={'Smilessence Center for Advanced Dentistry + 1'} isBooking={true} bookingDetails={bookingDetails}/> */}
    //   {/* <MyBookings /> */}
    // </div>
  );
}

export default App;
