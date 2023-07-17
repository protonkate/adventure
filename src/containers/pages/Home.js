import React from 'react';

import HeroSection from '../HeroSection';
import Cards from './Cards';

import './Home.css';
import '../../App.css';
import Footer from '../Footer';


function Home() {
  return (
    <div id='home'>
        <HeroSection/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home
