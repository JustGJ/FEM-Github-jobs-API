import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import time from '../components/utils/time';

const Job = (props) => {

    const [job, setJob] = useState('');

    const { match : { params } } = props

    useEffect(() => {
        axios.get(`https://cors.bridged.cc/https://jobs.github.com/positions/${params.id}.json?`)
        .then(res => {
            setJob(res.data);
        })
      
    }, [params.id])


    return (
        <div className="job__details">
            {/* HEADER */}
            <div className="job__details__header">
                <div className="header__image__container">
                    {job.company_logo && <img src={job.company_logo} alt="logo company" /> }
                    {!job.company_logo && <div className="no-logo">N / A</div> }
                </div>
                <div className="header__textbox">
                    <div className="header__textbox__inner">
                        <h2 className="header__textbox__heading">{job.company}</h2>
                        <p className="header__textbox__site">{job.company_url}</p> 
                    </div>
                    <a href={job.company_url} target="_blank" rel="noopener noreferrer">
                        <Button typeBtn="companySite">Company Site</Button>
                    </a>
                </div>
            </div>
            {/* BODY */}
            <div className="job__details__body">
                <div className="body__heading__content">
                    <div className="body__heading__time__content">
                        <p>
                            <span className="body__heading__time">{time(Date.now(), Date.parse(job.created_at))}</span>
                            <span style={{margin: "0 10px"}}>•</span>
                            <span className="body__heading__type">{job.type}</span>
                        </p>
                        <h2 className="body__heading__title">{job.title}</h2>
                        <p className="body__heading__location">{job.location}</p>
                    </div>
                    <a  href="#5" className="body__heading__redirect btn"  target="_blank" rel="noopener noreferrer">
                        <Button typeBtn="applyNow">Apply Now</Button>
                    </a>
                </div>
                <div className="body__main" dangerouslySetInnerHTML={{__html: job.description}} />
            </div>
            {/* APPLY */}
            <div className="job__details__apply">
                <h3>How to apply</h3>
                <div dangerouslySetInnerHTML={{__html: job.how_to_apply}} />
            </div>               
        </div>
     );
};

export default Job;