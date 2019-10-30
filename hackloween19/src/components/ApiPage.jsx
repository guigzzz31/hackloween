import React from 'react';
import axios from 'axios';
import MovieDisplay from './MovieDisplay';

function getRandomMovie(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class ApiPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };   
    this.getMovie = this.getMovie.bind(this);
  }

  componentDidMount() {
    this.getMovie();
  }

  getMovie() {
    axios
      .get("https://hackathon-wild-hackoween.herokuapp.com/movies")
      .then(response => response.data)
      .then(data => {
        this.setState({
          movie: data.movies[getRandomMovie(1, 82)]
        });
      });
  }
  render() {
    return(
      <div>
        <MovieDisplay movie={this.state.movie} />
      </div>
    )
  }
}
export default ApiPage;