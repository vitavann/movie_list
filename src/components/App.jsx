import React from 'react';
import ReactDOM from 'react-dom';
import movies from './movieList.jsx';


function searchingFor(movie){
  return function(x){
    return x.title.toLowerCase().includes(movie.toLowerCase()) || !movie; 
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movies: movies,
      movie: '',

    }
    this.searchHandler = this.searchHandler.bind(this);
  }

  searchHandler(event){
    this.setState({movie: event.target.value})

  }
    render() {
      return (
        <div>
          <form autoComplete="off">
            <input                  
                                    name= 'mySearch' 
                                    type="search"
                                    onChange={this.searchHandler}
                                    value={this.state.movie}
            />
          </form>
          <div>
            {this.state.movies.filter(searchingFor(this.state.movie)).map((movie)=> <ul className='moviebox'>{movie.title}</ul>)}
          </div>
        </div>

      );
    }
  }

export default App;
