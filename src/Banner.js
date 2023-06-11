import React, { useEffect, useState }from 'react';
import axios from './axios'
import requests from './request.js';
import './Banner.css';

function Banner(){

    const [movie, setMovie] = useState([]);   //for random selection of movie at the banner
    //useEffect --> piece of code runs on given condition here-- when banner loads
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchNetflixOriginals);
        //console.log(request.data.results) //--array of movies
        //choose one random movie-- Math.floor(Math.random() * request.data.results.length -1)
        setMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length -1)
            ]
        );
        return request;
        }
        fetchData();
    }, []);

    //console.log(movie); 
    function truncate(str, n){
        return str?.length > n? str.substr(0,n-1) + "..." :str;
    }


//emmets
    return(
        <header className="banner"
            style={{
                backgroundSize:"cover",
                backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center",
            }}>
            {/*bg image */}
            <div className="banner_contents">
                {/*title */}
                <h1 className="banner_title"> 
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                {/*2 buttons play and mylist*/}
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                {/*description*/}
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>  
            <div className="banner_fadeBottom" /> 
        </header>
    )

}

export default Banner;