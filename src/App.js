import { useState } from 'react';
import './App.css';
import AppHeader from './Components/AppHeader';
import AppSearch from './Components/AppSearch';
import Bootstrap from './Components/Bootstrap';
import MovieItem from './Components/MovieItem';
import MoviePost from './Components/MoviePost';
import Movies from './data/Movies';


function App() {
    const [selectedmovie, setselectedmovie] = useState(null);
    const [searchtext, setsearchtext] = useState('')

    function onMovieOpenClick(TheMovie) {
        setselectedmovie(TheMovie);
    }

    function onMovieCloseClick() {
        setselectedmovie(null);
    }

    const Elements = Movies.filter((movies) => {
        return movies.title.includes(searchtext);
    }).map((movies, index) => {
        return <MovieItem key={index} movies={movies} onMovieClick={onMovieOpenClick} />;
    })

    let moviepost = null;
    if (!!selectedmovie) {
        moviepost = <MoviePost movies={selectedmovie} onBgClick={onMovieCloseClick} />
    }
    return (
        <div className="App">
            <Bootstrap />
            <AppHeader value={searchtext} onValuechange={setsearchtext} />
            <div className='app-grid'>
                {Elements}
            </div>
            {moviepost}

        </div>
    );
}

export default App;
