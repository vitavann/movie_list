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
  // movielist.map((movie) => {
  //   `${movie.title} ${movie.overview}`
  // }
  render() {
    return (
      <ul className="moviebox">
        <div>
          <h1>{this.props.movie.title}</h1>
          <p>{this.props.movie.release_date}</p>
          <button onClick={() => this.watched()}>
            {console.log(this.state.watched)}
            {this.state.watched ? "watched" : "unwatched"}
          </button>
          <div>
            <img src={this.props.movie.posterPath} />
          </div>
          <ul>Summary: {this.props.movie.overview}</ul>
        </div>
      </ul>
    );
  }
}

export default MovieListItem;

/**
 * class MovieListItem React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isWatched: false,
    }
  }
  toggleIsWatched = () => {
    this.setState(prevState => {isWatched: !prevState})
  }
  renderButton = () => {
  if (this.state.isWatched) {
    return (

      <Button onClick={() => this.toggleIsWatched()}  style={buttonStyle}>
    )
  } else {
    return (
      <Button onClick={() => this.toggleIsWatched()} style={otherButtonStyle}>
    )
  }
}
  render () {
    return (
      <div>
      <p>{this.props.movie.title}</p>
      {this.renderButton()}
      </div>
    )
  }
}
 */
