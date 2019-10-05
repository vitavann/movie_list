import React from "react";
import ReactDOM from "react-dom";
import movies from "./movieList.jsx";
import MovieListItem from "./movieListItem.jsx";
import axios from "axios";
// import LocalStorage from 'localstorage'

function searchingFor(movie) {
  return function(x) {
    return x.title.toLowerCase().includes(movie.toLowerCase()) || !movie;
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies, //movie array
      newMovie: "", //empty search field for add movie input
      movie: "" //empty search field for searching option8gg8
      //UNDO: uncomment this line below to undo what i've done
      // watched: movies.watched
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.movieSubmit = this.movieSubmit.bind(this);
    //UNDO: uncomment this line below to undo what i've done
    // this.watched = this.watched.bind(this);
  }

  componentDidMount() {
    let mutatedMovies;
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=3975dfb6ec3adee97ea879d10e9e18ec"
      )
      .then(result => {
        console.log("imdb response", result.data.results);
        mutatedMovies = result.data.results.map(movie => {
          return {
            title: movie.title,
            releaseDate: movie.release_date,
            posterPath: `http://image.tmdb.org/t/p/w185/${movie.poster_path}`,
            overview: movie.overview,
            watched: false
          };
        });
        // const movies = result.data.results;
        this.setState({ movies: mutatedMovies });
        console.log("movies:", { movies });
      });
  }

  //UNDO: uncomment this below to undo what i've done
  // watched(event) {
  //   this.setState(state => ({ watched: !state.watched }));
  // }

  movieHandler(event) {
    this.setState({ newMovie: event.target.value });
  }

  searchHandler(event) {
    this.setState({ movie: event.target.value });
  }

  movieSubmit(event) {
    event.preventDefault();
    var newMovieList = this.state.movies.slice();
    newMovieList.push({ title: this.state.newMovie, watched: "false" });
    this.setState({ movies: newMovieList });
  }

  render() {
    return (
      <div>
        <form autoComplete="off" onSubmit={this.movieSubmit}>
          <div>
            <input
              name="addMovie"
              type="text"
              onChange={this.movieHandler}
              value={this.state.newMovie}
            />
            <button type="onclick" value="submit">
              Add
            </button>
          </div>
          <div>
            <input
              name="mySearch"
              type="search"
              onChange={this.searchHandler}
              value={this.state.movie}
            />
          </div>
        </form>
        <div>
          {this.state.movies
            .filter(searchingFor(this.state.movie))
            .map(movie => (
              //UNDO: delete below to undo what i've done
              <MovieListItem movie={movie} />
              //UNDO: uncomment this below to undo what i've done
              // <ul className="moviebox">
              //   {movie.title}
              //   <button onClick={this.watched}>
              //     {console.log(this.state.movie.watched)}
              //     {this.state.movie.watched ? "watched" : "unwatched"}
              //   </button>
              // </ul>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
