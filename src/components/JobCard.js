import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const JobCard = (props) => {
    const logo = props.logo;

    return (
        <>
            <div className="job__board__card">
                <div
                    className="card__image__container"
                    style={{ backgroundColor: props.logoBackground }}>
                    <img src={require(`../assets/logos/${logo}`).default} alt="" />
                </div>
                <p className="card__time-type">
                    <span className="card__time">{props.postedAt}</span>
                    <span style={{ margin: '0 10px' }}>•</span>
                    <span className="card__type">{props.contract}</span>
                </p>

                <span className="card__company">{props.company}</span>
                <h4 className="card__location">{props.location}</h4>
                <Link
                    to={{ pathname: `/job/${props.id}`, state: props }}
                    onClick={() => window.scroll(0, 0)}>
                    <span className="card__information">More informations</span>
                </Link>
            </div>
        </>
    );
};

export default JobCard;
