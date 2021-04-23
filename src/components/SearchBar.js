import React from 'react';
import iconSearch from '../assets/desktop/icon-search.svg';
import iconLocation from '../assets/desktop/icon-location.svg';
import iconFilter from '../assets/mobile/icon-filter.svg';
import Button from '../components/Button';
import { useMediaQuery } from 'react-responsive'

const SearchBar = ( {description, location, fullTime, finalSearch, setDescription, setLocation, setFullTime }) => {

    // == location and fullTime none
    const isTabletOrMobil = useMediaQuery({ query: '(max-width: 1110px)' });
    const isMobil = useMediaQuery({ query: '(max-width: 689px)' });


    return (
        <div className="searchBar">
            <div className="searchBar__description">
                {isMobil ? null : <img src={iconSearch} onClick={finalSearch}  alt="icon Search"/>}
                <input 
                    type="text"  
                    placeholder={isTabletOrMobil ? "Filter by title ..." : "Filter by title, companies, expertise ..."}
                    value={description} 
                    onChange={(e) => setDescription(e.target.value)} 
                />
                {/* {isMobil ? null : <img src={iconSearch} alt="icon Search"/>} */}

            </div>
            <div className="searchBar__location">
                <img src={iconLocation} alt="icon Location"/>
                <input 
                    type="text" 
                    placeholder="Filter by location ..."  
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                />
            </div>
            <div className="searchBar__fullTime">
                <input 
                    type="checkbox" 
                    id="fullTime" 
                    checked={fullTime} 
                    onChange={(e) => setFullTime(e.target.checked)}  
                />
                <label htmlFor="fullTime" name="fullTime">Full Time Only</label>
            </div>
            {
                isMobil ? 
                <>
                    <img src={iconFilter} alt="icon filter"/>
                    <img src={iconSearch} style={{marginLeft : '1.5rem'}} onClick={finalSearch}  alt="icon Search"/>
                </>

                : <Button clic={finalSearch} typeBtn="search">Search</Button> 
            }
        </div>
    );
};

export default SearchBar;