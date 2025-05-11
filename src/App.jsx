import React, { useEffect } from 'react'
import Search from './components/Search'
import { useState } from 'react'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import { useDebounce } from 'react-use';
import { getTrendingMovies, updateSearchCount } from './appwrite';
import hero from '../public/hero.png';


const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMBD_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const [movieList, setMovieList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoadingTrendingMovies, setIsLoadingTrendingMovies] = useState(false);
  const [errorMessageTrendingMovies, setErrorMessageTrendingMovies] = useState('')


  useDebounce(() => {
    setDebouncedSearchTerm(searchTerm);
  }, 600, [searchTerm]);

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok)
        throw new error('Failed to fetch movies');

      const data = await response.json();

      if (data.response === 'False') {
        setErrorMessage(data.error || 'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);

      if (query && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (error) {
      console.error('Error fetching movies: ', error);
      setErrorMessage('Error [MOVIE_FETCH_500]: Unable to retrieve movie data due to a temporary issue. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }


  const loadTrendingMovies = async () => {
    setIsLoadingTrendingMovies(true);
    setErrorMessageTrendingMovies('');

    try {
      const movies = await getTrendingMovies();

      setTrendingMovies(movies);
    } catch (error) {
      console.log(error);
      setErrorMessageTrendingMovies('Error [MOVIE_FETCH_500]: Unable to retrieve trending movie list due to a temporary issue.');
    } finally {
      setIsLoadingTrendingMovies(false);
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    loadTrendingMovies();
  }, []);
  return (
    <main>
      <div className='pattern'></div>

      <div className='wrapper'>
        <header>
          <img src={hero} alt="Hero Banner" />
          <h1>Discover <span className='text-gradient'>Movies</span> You'll <span className='text-gradient-red'>Love</span>, Every Time!</h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className='trending'>
          {isLoadingTrendingMovies ? (
            <>
              <h2>Trending Movies</h2>
              <p className='text-white text-center'><Spinner /></p>
            </>
          ) : errorMessageTrendingMovies ? (
            <>
              <h2>Trending Movies</h2>
              <p className='text-red-600 mt-5'>{errorMessageTrendingMovies}</p>
            </>
          ) : (
            trendingMovies.length > 0 && searchTerm === '' && (
              <>
                <h2>Trending Movies</h2>
                <ul>
                  {trendingMovies.map((movie, index) => (
                    <li key={movie.$id}>
                      <p>{index + 1}</p>
                      <img src={movie.poster_url} alt={movie.title} />
                    </li>
                  ))}
                </ul>
              </>
            )
          )}
        </section>

        <section className='all-movies'>
          <h2 className='mt-10'>{searchTerm ? `Search Results for "${searchTerm}"` : 'Popular Movies'}</h2>

          {isLoading ? (
            <p className='text-white text-center'><Spinner /></p>
          ) : errorMessage ? (
            <p className='text-red-600'>{errorMessage}</p>
          ) : movieList.length === 0 ? (
            <p className='text-white text-center'>No movies found.</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}

        </section>
      </div>

    </main>
  )
}

export default App