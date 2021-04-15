import React, {useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import axios from 'axios';
import Button from '../components/Button';
import LoadingCard from '../components/LoadingCard';
import time from '../components/utils/time';

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [anotherPage, setAnotherPage] = useState(1);

    // == Call API
    useEffect(() => {    
        setLoading(true);

        axios.get(`https://cors.bridged.cc/https://jobs.github.com/positions.json?page=${anotherPage}`)
        .then(res => {
            const jobs = [...data]
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
    }, [anotherPage])
        
  
    //  == Load next page
    const loadMore = () => {
        setAnotherPage(anotherPage + 1 )
        setLoading(true)
    }
   
    // == Load card
    const loadingCard = () => {
        const loadCard = []
        for(let i = 0; i < 6; i++){
            loadCard.push(<LoadingCard key={i} />)
        }
        return loadCard;
    }
    

    return (
        <div className="home__page">
            <SearchBar />

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
                    loading && loadingCard()
                }
            </div>
            {
                !loading && <Button typeBtn="loadMore" clic={loadMore}>Load More</Button>    
            }
        </div>
    );
};

export default Home;


