import React from 'react'
// import Neoncursor from '../Components/Neoncursor';
import Navbar from '../Components/Navbar.js';
import Footer from '../Components/Footer.js';
import Body from '../Components/Body';
import './Home.css';

const Home = () => {

  return (
    <div>
    <Navbar />
    {/* <Neoncursor /> */}
    <Body/>
    <Footer />
    </div>
  )
}

export default Home;