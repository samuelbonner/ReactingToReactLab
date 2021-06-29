import { PROPERTY_TYPES } from '@babel/types';
import React from 'react';



const Greeter = (props) => {
    return (
        <>
        <h1> {props.phrase}, {props.name} </h1>
        </>
);
};

export default Greeter;