import React from 'react'
import CardsItems from './CardsItems'

import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out this EPIC Destination</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardsItems src='images/img-9.jpg' text="Explore the hidden waterfall deep inside the Amazon Jungle" lable="Adventure" to="/services"/>
              <CardsItems src='images/img-2.jpg' text="Travel through the islands of Bali in a private cruise" lable="Luxury" to="/services"/>

            </ul>
            <ul className='cards__items'>
              <CardsItems src='images/img-5.jpg' text="Explore the hidden waterfall deep inside the Amazon Jungle" lable="Adventure" to="/products"/>
              <CardsItems src='images/img-4.jpg' text="Travel through the islands of Bali in a private cruise" lable="Luxury" to="/services"/>
              <CardsItems src='images/img-6.jpg' text="Travel through the islands of Bali in a private cruise" lable="Luxury" to="/products"/>

            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards

