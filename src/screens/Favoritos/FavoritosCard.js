import React, { Component } from "react";

class FavoritosCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <article className="pelicula-card">
        <img src={"https://image.tmdb.org/t/p/original/" + this.props.data.poster_path} alt=""/>
        <h2>{this.props.data.title} ({this.props.data.release_date.slice(0,4)})</h2>
        {
        this.state.verMas 
        ? <p>{this.props.data.overview}</p> 
        : <p>{this.props.data.overview.slice(0, 100)} [...]</p>
        }
        <a> {this.state.verMas ? "Ver menos" : "Ver mas"} </a>
      </article>
    );
  }
}

export default FavoritosCard;