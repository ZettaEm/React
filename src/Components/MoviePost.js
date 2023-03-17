import './MoviePost.css';
function MoviePost(props) {
    const {movies,onBgClick}= props
    return (
        <div className="Movie-Post">
            <div className="Movie-Post-Bg" onClick={onBgClick} />
            <div className="Movie-Post-Content" >
            <img src={movies.thumnailurl} />
            <h4>{movies.title}</h4>
            </div>
            
        </div>
    )
}
export default MoviePost;