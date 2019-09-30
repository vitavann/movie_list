import React from 'react';

const MovieListItem = (props) => {
    return (
        <div>
            {props.movies.title}
        </div>
    );
};

export default MovieListItem;