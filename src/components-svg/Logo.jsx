import React from 'react';

const Logo = (props) => (
    <svg
        width={ 38 }
        height={ 38 }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <path
            fill="#3F9"
            d="M10.7 2.8C6.4 5 5 6.5 2.8 10.8c-6.5 12.8 2 26.7 16.2 26.7s22.7-13.9 16.2-26.7C30.3 1.2 20.4-2 10.7 2.8zm14.9 9.6c2.5 2.4 3.4 4.3 3.4 6.6 0 4.4-5.6 10-10 10-2.3 0-4.2-.9-6.6-3.4-4.6-4.6-4.6-8.6 0-13.2s8.6-4.6 13.2 0z"
        />
    </svg>
);

export default Logo;
