import React from 'react';
import Sun from '../assets/desktop/icon-sun.svg';
import Moon from '../assets/desktop/icon-moon.svg';

const Header = () => {

    return (
        <>
            <div className="header" >
                <p className="header__title">devjobs</p>
                <div className="header__toggle">
                    <img src={Sun} alt={Sun} />
                    <div>
                        <input type="checkbox" className="checkbox" id="dark-mode" />
                        <label htmlFor="dark-mode" className="label">
                            <div className="ball"></div>
                        </label>
                    </div>
                   
                    <img src={Moon} alt={Moon}/>
                </div>
            </div>
        </>
    );
};

export default Header;