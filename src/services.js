import axios from 'axios';

export class MovieDB {
  #BASE_URL = 'https://api.themoviedb.org/3';
  #API_KEY = 'b04a034fc18f8d6bb9fee9f009f99d0d';

  fetchTrendMovies() {
    return axios.get(
      `${this.#BASE_URL}/trending/movie/week?api_key=${this.#API_KEY}`
    );
  }

  fetchSearch(query) {
    return axios.get(`${this.#BASE_URL}/search/movie?api_key=${this.#API_KEY}&query=${query}`);
  }

  fetchMovieById(id) {
    return axios.get(`${this.#BASE_URL}/movie/${id}?api_key=${this.#API_KEY}`)
      .then(({ data }) => {
        const { backdrop_path, title, release_date, vote_average, overview, genres } = data;
        return {
          backdrop_path,
          title,
          release_date: release_date.substring(0, 4),
          vote_average,
          overview,
          genres: this.getGenres(genres),
        };
      });
  }

  fetchCast(id) {
    return axios.get(`${this.#BASE_URL}/movie/${id}/credits?api_key=${this.#API_KEY}`);
  }

  fetchReviews(id) {
    return axios.get(`${this.#BASE_URL}/movie/${id}/reviews?api_key=${this.#API_KEY}`);
  }

  getImgSrc(url) {
    return url ? `https://image.tmdb.org/t/p/w500${url}` : 'https://raw.githubusercontent.com/kotsiurko/filmoteka/dev/src/images/default-photo.jpeg'
  }

  getGenres(genreArr) {
    return (genreArr.reduce((accumulator, currentValue) => accumulator + ', ' + currentValue.name, '')).substr(2)
  }
}