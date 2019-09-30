import React from 'react';
import MovieListItem from './MovieListItem.jsx'

const MovieList = (props) => {
    return (
        <div>
            {props.MovieListItem.movies}
        </div>
    );
};

export default MovieList;