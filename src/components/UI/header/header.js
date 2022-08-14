import React from 'react';
import './header.css';
import PropTypes from 'prop-types';
const Header =(props)=>{
    return(
        <header className="main-wrapper">
            <h1>آزمون شخصیت</h1>
        </header>
    )
}
export default React.memo(Header);