import React,{ useState } from 'react';
import iconSearch from '../assets/desktop/icon-search.svg';
import iconLocation from '../assets/desktop/icon-location.svg';
import iconFilter from '../assets/mobile/icon-filter.svg';
import Button from '../components/Button';
import { useMediaQuery } from 'react-responsive'

const SearchBar = ( {description, location, fullTime, finalSearch, setDescription, setLocation, setFullTime, openModal, setOpenModal }) => {

    // == location and fullTime none
    const isTabletOrMobil = useMediaQuery({ query: '(max-width: 1110px)' });
    const isMobil = useMediaQuery({ query: '(max-width: 689px)' });

    const handleShowFilter = () => {
        setOpenModal(true);
        document.body.classList.add('test')
    }

    const finalSearchMobilClose = (e) => {
        finalSearch(e);
        setOpenModal(false);

    }


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
              
                <label htmlFor="fullTime" name="fullTime">
                    <input 
                        type="checkbox" 
                        id="fullTime" 
                        checked={fullTime} 
                        onChange={(e) => setFullTime(e.target.checked)}  
                        hidden
                    />
                        <div></div>
                        <span>{isTabletOrMobil ? "Full Time" : "Full Time Only"}</span>
                </label>
                {
                    isMobil ? 
                    <>
                        <img id="img__modal"  src={iconFilter} alt="icon filter" onClick={handleShowFilter} />
                        <img src={iconSearch} style={{marginLeft : '1.5rem'}} onClick={finalSearch}  alt="icon Search"/>
                    </>

                    : <Button clic={finalSearch} typeBtn="search">Search</Button> 
                }
            </div>
           
            {
                (openModal && isMobil) && (
                    <div className="show__filter">
                        <div className="filter__content">
                            <div className="filter__location">
                                <img src={iconLocation} alt="icon Location"/>
                                <input 
                                    type="text" 
                                    placeholder="Filter by location ..."  
                                    value={location} 
                                    onChange={(e) => setLocation(e.target.value)} 
                                />
                            </div>
                            <div className="filter__fullTime">
                                <label htmlFor="fullTime" name="fullTime">
                                    <input 
                                        type="checkbox" 
                                        id="fullTime" 
                                        checked={fullTime} 
                                        onChange={(e) => setFullTime(e.target.checked)}  
                                        hidden
                                    />
                                    <div></div>
                                    <span>Full Time Only</span>
                                </label>
                            </div>
                            <Button clic={finalSearchMobilClose} typeBtn="searchMobil">Search</Button> 
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default SearchBar;
