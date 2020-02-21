import React, { useState ,createContext} from 'react'
export const MovieContext=createContext() ;



export const MovieProvider=prope=> {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: '1'
        }, {
            name: 'Game of thrones',
            price: '$20',
            id: '2'
        }, {
            name: 'Ghajni',
            price: '$30',
            id: '3'
        }
    ])
    return (<MovieContext.Provider value={[movies, setMovies]}>{props.children}</MovieContext.Provider>
    );
};
export default MovieList;