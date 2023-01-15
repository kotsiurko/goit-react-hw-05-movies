import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { MovieDB } from '../../services';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const movieDB = new MovieDB();

const FilmDetails = () => {

  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const location = useLocation();

  const backLinkHref = location?.state?.from ?? '/';

  useEffect(() => {
    movieDB.fetchMovieById(id)
      .then(setFilm)
      .catch(err => {
        toast.error(`Something went wrong! ${err}. Try again later.`, {
          position: toast.POSITION.TOP_CENTER
        });
      });
  }, [id]);

  if (!film) return null;

  const { backdrop_path, title, release_date, vote_average, overview, genres } = film;

  return (
    <main>
      <Link to={backLinkHref}>Go back</Link>
      <img src={movieDB.getImgSrc(backdrop_path)} alt="" />
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
      <p><Link to='cast' state={{ from: backLinkHref }}>Cast</Link></p>
      <p><Link to='reviews' state={{ from: backLinkHref }}>Review</Link></p>
      <hr />
      <Outlet />
    </main>
  );
};

export default FilmDetails;