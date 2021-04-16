import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Homepage from './components/homepage';
import Addmovie from './components/add';
import Watchlist from './components/watchlist';
import Watched from './components/watched'
import Navbar from './components/navbar';
import MovieContextProvider from './context/movieContext'

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Watchlist} />
            <Route path="/watched" component={Watched} />
            <Route path="/add" component={Addmovie} />
          </Switch>
        </Router>
      </MovieContextProvider>
    </div>
  );
}

export default App;
