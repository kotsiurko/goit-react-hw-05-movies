import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from '../SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const FilmDetails = lazy(() => import('pages/FilmDetails/FilmDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));
const Movies = lazy(() => import('pages/Movies/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:id" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>Not Found Page</div>} />
      </Route>
    </Routes>
  );
};
