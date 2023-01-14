// 'use strict';
import axios from 'axios';

export class MovieDB {
  #BASE_URL = 'https://api.themoviedb.org/3';
  #API_KEY = 'b04a034fc18f8d6bb9fee9f009f99d0d';

  fetchTrendMovies(page) {
    return axios.get(
      `${this.#BASE_URL}/trending/movie/week?api_key=${this.#API_KEY}&page=${page}`
    );
  }

  fetchSearch(query) {
    return axios.get(`${this.#BASE_URL}/search/movie?api_key=${this.#API_KEY}&query=${query}`);
  }

  fetchMovieById(id) {
    return axios.get(`${this.#BASE_URL}/movie/${id}?api_key=${this.#API_KEY}`);
  }

  fetchCast(id) {
    return axios.get(`${this.#BASE_URL}/movie/${id}/credits?api_key=${this.#API_KEY}`);
  }

  fetchReviews(id) {
    return axios.get(`${this.#BASE_URL}/movie/${id}/reviews?api_key=${this.#API_KEY}`);
  }
}



// Data of one movie
// id
// :
// 76600
// media_type
// :
// "movie"
// original_language
// :
// "en"
// original_title
// :
// "Avatar: The Way of Water"
// overview
// :
// "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure."
// popularity
// :
// 4762.653
// poster_path
// :
// "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"
// release_date
// :
// "2022-12-14"
// title
// :
// "Avatar: The Way of Water"
// video
// :
// false
// vote_average
// :
// 7.715
// vote_count
// :
// 3922





// OBJECT
// adult
// :
// false
// backdrop_path
// :
// "/dKqa850uvbNSCaQCV4Im1XlzEtQ.jpg"
// belongs_to_collection
// :
// { id: 722971, name: 'Knives Out Collection', poster_path: '/q8qrqIOwfx0Usp9xMRRB2g4dwYw.jpg', backdrop_path: '/G7qYINSq5xyDd0I0zn3DpAssA0.jpg' }
// budget
// :
// 40000000
// genres
// :
// (3)[{… }, {… }, {… }]
// homepage
// :
// "https://glassonionmovie.com"
// id
// :
// 661374
// imdb_id
// :
// "tt11564570"
// original_language
// :
// "en"
// original_title
// :
// "Glass Onion: A Knives Out Mystery"
// overview
// :
// "World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends."
// popularity
// :
// 2764.204
// poster_path
// :
// "/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg"
// production_companies
// :
// [{… }]
// production_countries
// :
// [{… }]
// release_date
// :
// "2022-11-23"
// revenue
// :
// 13280000
// runtime
// :
// 140
// spoken_languages
// :
// [{… }]
// status
// :
// "Released"
// tagline
// :
// ""
// title
// :
// "Glass Onion: A Knives Out Mystery"
// video
// :
// false
// vote_average
// :
// 7.083
// vote_count
// :
// 2428