import React from 'react';
import logo from '../Images/logo.png';
import '../Css/ListStyle.css';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faMagnifyingGlass } from '@fontawesome/free-solid-svg-icons';
// import { faUser } from '@fontawesome/free-solid-svg-icons';
import { FaPhone } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';




const List = () => {
    return (
        <>
            <header>
                <div className='container container-flex'>
                    <div className='logo-container'>
                        <Link to='/'><img src={logo} alt='logo' width="50" className='logo' /></Link>
                    </div>
                    <nav>
                        <div className='list'>
                            <Link to='/' class='list-item active' >Home</Link>
                            <Link to='/about' class='list-item'>About</Link>
                            <Link to='/services' class='list-item'>Services</Link>
                            <Link to='/contact' class='list-item'>Contact</Link>
                        </div>
                    </nav>
                    <div className='icons'>
                      {/* <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />
                      <FontAwesomeIcon icon={faUser} className='icon'/> */}
                      <Link to='#'><FaPhone className='icon'/></Link>
                      <Link to='#'><FaSearch className='icon'/></Link>
                      <Link to='#'><FaUserAlt className='icon'/></Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default List;