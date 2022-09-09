import React, { Component } from "react";
import "./PeliculaPopuCard.css";
import { Link } from 'react-router-dom'

class PeliculaPopuCard extends Component {
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
        <img src={"https://image.tmdb.org/t/p/original/" + this.props.datosPelicula.poster_path} alt="" />
        <h2>{this.props.datosPelicula.title} ({this.props.datosPelicula.release_date.slice(0, 4)})</h2>
        {
          this.state.verMas
            ? <p>{this.props.datosPelicula.overview}</p>
            : <p>{this.props.datosPelicula.overview.slice(0, 100)} [...]</p>
        }
        <Link onClick={() => this.masMenosInfo()} to='#'> {this.state.verMas ? "Ver menos" : "Ver mas"} </Link>
        <Link  to={`/movies/id/${this.props.datosPelicula.id}`}> Detalle </Link>
      </article>
    );
  }
}

export default PeliculaPopuCard;