import React, { useState } from 'react';
import iconSearch from '../assets/desktop/icon-search.svg';
import iconLocation from '../assets/desktop/icon-location.svg';
import Button from '../components/Button';

const Filters = ( {filter }) => {

    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState('');


    return (
        <div className="searchBar">
            <div className="searchBar__search">
                <img src={iconSearch} alt=""/>
                <input type="text" name="title" placeholder="Filter by title, companies, expertise ..." value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="searchBar__location">
                <img src={iconLocation} alt=""/>
                <input type="text" name="location" placeholder="Filter by location ..."  value={location} onChange={(e) => setLocation(e.target.value)}/>
            </div>
            <div className="searchBar__fullTime">
                <input type="checkbox" name="fullTime" placeholder="Filter by title ..." value={fullTime} onChange={(e) => setFullTime(e.target.checked)} />
                <label htmlFor="fullTime" name="fullTime">Full Time Only</label>
            </div>
            <Button clic={() => filter(title, location, fullTime)} typeBtn="search">Search</Button>
        </div>
    );
};

export default Filters;