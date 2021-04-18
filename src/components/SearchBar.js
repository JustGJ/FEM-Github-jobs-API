import React from 'react';
import iconSearch from '../assets/desktop/icon-search.svg';
import iconLocation from '../assets/desktop/icon-location.svg';
import Button from '../components/Button';

const Filters = ( {description, location, fullTime, finalSearch, setDescription, setLocation, setFullTime }) => {

    return (
        <form onSubmit={finalSearch} >
            <div className="searchBar">
                <div className="searchBar__search">
                    <img src={iconSearch} alt="icon Search"/>
                    <input 
                        type="text"  
                        placeholder="Filter by title, companies, expertise ..." 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                    />
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
                <Button typeBtn="search">Search</Button>
            </div>
        </form>
    );
};

export default Filters;