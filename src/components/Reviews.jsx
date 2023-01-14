import { useParams } from 'react-router-dom';
import { MovieDB } from '../services';
import { useEffect, useState } from 'react';

const movieDB = new MovieDB();

const Reviews = () => {
  const { id } = useParams();

  const [review, setReview] = useState([]);

  useEffect(() => {
    movieDB.fetchReviews(id).then(({ data }) => {
      setReview(data.results);
    });
  }, []);

  return (
    <ul>
      {review.map(el => {
        return (
          <li key={el.id}>
            <p>
              <b>Author: {el.author}</b>
            </p>
            <p>{el.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
