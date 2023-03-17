import './MovieItem.css'
function MovieItems(props) {
    const { movies,onMovieClick } = props;
    return (
        <div className='movie-item' >
            <img src={movies.thumnailurl} onClick={()=>{onMovieClick(movies)}} />
            <h4>{movies.title}</h4>
        </div>  
    );
}
export default MovieItems;