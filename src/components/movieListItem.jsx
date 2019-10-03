import React from "react";

class MovieListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      watched: false
    };
    this.watched = this.watched.bind(this);
  }

  watched() {
    this.setState(prevState => ({ watched: !prevState.watched }));
  }

  render() {
    return (
      <ul className="moviebox">
        {this.props.movie.title}
        <button onClick={() => this.watched()}>
          {console.log(this.state.watched)}
          {this.state.watched ? "watched" : "unwatched"}
        </button>
      </ul>
    );
  }
}

export default MovieListItem;
