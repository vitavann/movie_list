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

  var movieStrings = ['Means Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina']
  //MUST BE ARRAY BECAUSE IT CAN'T READ OBJECTS

ReactDOM.render(<App message = {'hello world'} data = {movies} testData = {movieStrings}/>, document.getElementById('app')); // class instatiator which allows us to pass properties