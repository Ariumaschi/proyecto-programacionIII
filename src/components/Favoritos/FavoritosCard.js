import React, { Component } from "react";
import { Link } from 'react-router-dom';

class FavoritosCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: false
    };
  }

  masMenosInfo() {
    this.setState({
      verMas: !this.state.verMas
    });
  }

  render() {
    return (
      <article className="pelicula-card">
        <img src={"https://image.tmdb.org/t/p/original/" + this.props.data.poster_path} alt=""/>
        <h2>{this.props.data.title} ({this.props.data.release_date.slice(0, 4)})</h2>
        {
        this.state.verMas 
        ? <p>{this.props.data.overview}</p> 
        : <p>{this.props.data.overview.slice(0, 100)} [...]</p>
        }
        <Link onClick={() => this.masMenosInfo()}>{this.state.verMas ? "Ver menos" : "Ver mas"} </Link>
        <Link  to={`/movies/id/${this.props.data.id}`}> Detalle </Link>
        <button onClick={() => this.props.quitar(this.props.data.id)}>X</button>
      </article>
    );
  }
}

export default FavoritosCard;