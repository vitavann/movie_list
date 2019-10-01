import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

var movieTitles = ['Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']

ReactDOM.render(<h1>{movies.map((movie)=> <ul class='moviebox'>{movie.title}</ul>)}</h1>, document.getElementById('app'));