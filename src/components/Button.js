import React from 'react';

const Button = ( {children, clic }) => {
    return (
        <>
            <button className="button" onClick={clic}>{children}</button>
        </>
    );
};

export default Button;