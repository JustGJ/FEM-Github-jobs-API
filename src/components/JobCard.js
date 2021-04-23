import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    
    const [loading, setLoading] = useState('loading')
   
    const handleImageLoaded = () => {
        setLoading("loaded")
      }

     

    return (
        <>
            <div className="job__board__card">
                <div className="card__image__container">
                    {
                        props.logo 
                        ? 
                        <>
                            <img onLoad={handleImageLoaded} src={props.logo} alt={props.logo} /> 
                            {loading}
                        </>
                        : 
                        <div className="no-logo">N / A</div> 
                    }
                </div>
                <p className="card__time-type">
                    <span className="card__time">{props.created}</span>
                    <span style={{margin: "0 10px"}}>•</span>
                    <span className="card__type">{props.type}</span>
                </p>
            
                <Link to={`/job/${props.id}`} props={props}><h3 className="card__title">{props.title}</h3></Link> 
                <span className="card__company">{props.company}</span>
                <h4 className="card__location">{props.location}</h4>
            </div>
        </>
      
    );
};

export default Card;


