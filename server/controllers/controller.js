

const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

  module.exports = {
      getMovies: (req, res) => {
          console.log('callback got invoked')
          res.send(movies);
      }
  }