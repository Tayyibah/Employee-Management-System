import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByFive } from './actions';
import { MovieProvider } from './Movies/MovieContext';
import MovieList from './Movies/MovieList';
import Nav from './Movies/Nav';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <MovieProvider>
        <div className="App">
          <Nav /><MovieList />
        </div>
      </MovieProvider>



      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(incrementByFive(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Yes logged </h3> : ''}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
