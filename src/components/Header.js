import React, { useEffect }  from 'react';
import Sun from '../assets/desktop/icon-sun.svg';
import Moon from '../assets/desktop/icon-moon.svg';

const Header = ( {darkMode, setDarkMode }) => {

    const htmlTag = document.body.parentElement;
    console.log(htmlTag);

    useEffect(() => {
        if (!localStorage.getItem('theme')) {
            setDarkMode(true)
            localStorage.setItem('theme', 'light')
            htmlTag.setAttribute('data-theme', 'light')
        } else {
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
        }
    }, [])

    const switchTheme = () => {
        if (!darkMode) {
            localStorage.setItem('theme', 'dark')
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
            setDarkMode(true)
        } else {
            localStorage.setItem('theme', 'light')
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
            setDarkMode(false)
        }
    }

    return (
        <>
            <div className="header" >
                <p className="header__title">devjobs</p>
                <div className="header__toggle">
                    <img src={Sun} alt={Sun} />
                    <div>
                        <input type="checkbox" className="checkbox" id="dark-mode" value={darkMode} onClick={() => switchTheme()} />
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