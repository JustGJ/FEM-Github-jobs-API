import React, {useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';
import axios from 'axios';
import Button from '../components/Button';

const Home = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [resultLength, setResultLength] = useState();
    const [searchURL, setSearchURL] = useState('');
    const [error, setError] = useState(null);
    const [anotherPage, setAnotherPage] = useState(1);
    // const BASE_URL = `https://cors.bridged.cc/https://jobs.github.com/positions`;

    // == Appel API
    useEffect(() => {     
        // setLoading(true)
        // let loadMore = BASE_URL.search('page');          // Retourne:"?page=...
          axios.get(`https://cors.bridged.cc/https://jobs.github.com/positions.json?page=${anotherPage}`)
            .then(res => {
                const test = [...data]
                res.data.forEach(job => {
                    // console.log(job);
                    test.push(job)
                });
                setData(test)
                setLoading(false)
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            }) 
    }, [anotherPage])
        
  

    const time = (now, previous) => {

        let msPerMinute = 60 * 1000,
            msPerHour = msPerMinute * 60,
            msPerDay = msPerHour * 24,
            msPerMonth = msPerDay * 30,
            msPerYear = msPerMonth * 365,
            elapsed = now - previous;

        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ` seconds ago`; 
        } else if (elapsed < msPerHour){
            return Math.round(elapsed / msPerHour) !== 1 
                ? Math.round(elapsed / msPerMinute) + ` minutes ago`   
                : Math.round(elapsed / msPerMinute) + ` minute ago`;
        } else if (elapsed < msPerDay){
            return Math.round(elapsed / msPerHour) !== 1
                ? Math.round(elapsed / msPerHour) + ' hours ago'
                : Math.round(elapsed / msPerHour) + ' hour ago'
        } else if (elapsed < msPerMonth){
            return Math.round(elapsed / msPerDay) !== 1     
                ? Math.round(elapsed / msPerDay) + ' days ago'
                : Math.round(elapsed / msPerDay) + ' day ago'
        } else {
            return Math.round(elapsed / msPerYear) !== 1
                ? Math.round(elapsed / msPerYear) + ' years ago'
                : Math.round(elapsed / msPerYear) + ' year ago'
        }
    }

    const loadMore = () => {
        setAnotherPage(anotherPage + 1 )
        setLoading(true)
    }

    

    return (
        <div className="home__page">
            <SearchBar />

            <div className="page__jobBoard">
                {
                    data.map(job => {
                    return (
                        <JobCard
                            key={job.id}
                            logo = {job.company_logo}
                            created = {time(Date.now(), Date.parse(job.created_at))}
                            type = {job.type}
                            title = {job.title}
                            company = {job.company}
                            location = {job.location}
                        />   
                    )})
                }
            </div>
            {
                loading 
                ? <div>Loading...</div> 
                : <Button clic={loadMore}>Load More</Button>
            }
        </div>
    );
};

export default Home;