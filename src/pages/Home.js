import React, {useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import axios from 'axios';
import Button from '../components/Button';
import LoadingCard from '../components/LoadingCard';
import time from '../components/utils/time';

import SkeletonCardHome from '../components/skeletons/SkeletonCardHome';



const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [anotherPage, setAnotherPage] = useState(1);
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [fullTime, setFullTime] = useState(false);

    const [final, setFinal] = useState({
        finalDescription: '',
        finalLocation: '',
        finalFullTime: 'false'
      })


    const URL_BASE = 'https://cors.bridged.cc/https://jobs.github.com/positions.json';

    // == Call API
    useEffect(() => {    
        setLoading(true);
        const jobs = [...data];

        axios.get(`${URL_BASE}?page=${anotherPage}&description=${final.finalDescription}&location=${final.finalLocation}&full_time=${final.finalFullTime}`)
        .then(res => {
            res.data.forEach(job => {
                if(jobs.findIndex(j => j.id === job.id )=== -1) jobs.push(job)
            });

            setData(jobs)
            setLoading(false)
        })
        .catch(error => {
            setError(error);
            setLoading(false);
        }) 
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            finalDescription: description,
            finalLocation: location,
            finalFullTime: fullTime ? "on" : "off"

        })

    }
    
    // console.log(final)

    return (
        <div className="home__page">
            <SearchBar 
                description = {description}
                location = {location}
                fullTime = {fullTime}
                setDescription = {setDescription}
                setLocation = {setLocation}
                setFullTime = {setFullTime}
       
                finalSearch = {finalSearch}
            />

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
                    
                    loading && [1,2,3,4,5,6].map(n => <SkeletonCardHome key={n} />)

                }
            </div>
            {
                !loading && <Button typeBtn="loadMore" clic={loadMore}>Load More</Button>    
            }
        </div>
    );
};

export default Home;


                    {/* loading && loadingCard() */}
