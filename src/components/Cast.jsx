import { useParams } from 'react-router-dom';
import { MovieDB } from '../services';
import { useEffect, useState } from 'react';

const movieDB = new MovieDB();

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieDB.fetchCast(id).then(({ data }) => {
      setCast(data.cast);
    });
  }, []);

  return (
    <ul>
      {cast.map(el => {
        const posterPath = `https://image.tmdb.org/t/p/w500${el.profile_path}`;
        return (
          <li key={el.id}>
            <img src={posterPath} alt={el.name} width="200px" />
            <p>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
