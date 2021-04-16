import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button'
import { MovieContext } from '../context/movieContext'

export const ResultCard = ({ movie }) => {
    const { dispatch, watchlist } = useContext(MovieContext);
    const addMovie = () => {
        dispatch({ type: 'add_watchlist', movie })
    }
    let storedMovie = watchlist.find((i) => i.id === movie.id);
    let watchlistFlag = storedMovie ? true : false;
    return (
        <div>
            <div className="movie-card">
                <img alt="No image available"
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    className="movie-poster"
                />
                <div className="content">
                    <h3 className="title">{movie.title}</h3>
                    {movie.release_date ?
                        (<p className="date">{movie.release_date.slice(0, 4)}</p>) :
                        (<p>-</p>)}
                    <Button variant="contained" color="primary" disabled={watchlistFlag}
                        onClick={addMovie}
                    >Add to Watchlist</Button>
                </div>
            </div>
        </div>
    );
}
