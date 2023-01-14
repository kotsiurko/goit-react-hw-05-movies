import { useSearchParams } from 'react-router-dom';
import { MovieDB } from '../services';
import { useState } from 'react';
import { useEffect } from 'react';
import FilmList from 'components/FilmList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Wrapper, Input, Button } from './Movies.styled';

const movieDB = new MovieDB();

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();

    const searchQuery = event.target[0].value;

    if (searchQuery === '') {
      toast.warn("Please, enter correct query!", {
        position: toast.POSITION.TOP_CENTER
      });
      return;
    }

    setSearchParams({ query: searchQuery });
  };


  useEffect(() => {

    const movieTitle = searchParams.get('query');
    if (movieTitle) {
      movieDB.fetchSearch(movieTitle).then(({ data }) => {
        setMovies(data.results);
      });
    }

  }, [searchParams]);

  return (
    <>
      <Wrapper>
        <form onSubmit={handleSubmit}>
          <Input
            type={"text"}
            placeholder="Search..."
          />

          <Button type="submit">Search</Button>

        </form>
      </Wrapper>
      <FilmList movies={movies} />
      <ToastContainer />
    </>
  );
};

export default Movies;