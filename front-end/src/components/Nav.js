import React, {useState} from 'react';
import {Link}  from 'react-router-dom';
import "./nav.css";



function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);
  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
  
    const onMouseEnter = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(true);
      }
    };
  
    const onMouseLeave = () => {
      if (window.innerWidth < 960) {
        setDropdown(false);
      } else {
        setDropdown(false);
      }
    };
  
    return (
      <>
        <nav className='navbar'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Raffy
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to='/Skills'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className='nav-item'>
            <a href='https://drive.google.com/file/d/1AZKOw8k1zrDWeUETRlve02L7z3eviZRZ/view?usp=sharing'
                className='nav-links'
                onClick={closeMobileMenu}
                target = "_blank" 
                rel = "noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>

        </nav>
      </>
    );
  }

export default Navbar