import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout';

// import { HomePage } from '../pages/HomePage';
// import { FilmDetails } from 'pages/FilmDetails';
// import { Cast } from './Cast';
// import { Reviews } from './Reviews';
// import { Movies } from 'pages/Movies';

const HomePage = lazy(() => import('pages/HomePage'));
const FilmDetails = lazy(() => import('pages/FilmDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const Movies = lazy(() => import('pages/Movies'));

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
