import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import '../Css/Footer.css';


const Footer = () => {
    return(
        <>
            <footer>
                <div className='container container-flex'>
                    <div className='icons'>
                      <FaFacebook className='icon'/>
                      <FaInstagram className='icon'/>
                      <FaYoutube className='icon'/>
                    </div>
                    <div className='line'>
                        <hr/>
                        <hr/>
                    </div>
                    <div className='footer-content'>
                        2023 &copy; ClikTech | All Rights Reserved 
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;