import React, { useState } from 'react';
import Button from '../components/Button';
import SkeletonJob from '../components/skeletons/skeletonJob';
import github from '../assets/desktop/github.png';



const Job = (props) => {
    const [loading, setLoading] = useState(true);
    const job = props.location.state;

    setTimeout(() => {
        setLoading(false);
    }, 500);

    console.log(job);
    return (
        <>
            <div className="job__details">
                {loading ? (
                    <SkeletonJob />
                ) : (
                    <>
                        {/* HEADER */}
                        <div className="job__details__header">
                            <div
                                className="header__image__container"
                                style={{ background: job.logoBackground }}>
                                <img src={require(`../assets/logos/${job.logo}`).default} alt="logo company" />
                            </div>
                            <div className="header__textbox">
                                <div className="header__textbox__inner">
                                    <h2 className="header__textbox__heading">{job.company}</h2>
                                    <p className="header__textbox__site">{job.website}</p>
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
                                        <span className="body__heading__time">{job.postedAt}</span>
                                        <span style={{ margin: '0 10px' }}>•</span>
                                        <span className="body__heading__type">{job.contract}</span>
                                    </p>
                                    <h2 className="body__heading__title">{job.title}</h2>
                                    <p className="body__heading__location">{job.location}</p>
                                </div>
                            </div>
                            <h2 className="job__details__body__title">Description</h2>
                            <p
                                className="body__main"
                                dangerouslySetInnerHTML={{ __html: job.description }}
                            />
                            <h2 className="job__details__body__title">Requirements</h2>
                            <div>
                                <p>{job.requirements.content}</p>
                                <ul>
                                    {job.requirements.items.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </div>
                            <h2 className="job__details__body__title">Role</h2>
                            <div>
                                <p>{job.role.content}</p>
                                <ul>
                                    {job.role.items.map((item, index) => {
                                        return <li key={index}>{item}</li>;
                                    })}
                                </ul>
                            </div>
                        </div>
                        {/* APPLY */}

                        <div className="job__details__apply">
                            <h3>How to apply</h3>
                        </div>
                    </>
                )}
                <div className="made">
                    <div>
                        <p>
                            © 2021 Challenge{' '}
                            <a
                                href="https://www.frontendmentor.io/challenges"
                                target="_blank"
                                rel="noopener noreferrer">
                                FrondEnd Mentor
                            </a>{' '}
                            by{' '}
                            <a
                                href="https://www.frontendmentor.io/profile/JustGJ"
                                target="_blank"
                                rel="noopener noreferrer">
                                Jeff
                            </a>
                            &ensp;
                        </p>
                    </div>
                    <a href="https://github.com/JustGJ" target="_blank" rel="noopener noreferrer">
                        <img src={github} alt="github Jeff" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Job;
