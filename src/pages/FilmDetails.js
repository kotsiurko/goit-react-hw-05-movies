import { Link, Outlet, useParams } from 'react-router-dom';
import { MovieDB } from '../services';
import { useState, useEffect } from 'react';

const movieDB = new MovieDB();

const FilmDetails = () => {

  const { id } = useParams();
  const [film, setFilm] = useState([]);

  useEffect(() => {
    movieDB.fetchMovieById(id).then(({ data }) => {
      // console.log(data);
      const { backdrop_path, title, release_date, vote_average, overview, genres } = data;

      // let initialValue = '';

      setFilm({
        backdrop_path,
        title,
        release_date: release_date.substring(0, 4),
        vote_average,
        overview,
        genres: (genres.reduce((accumulator, currentValue) => accumulator + ', ' + currentValue.name, '')).substr(2),
      });
    });
  }, []);


  const { backdrop_path, title, release_date, vote_average, overview, genres } = film;

  return (
    <main>
      <Link to='/'>Back to trending</Link>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt="" />
      <div>
        <h2>
          {title} ({release_date})
        </h2>
        <p>
          User score: {vote_average}
        </p>
        <p>
          Overview: {overview}
        </p>
        <p>
          Genres: {genres}
        </p>
      </div>
      <hr />
      Additional information
      <p><Link to='cast'>Cast</Link></p>
      <p><Link to='reviews'>Review</Link></p>
      <hr />
      <Outlet />
    </main>
  );
};

export default FilmDetails;