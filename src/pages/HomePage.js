import FilmList from '../components/FilmList';
import { MovieDB } from '../services';
import { useState, useEffect } from 'react';

const movieDB = new MovieDB();

const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieDB.fetchTrendMovies(1).then(({ data }) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <main>
      <FilmList movies={movies} />
    </main>
  );
};

export default HomePage;