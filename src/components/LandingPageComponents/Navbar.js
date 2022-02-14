import React, { useState } from 'react';
import './Navbar.css';



const Navbar = () => {
    const [colorChange, setColorChange] = useState(false);
    
    const changeNavbarColor = () => {
    if (window.scrollY > 300) {
        setColorChange(true)
    } else {
        setColorChange(false)
    }
    }

    window.addEventListener('scroll', changeNavbarColor);

    return (
        <div className={colorChange ? 'nav-colored' : 'nav-transparent'} >
            <div className='wrapper'>
                <nav>
                    <a className="navLink" href='/'>Home</a>
                    <a className="navLink" href='#about'>About</a>
                    <a className="navLink" href='#services'>Services</a>
                    <a className="navLink" id="end" href='/login'>Login</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar