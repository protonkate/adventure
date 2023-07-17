import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import { Button } from './containers/Button';
import { MenuItems } from './containers/MenuItems';
import './Header.css';


function Header() {
  
  let  i1 = "https://img.icons8.com/office/16/000000/menu--v1.png"; 
  let i2 ="https://img.icons8.com/office/30/000000/close-window.png";

  const [click, setClick] = useState(true);
  const [icon, setIcon] = useState(i1);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
      document.querySelector('.menu-icon').classList.add('visible');
      
    }
    else {
      setButton(true);
      document.querySelector('.menu-icon').classList.remove('visible');
      
    }  
  }

  window.addEventListener('resize', showButton);
  

  const handleClick = () => {
    setClick(!click);
    console.log(document.querySelector('.nav-list'));
    console.log(click);

    if (click === true) {
     setIcon(i1);
     document.querySelector('.nav-list').style.left = '-110%';
    }
    else {
      setIcon(i2);
      document.querySelector('.nav-list').style.left = '0';
    }
  }
    return(
      <>
        <div className='navbar'>
          <div className='navbar-container'>
           
            <div  className='iconMenu'>
               <Link  to="/" className='navbar-logo'>TRVL</Link>
                <div className='menu-icon' onClick={handleClick}>
                  <img alt='#' /*onClick={displayMenu}*/ src={icon}/>
                </div>
             </div>
         
            <ul className='nav-list'>
              {MenuItems.map((item, index) => {
                return  (
                <li className={item.liClass} key={index}>
                  <Link to={item.to} className={item.linkClass}>{item.title}</Link>
                 </li>
                )
              })}
    
            {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </ul>

             
          </div>
        </div>
       
       </> 
    )
}

export default Header;