import FilmList from '../../components/FilmList/FilmList';
import { MovieDB } from '../../services';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const movieDB = new MovieDB();

const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movieDB.fetchTrendMovies().then(({ data }) => {
      setMovies(data.results);
    })
      .catch(err => {
        toast.error(`Something went wrong! ${err}. Try again later.`, {
          position: toast.POSITION.TOP_CENTER
        });
      });;
  }, []);

  return (
    <main>
      <FilmList movies={movies} />
    </main>
  );
};

export default HomePage;