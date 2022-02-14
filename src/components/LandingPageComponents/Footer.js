import React from 'react';
import './Footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter} from '@fortawesome/free-brand-svg-icons';
import github from '../../images/github-brands.svg';
import linkedin from '../../images/linkedin-brands.svg';
import codeSolid from '../../images/code-solid.svg';
import dev from '../../images/dev-brands.svg';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="footer-left col-md-4 col-sm-6">
                <p class="about">
                    <span> About the company</span> Ut congue augue non tellus bibendum, in varius tellus condimentum. In scelerisque nibh tortor, sed rhoncus odio condimentum in. Sed sed est ut sapien ultrices eleifend. Integer tellus est, vehicula eu lectus tincidunt,
                    ultricies feugiat leo. Suspendisse tellus elit, pharetra in hendrerit ut, aliquam quis augue. Nam ut nibh mollis, tristique ante sed, viverra massa.
                </p>
                <div class="icons">
                    <a href="#">
                        <img className="svg" src={github} alt="github image link" />
                    </a>
                    <a href="#">
                        <img className="svg" src={linkedin} alt="linkedin image link" />                    
                    </a>
                    <a href="#">
                        <img className="svg" src={codeSolid} alt="code image link" />                  
                    </a>
                    <a href="#">
                        <img className="svg" src={dev} alt="developer image link" />                  
                    </a>
                </div>
            </div>
            <div class="footer-center col-md-4 col-sm-6">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span> Street name and number</span> City, Country</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p> (+00) 0000 000 000</p>
                </div>
                <div>
                    <i class="fa fa-envelope"></i>
                    <p><a href="#">office@company.com</a></p>
                </div>
            </div>
            <div class="footer-right col-md-4 col-sm-6">
                <h2> Fitness<span> Helper</span></h2>
                <p class="menu">
                    <a href="#top"> Home</a> |{ ' '}
                    <a href="#about"> About</a> |{ ' '}
                    <a href="#services"> Services</a> |{ ' '}
                    <a href="https://parkermanning.net/" target="_blank"> Portfolio</a> |{ ' '}
                    <a href="#"> News</a> |{ ' '}
                    <a href="https://www.linkedin.com/in/parkerm2/" target="_blank"> Contact</a> 
                </p>
                <p class="name">Fitness Helper &copy; 2022</p>
            </div>
        </footer>
    );
}

export default Footer