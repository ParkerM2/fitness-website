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
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                    <a href='#'>Home</a>
                </nav>
            </div>
        </div>
    );
}

export default Navbar