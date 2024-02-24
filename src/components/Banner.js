import React, { useEffect, useState } from 'react'
import './Banner.css'
import axiosrequest from '../axios';
import config from '../config';

const baseUrl = 'https://image.tmdb.org/t/p/original/';



function Banner() {

    const [movie, setMovie] = useState([]);


    useEffect(()=>{
        async function fetchData(){
            const response = await axiosrequest.get(config.fetchNetflixOriginals);

            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length - 1)])
           
            return response;
        }
        fetchData();
    },[])



    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

  return (
    <header className='banner'
        style={{
            backgroundSize: 'cover',
            backgroundImage: `url(
                ${baseUrl}${movie?.backdrop_path}
            )`,
            backgroundPosition: "center center"
        }}
    >
        <div className='banner__contents'>
            <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>

            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>

            <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        </div>


        <div className='banner__fadebottom'/>
    </header>
  )
}



export default Banner