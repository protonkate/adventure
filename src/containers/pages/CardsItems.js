import React from 'react'
import {Link} from 'react-router-dom'


function CardsItems(props) {
  return (
    <div>
      <li className='cards__item'>
        <Link to={props.to} className='cards__item__link'>
            <figure className='cards__item__pic-wrap' data-category={props.lable}>
               <img src={props.src} className='cards__item__img' alt='#'></img> 
            </figure>
            <div className='cards__item__info'>
                <h5 className='cards__item__text'>{props.text}</h5>
            </div>
        </Link>
      </li>
    </div>
  )
}

export default CardsItems

