import React, { useState,useContext } from 'react';
import MovieContext from 'MovieContext';

const AddMovie = () => {
    const [movies, setMovies] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useContext(MovieContext);

    const updateName=e=>{
        setName(e,target.value);
    }
    const updatePrice=e=>{
        setName(e,target.value);
    }
    const addName=e=>{
        e.preventDefault();
        setMovies(prevMovies=>[
...prevMovies,{name:name,price:price}

        ]);
    }
    return (
        <form onSubmit={addName}>
        <input type="text" name="name" value={name} onChange={updateName}/>
            <input type="text" name="price" value={price} onChange={updatePrice}/>
            <button>submit</button>
        </form>
    );
};
export default AddMovie;