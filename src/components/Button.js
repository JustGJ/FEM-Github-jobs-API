import React from 'react';

const Button = ( {children, clic, typeBtn }) => {

    const css = `button ${typeBtn}`;

    return (
        <>
            <button type="submit" className={css} onClick={clic}>{children}</button>
        </>
    );
};

export default Button;