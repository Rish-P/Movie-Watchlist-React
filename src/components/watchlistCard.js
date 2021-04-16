import React, { useContext } from 'react'
import { MovieContext } from '../context/movieContext'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const WatchlistCard = ({ movie }) => {
    const { dispatch, watched } = useContext(MovieContext)
    let foo = watched.find(i => i.id === movie.id)
    let watchedFlag = foo ? true : false
    const removeFromWatchlist = () => {
        dispatch({ type: 'remove_watchlist', movie })
    }
    const removeFromWatched = () => {
        dispatch({ type: 'remove_watched', movie })
    }
    const addToWatched = () => {
        dispatch({ type: 'add_watched', movie })
    }
    return (
        <div style={{ marginBottom: '30px' }}>
            <div className="controls">
                {watchedFlag ?
                    (<VisibilityOffIcon
                        onClick={removeFromWatched}
                        className="icon"
                        fontSize="small"
                    />) : (<VisibilityIcon fontSize="small" className="icon"
                        onClick={addToWatched}
                    />)}
                <RemoveCircleOutlineIcon fontSize="small"
                    className="icon" onClick={removeFromWatchlist} />
            </div>
            <div className="watchlist-card">
                <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt="No image"
                />
            </div>
        </div >

    );
}

export default WatchlistCard;