import { Link } from 'react-router-dom';
import { Container, CardWrapper, FilmName } from './FilmList.styled';

const FilmList = ({ movies }) => {
  return (
    <Container>
      {movies.map(({ poster_path, id, title }) => {
        const posterPath = `https://image.tmdb.org/t/p/w500${poster_path}`;
        return (
          <CardWrapper key={id}>
            <Link to={`/movies/${id}`}>
              <img src={posterPath} alt="" />
              <FilmName>{title}</FilmName>
            </Link>
          </CardWrapper>
        );
      })}
    </Container>
  );
};

export default FilmList;
