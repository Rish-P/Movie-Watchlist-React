export default function movieReducer(state, action) {
    switch (action.type) {
        case 'add_watched':
            return {
                ...state,
                watched: [...state.watched, action.movie]
            }
        case 'remove_watchlist':
            var foo = state.watchlist.filter(i => i.id !== action.movie.id)
            return {
                ...state,
                watchlist: [...foo]
            }
        case 'remove_watched':
            var foo = state.watched.filter(i => i.id !== action.movie.id)
            return {
                ...state,
                watched: [...foo]
            }
        case 'add_watchlist':
            return {
                ...state,
                watchlist: [...state.watchlist, action.movie]
            }
        default:
            return state
    }
}