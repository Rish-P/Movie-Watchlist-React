import React, { createContext, useEffect, useState, useReducer } from 'react';
import '../App.css'
import movieReducer from './movieReducer';

const initialState = {
    watchlist: localStorage.getItem("watchlist") ? (
        JSON.parse(localStorage.getItem("watchlist"))
    ) : ([]),
    watched: localStorage.getItem("watched") ? (
        JSON.parse(localStorage.getItem("watched"))
    ) : ([]),
}
export const MovieContext = createContext(initialState);

const MovieContextProvider = (props) => {
    const [movies, dispatch] = useReducer(movieReducer, initialState);
    useEffect(() => {
        localStorage.setItem("watchlist", JSON.stringify(movies.watchlist))
        localStorage.setItem("watched", JSON.stringify(movies.watched))
    }, [movies])
    // useEffect(() => {
    //     console.log('hello world')
    //     const localData = localStorage.getItem('movies');
    //     // console.log(localData)
    //     const data = JSON.parse(localData)
    //     data.map(val => {
    //         dispatch({ type: 'add', contact: val })
    //     })
    // }, [])
    // useEffect(() => {
    //     console.log('jubilant')
    //     localStorage.setItem('contacts', JSON.stringify([...contacts]))
    // }, [movies])

    return (
        <MovieContext.Provider
            value={{ watchlist: movies.watchlist, dispatch, watched: movies.watched }}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieContextProvider;