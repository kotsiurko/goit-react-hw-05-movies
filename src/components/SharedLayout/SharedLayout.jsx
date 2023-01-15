import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container, Header, Logo, LinkNav } from './SharedLayout.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="camera icon">
            &#127909;
          </span>{' '}
          GoFind Movie
        </Logo>
        <nav>
          <LinkNav to="/" end>
            Home
          </LinkNav>
          <LinkNav to="/movies">Movies</LinkNav>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <ToastContainer />
    </Container>
  );
};
