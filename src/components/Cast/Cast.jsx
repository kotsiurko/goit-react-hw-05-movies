import { useParams } from 'react-router-dom';
import { MovieDB } from '../../services';
import { useEffect, useState } from 'react';

const movieDB = new MovieDB();

const Cast = () => {
  const { id } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieDB.fetchCast(id).then(({ data }) => {
      setCast(data.cast);
    });
  }, [id]);

  return (
    <ul>
      {cast.map(el => {
        return (
          <li key={el.id}>
            <img
              src={movieDB.getImgSrc(el.profile_path)}
              alt={el.name}
              width="200px"
            />
            <p>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
