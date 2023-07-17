import { Button } from './Button';
import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>Join the Adventure newsletter to recieve our best vacation deals</p>
        <p className='footer-subscription-text'>You can unsubscribe any time</p>
        <div className='input-areas'>
            <form>
                <input type="email" name='email' placeholder='Your email' className='footer-input'></input>
                <Button buttonStyle='btn-outline'>Subscribe</Button>
            </form>
        </div>

      </section>
      <div className='links'>
        <div className='footer_link_wrapper'>
          <div className='footer_link_items'>
            <h2>Videos</h2>
            <Link to='/'>Submit video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencers</Link>

          </div>
        </div>
      </div>
      <section className='social_media'>
        <div className='social_midia_wrapper'>
          <div className='footer_logo'>
           <Link to='/' >TRVL</Link>
          </div>
          <small>TRVL o 2022</small>
        </div>
        <div className='facebook'>
          <Link to='/' target='_blank' aria-label='Facebook'>F</Link>
        </div>
      </section>
    </div>
  )
}

export default Footer
