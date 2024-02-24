import React, { useEffect, useState } from 'react'
import axiosrequest from '../axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



const baseUrl = 'https://image.tmdb.org/t/p/original/';

function Row({title, fetchUrl, isLargeRow}) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');


    useEffect(()=>{
        async function fetchData(){
            const response = await axiosrequest.get(fetchUrl);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    },[fetchUrl])




    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }



    const handleClick = (movie) => {
        if(trailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.name || '').then(url=>{
                console.log(movie)
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get('v'));

            }).catch(err=>console.log(err));
        }
    }


  return (
    <div className='row'>
        <h2 className='row__title'>{title}</h2>
        <div className='row__posters'>
            {
                movies.map((movie,index)=>(
                    <img
                        className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        key={movie.id}
                        onClick={()=>handleClick(movie)}
                    />
                ))
            }
        </div>
        {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts} /> }
    </div>
  )
}

export default Row