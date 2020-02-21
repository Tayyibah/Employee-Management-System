import React, { useState,useContext } from 'react';
import Movie from './Movie';
import MovieContext from 'MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (<div><nav>
    <p>List of Movies:{movies.Length}</p>></nav></div>);
};
export default Nav;