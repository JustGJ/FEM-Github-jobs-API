import React, { useEffect }  from 'react';
import Sun from '../assets/desktop/icon-sun.svg';
import Moon from '../assets/desktop/icon-moon.svg';

const Header = ( {  darkMode, setDarkMode}) => {

    const htmlTag = document.body.parentElement;
   
    useEffect(() => {
        if (!localStorage.getItem('theme')) {  // Renvoie la valeur associée à la clé passée en paramètre. Ici, si il n'y a pas de value, alors ...
            setDarkMode(true)
            localStorage.setItem('theme', 'light') // Ajoute nouveau stockage, ou modifie si existe déjà : key = theme, value = light
            htmlTag.setAttribute('data-theme', 'light')
        } else {
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
        }
    }, [])
    
    const switchTheme = () => {
        if (!darkMode) {
            localStorage.setItem('theme', 'light')
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
            setDarkMode(true)
        } else {
            localStorage.setItem('theme', 'dark')
            htmlTag.setAttribute('data-theme', localStorage.getItem('theme'))
            setDarkMode(false)
        }
    }
   

    return (
        <>
            <div className="header" >
                <p className="header__title">devjobs</p>
                <div className="header__toggle">
                    <img src={Sun} alt="Sun" />
                    <button
                        className={`header__toggle__btn ${!darkMode ? 'active' : ''}`}
                        onClick={() => switchTheme()}
                    >
                        <span className="slider" />
                    </button>
                    <span>
                        <img src={Moon} alt="Moon" />
                    </span>
                </div>
                </div>
        </>
    );
};

export default Header;