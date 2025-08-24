
export default function Movie({data}){
    
    return(
        <div className="movie">
            {data && data.results && data.results.map((movie,index)=>{
                return (
                    <div key={index} className="movieCard">
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="MoviePoster"  />
                        <div className="text">
                            <h3 id="title">{movie.title}</h3>
                            <p id="release_date"> {movie.release_date}</p>
                            <p id="overview">{movie.overview}</p>
                        </div>
                        
                        
                    </div>
                )
            })}
                
            </div>
    )
}