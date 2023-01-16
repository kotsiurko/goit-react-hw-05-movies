import { useSearchParams } from 'react-router-dom';
import { MovieDB } from '../../services';
import { useState } from 'react';
import { useEffect } from 'react';
import FilmList from 'components/FilmList/FilmList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper, Input, Button } from './Movies.styled';

const movieDB = new MovieDB();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {

    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      movieDB.fetchSearch(movieTitle).then(({ data }) => {
        setMovies(data.results);
      });
    }

  }, [searchParams]);

  const handleSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target[0].value.trim().toLowerCase();

    if (searchQuery === '') {
      toast.warn("Please, enter correct query!", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }

    setSearchParams({ query: searchQuery });
  };

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Search..."
          // value={}
          />

          <Button type="submit">Search</Button>

        </form>
      </Wrapper>
      {movies.length > 0 && <FilmList movies={movies} />}
      <ToastContainer />
    </>
  );
};

export default Movies;