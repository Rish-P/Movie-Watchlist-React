import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ResultCard } from './resultcard'

const Addmovie = () => {
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState([])
    const queryChangeHandler = (e) => {
        setQuery(e.target.value)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=8fd68700e9c4a82f8c67592284a1fb79&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
            .then(res => res.json())
            .then(data => {
                if (!data.errors) {
                    setResults(data.results)
                }
                else {
                    setResults([])
                }
            })
    }
    return (
        <div className="main">
            <div className="addPage">
                <TextField
                    id="outlined-full-width"
                    label="Search Movie"
                    onChange={queryChangeHandler}
                    fullWidth
                    size="small"
                    variant="outlined"
                    value={query}
                />
            </div>
            <div className="movie-list">
                <ul>
                    {(results.length > 0) ? (
                        results.map((movie) => (
                            <li key={movie.id}>
                                <ResultCard movie={movie} />
                            </li>
                        ))
                    ) : (<h3> No results</h3>)
                    }
                </ul>
            </div>
        </div>

    );
}

export default Addmovie;