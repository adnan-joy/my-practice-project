import React from 'react';

const Friend = ({friend}) => {
    const {name,email} = friend;
    return (
        <div className='student'>
            <h4>Name: {name}</h4>
            <p>Email:{email}</p>
        </div>
    );
};

export default Friend;