import React, { useEffect, useState, useRef } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const screenWidth= window.innerWidth;
const MovieList = ({genreId}) => {
    const [movieList, setMovieList]=useState([])
     const elementRef= useRef();
    useEffect(()=>{
        getMoviesByGenreId();
    },[])
    const getMoviesByGenreId=()=>{
        GlobalApi.getMoviesByGenreId(genreId).then(resp=>{
           // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
     const sliderRight=(element:any)=>{
         element.scrollBy({ left: screenWidth-50, behavior: "smooth" })
    }
    const sliderLeft=(element:any)=>{
         element.scrollBy({ left: -screenWidth-50, behavior: "smooth" })
    }

  return (
     <div className="relative">
    <FaChevronLeft
      className="hidden md:block text-white text-[30px] absolute left-0 mx-8 mt-[150px] cursor-pointer z-10"
      onClick={() => sliderLeft(elementRef.current)}
    />

    <FaChevronRight
      className="hidden md:block text-white text-[30px] absolute right-0 mx-8 mt-[150px] cursor-pointer z-10"
      onClick={() => sliderRight(elementRef.current)}
    />
    <div ref={elementRef} className='flex overflow-x-auto gap-2 md:gap-8 scrollbar-hide scroll-smooth pt-5 px-3 pb-5 '>
        {movieList.map((item, index)=> (
            <MovieCard movie={item}/>

        ))}
    </div>
    </div>
  )
}

export default MovieList