import React from 'react';

const Shimmer = ( { type }) => {

    const classe = `shimmer__${type}`;

    return (
        <div className={`shimmer__wrapper__${type}`}>
            <div className={classe}></div>
        </div>
    );
};

export default Shimmer;