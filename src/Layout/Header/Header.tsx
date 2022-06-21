import React, { FC } from 'react';
import './Header.scss'

const Header:FC = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h1>Movie Serch</h1>
            </div>
           
            <div className="autorization">
                <button className='btn-autorization'>Autorization</button>
            </div>
        </div>
    );
};

export default Header;