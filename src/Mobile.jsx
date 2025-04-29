import React from 'react';

const Mobile = ({mobile}) => {
    return (
        <div className='student'>
            <h3>Name:{mobile.name}</h3>
            <p>Model:{mobile.model}</p>
        </div>
    );
};

export default Mobile;