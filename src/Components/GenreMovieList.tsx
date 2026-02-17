import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

const GenreMovieList = () => {
  return (
    <div className='bg-gradient-to-r from-gray-700 to-gray-950'>{GenresList.genere.map((item, index)=>index<=4 &&(
        <div className='p-8 px-8 md:px-16 '>
            <h2 className='text-[20px] text-white font-bold'>{item.name}</h2>
            <MovieList genreId ={item.id}></MovieList>

        </div>

    ))}</div>
  )
}

export default GenreMovieList