import { Link, useLocation } from 'react-router-dom';
import { Container, CardWrapper, FilmName } from './FilmList.styled';
import { MovieDB } from '../../services';

const movieDB = new MovieDB();

const FilmList = ({ movies }) => {
  const location = useLocation();
  return (
    <Container>
      {movies.map(({ poster_path, id, title }) => {
        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={movieDB.getImgSrc(poster_path)} alt="" />
              <FilmName>{title}</FilmName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};

export default FilmList;
