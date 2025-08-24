import Movie from "./Movie.jsx"
import { useState } from "react";




export default function Display(){
    const [movieData, setMovieData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    async function search(){

        const title=document.getElementById("input").value
        const apiKey="d6790e84a2b449917c3573d9bf037b77"
        const url=`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`
        setIsLoading(true)
        try{
            const response = await fetch(url)
            const data =await response.json()
            console.log(data)
            setMovieData(data)
            console.log(movieData)
        }
        catch(error){
            console.error("Fetch Error:", error);
        }
        finally{
            setIsLoading(false)
        }
    }
    return (
        <main>
            <div className="header">
                <h1 id="searchmovies">Search movies</h1>
                <input type="text" placeholder="Movie Title" id="input"/>
                <button id="search" onClick={search}>Search</button>
                <div className="buttons">
                    <label htmlFor="buttons">sort by</label>
                    <button>Year</button>
                    <button>Rating</button>
                    <button>Length</button>
                </div>
            </div>
           
            {isLoading && <div>Loading movies...</div>}
            <Movie data={movieData}/>
        </main>
    )
}