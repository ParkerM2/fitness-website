import React from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../app/routes';
import '../css/landingpage.css';
import aboutImage from '../images/about.jpg';
import services from '../data/services';
import Navbar from '../components/LandingPageComponents/Navbar';
import Footer from '../components/LandingPageComponents/Footer';



const LandingPage = () => {
    return (
        <div id="top">
            <Navbar />
            <header>
                <div className='content'>
                    <h1>Fitness Helper</h1>
                    <Link to={ROUTES.loginRoute()} className='btn'>Get Started</Link>
                </div>
            </header>

            {/* about section */}
            <div className='body'>
                <section className='about'>
                    <div className='row'>
                        <div className='image' id="about">
                            <img src={aboutImage} alt="about image" />
                        </div>
                        <div className='content'>
                            <h1> About Us</h1>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ducimus rem, consequatur dignissimos neque nisi se</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ducimus rem, consequatur dignissimos neque nisi se</p>
                            <Link to={ROUTES.loginRoute()} className='btn'>Learn More </Link>
                        </div>
                    </div>
                </section>

                {/* services */}

                <section className='services'>
                    <h1>Services</h1>
                    <div className='container' id="services">
                        {services.map(({ id, image, header, text, btn }) => (
                            <div key={id} className='box'>
                                <img src={image} />
                                <div className='info'>
                                    <h3> {header} </h3>
                                    <p> {text} </p>
                                    <Link className='btn' to={ROUTES.moreRoute()}> {btn} </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default LandingPage