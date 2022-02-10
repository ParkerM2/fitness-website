import React from 'react'
import { Link } from 'react-router-dom';
import ROUTES from '../app/routes';
import '../css/landingpage.css';
import aboutImage from '../images/about.jpg';
import one from '../images/1.jpg';
import two from '../images/2.jpg';
import three from '../images/3.jpg';
import four from '../images/4.jpg';
import five from '../images/5.jpg';
import six from '../images/6.jpg';

let services = [
    {
        id: 1,
        image: one,
        header: 'Running',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit suscipit hic nam facilis cupiditate',
        btn: 'More',
    },
    {
        id: 2,
        image: two,
        header: 'Yoga',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit suscipit hic nam facilis cupiditate',
        btn: 'More',
    },
    {
        id: 3,
        image: three,
        header: 'Body Building',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit suscipit hic nam facilis cupiditate',
        btn: 'More',
    },
    {
        id: 4,
        image: four,
        header: 'Cardio',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit suscipit hic nam facilis cupiditate',
        btn: 'More',
    },
    {
        id: 5,
        image: five,
        header: 'HIIT',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit suscipit hic nam facilis cupiditate',
        btn: 'More',
    },
    {
        id: 6,
        image: six,
        header: 'Weight Lifting',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At velit suscipit hic nam facilis cupiditate',
        btn: 'More',
    },
   
];

const LandingPage = () => {
    return (
        <div>
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
                    <div className='image'>
                        <img src={aboutImage} alt="about image" />
                    </div>
                    <div className='content'>
                        <h1> About Us</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ducimus rem, consequatur dignissimos neque nisi se</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab ducimus rem, consequatur dignissimos neque nisi se</p>
                        <Link to={ROUTES.signUpRoute()} className='btn'>Learn More </Link>
                    </div>
                </div>
            </section>

            {/* services */}

            <section className='services'>
                <h1>Services</h1>
                <div className='container'>
                    {services.map(({ id, image, header, text, btn }) => (
                        <div key={id} className='box'>
                            <img src={image} />
                            <div className='info'>
                                <h3> {header} </h3>
                                <p> {text} </p>
                                <button className='btn'> <Link to={ROUTES.moreRoute()}> {btn} </Link></button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            </div>
        </div>
    )
}

export default LandingPage