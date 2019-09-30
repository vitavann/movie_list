import React from 'react';
import MovieList from './MovieList.jsx';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
      }
    }
    render () {
        return (
            <div>
                <div>
                    Hello
                </div>
                <div>
                 <MovieList movies={this.state.movies}/>
                {/* {props.movies.map(movie => <MovieListItem movie={movie.title}/>)} */}
                </div>
            </div>
        )
    }
}

export default App; 