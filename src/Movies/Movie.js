import React, { useState,useContext } from 'react';
import MovieContext from 'MovieContext';

const Movie = ({name,price,key}) => {
    return (
        <div>
        {name},
        {price},
        {key}
        </div>
        
    );
};
export default Movie;