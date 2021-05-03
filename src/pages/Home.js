import React, {useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import axios from 'axios';
import Button from '../components/Button';
import time from '../components/utils/time';

import SkeletonHome from '../components/skeletons/SkeletonHome';



const Home = ( {darkMode, setDarkMode, openModal, setOpenModal} ) => {

    const [data, setData] = useState([]);                   
    const [loading, setLoading] = useState(false);         
    const [error, setError] = useState(null);
    const [anotherPage, setAnotherPage] = useState(1);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [final, setFinal] = useState({description: '', location: '', fullTime: ''})

    const URL_BASE = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';
    const URL_FILTER = `${URL_BASE}?description=${final.description}&location=${final.location}&full_time=${final.fullTime}&page=${anotherPage}`;

    // == Call API
    useEffect(() => {    
        setLoading(true);
        let jobs = [...data];

        // == FILTER
        (final.description || final.location || final.fullTime !== '') 
        ?   axios.get(`${URL_FILTER}`)
            .then(res => {
                anotherPage === 1 ? jobs = [] : jobs = [...data];
                res.data.forEach(job => {
                    jobs.push(job);
                    console.log(jobs);
                });
                setData(jobs);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            }) 
        // == Full PAGE
        :   axios.get(`${URL_BASE}?page=${anotherPage}`)
            .then(res => {
                res.data.forEach(job => { 
                if(jobs.findIndex(j => j.id === job.id ) === -1) jobs.push(job)     
            });

            setData(jobs);
            setLoading(false);
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        }) 
    }, [anotherPage, final])
        
  
    //  == Load next page
    const loadMore = () => {
        setAnotherPage(anotherPage + 1 )
        setLoading(true)
    }
   
   
    // == Search Final
    const finalSearch = (e) => {
        e.preventDefault()
        setFinal({
            description: description,
            location: location,
            fullTime: fullTime ? "on" : "off"
        })
        setDescription('');
        setLocation('');
        setFullTime('');
    }
    
    // == Reset filter 
    const handleResetFilter = (description, location, fullTime) => {
        setFinal({
            description : description,
            location: location,
            fullTime: fullTime 
        })
        setAnotherPage(1)
    }

    return (
        <div className="home__page">
            <SearchBar 
                darkMode={darkMode} setDarkMode={setDarkMode}
                description = {description}
                location = {location}
                fullTime = {fullTime}
                setDescription = {setDescription}
                setLocation = {setLocation}
                setFullTime = {setFullTime}
                openModal= {openModal}
                setOpenModal = {setOpenModal}
                finalSearch = {finalSearch}
            />

                <div className="page__filter">
                    {
                        final.description && 
                        <span 
                            onClick={() => handleResetFilter('', final.location, final.fullTime)}
                            >{final.description + ' x'}
                        </span>
                    }
                    {
                        final.location && 
                        <span 
                            onClick={() => handleResetFilter(final.description, '', final.fullTime)}
                            >{final.location + ' x'}
                        </span>
                    }
                    {
                        final.fullTime === "on" && 
                        <span 
                            onClick={() => handleResetFilter(final.description, final.location, "off")}
                            >Only Full Time x
                        </span>
                    }
                </div>
       
            <div className="page__jobBoard">
                {
                    data.map(job => {
                    return (
                       
                        <JobCard
                            key = {job.id}
                            id = {job.id}
                            logo = {job.company_logo}
                            created = {time(Date.now(), Date.parse(job.created_at))}
                            type = {job.type}
                            title = {job.title}
                            company = {job.company}
                            location = {job.location}
                            openModal = {openModal}
                        />     
                    
                    )})
                }
                {
                    
                    loading && [1,2,3,4,5,6].map(n => <SkeletonHome key={n} />)

                }
            </div>
            {
                !loading && <Button typeBtn="loadMore" clic={loadMore}>Load More</Button>    
            }
        </div>
    );
};

export default Home;
