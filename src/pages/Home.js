import React, {useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import axios from 'axios';
import Button from '../components/Button';
import time from '../components/utils/time';

import SkeletonHome from '../components/skeletons/SkeletonHome';



const Home = ( {darkMode, setDarkMode} ) => {

    const [data, setData] = useState([]);                   
    const [loading, setLoading] = useState(false);         
    const [error, setError] = useState(null);
    const [anotherPage, setAnotherPage] = useState(1);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);
    const [final, setFinal] = useState({description: '', location: '', fullTime: 'off'})
    const URL_BASE = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';
    const URL_FILTER = `${URL_BASE}?description=${final.description}&location=${final.location}&full_time=${final.fullTime}`

    // == Call API
    useEffect(() => {    
        setLoading(true);
        let jobs = [...data];

        // == FILTER
        (final.description || final.location || final.fullTime !== '') 
        ?   axios.get(`${URL_FILTER}`)
            .then(res => {
                jobs = [];
                res.data.forEach(job => {
                    jobs.push(job)
                });
                setData(jobs)
                setLoading(false)
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

            setData(jobs)
            setLoading(false)
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
    
    const handleResetDescription = () => {
        setFinal({
            description: "",
            location: location,
            fullTime: fullTime ? "on" : "off"
        })
    }

    const handleResetLocation = () => {
        setFinal({
            description: description,
            location: "",
            fullTime: fullTime ? "on" : "off"
        })
    }

    const handleResetFullTime = () => {
        setFinal({
            description : description,
            location: location,
            fullTime: "off"
        })
    }


    console.log(description);
    console.log(final);
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
       
                finalSearch = {finalSearch}
            />

            
                <div className="page__filter">
                    {final.description && <span onClick={handleResetDescription}>{final.description}</span>}
                    {final.location && <span onClick={handleResetLocation}>{final.location + ' x'}</span>}
                    {final.fullTime !== 'off' && <span onClick={handleResetFullTime}>Only Full Time x</span>}
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
