import React from "react";
import ReactDOM from "react-dom";
import movies from "./movieList.jsx";
// import Axios from 'axios';
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
      movie: "", //empty search field for searching option8gg8
      watched: false
    };
    this.searchHandler = this.searchHandler.bind(this);
    this.movieHandler = this.movieHandler.bind(this);
    this.movieSubmit = this.movieSubmit.bind(this);
    this.watched = this.watched.bind(this);
  }

  // componentDidMount() {
  //   LocalStorage.getItem('result'
  //     .then((result) => this.setState({movies: JSON.parse(result)})
  // .catch((err) => console.log(err))

  //   Axios.get('www.api.com')
  //     .then((result) => {
  //       const stringifyData = JSON.stringify(result)
  //       LocalStorage.setItem('result', stringifyData)
  //     })
  // }

  watched(event) {
    this.setState(state => ({ watched: !state.watched }));
  }

  movieHandler(event) {
    this.setState({ newMovie: event.target.value });
  }

  searchHandler(event) {
    this.setState({ movie: event.target.value });
  }

  movieSubmit(event) {
    event.preventDefault();
    var newMovieList = this.state.movies.slice();
    newMovieList.push({ title: this.state.newMovie });
    console.log(newMovieList);
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
              <ul className="moviebox">
                {movie.title}
                <button onClick={this.watched}>
                  {this.state.watched ? "watched" : "unwatched"}
                </button>
              </ul>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
