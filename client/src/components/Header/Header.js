import React from 'react';
// import { Link } from 'react-router-dom'
import './Header.scss';
import logo from '../Assets/Logo/LOGO.png'

class Header extends React.Component {
    render() {
        return (

            <header className='header'>

                <div className="header__wrapper">

                    <div className='header__logo'>
                        <img src={logo} alt=''/>
                    </div> 

                    <div className='searchbox'>
                        <input className='header__search' type="search" placeholder="Search" name="searchbar" />
                    </div>            

                </div>

            </header>

        );
    }
}

export default Header