import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { MovieContext } from '../context/movieContext'
import WatchlistCard from './watchlistCard'

const Watchlist = () => {
    const { dispatch, watchlist } = useContext(MovieContext);
    return (
        <>
            <h1 style={{ marginLeft: '10%', fontFamily: 'sans-serif' }}>My Watchlist</h1>
            <div className="watchlist">
                <div className="watchlist-container">
                    {watchlist.map((movie) => {
                        return (
                            <WatchlistCard movie={movie} key={movie.id} />
                        )
                    })}

                </div>
            </div>
        </>

    );
}

export default Watchlist;