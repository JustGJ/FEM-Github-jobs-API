import React from 'react';

const Card = (props) => {

 

    return (
        <>
            <div className="job__board__card">
                <div className="card__image__container">
                    {props.logo && <img src={props.logo} alt={props.logo} /> }
                    {!props.logo && <div className="no-logo">N / A</div> }
                </div>
                <p className="card__time-type">
                    <span className="card__time">{props.created}</span>
                    <span style={{margin: "0 10px"}}>•</span>
                    <span className="card__type">{props.type}</span>
                </p>
            
                <h3 className="card__title">{props.title}</h3>
                <span className="card__company">{props.company}</span>
                <h4 className="card__location">{props.location}</h4>
            </div>
        </>
      
    );
};

export default Card;


