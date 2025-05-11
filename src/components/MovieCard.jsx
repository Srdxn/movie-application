import React from 'react'
import star from '../assets/star.svg'
import no_movie from '../assets/no-movie.png'

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language, id } }) => {
    return (
        <a href={`https://www.google.com/search?q=${title}+movie`} blank target='_blank'>
            <div className='movie-card cursor-pointer'>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `${no_movie}`} alt={title} />
                <div className='mt-4'>
                    <h3 className='text-xl'>{title}</h3>
                </div>

                <div className='content'>
                    <div className='rating'>
                        <img src={star} alt="star" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>

                        <span>•</span>
                        <p className='lang'>{original_language.toUpperCase()}</p>

                        <span>•</span>
                        <p className='year'>{release_date ? release_date.split('-')[0] : 'N/A'}</p>
                    </div>
                    <div className='date'>


                    </div>
                </div>
            </div>
        </a>
    )
}

export default MovieCard