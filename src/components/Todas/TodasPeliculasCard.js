import React, { Component } from "react";
import './TodasPeliculas.css'

class TodasPeliculasCard extends Component {
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
        <img src={"https://image.tmdb.org/t/p/original/" + this.props.datosPelicula.poster_path} alt=""/>
        <h2>{this.props.datosPelicula.title} ({this.props.datosPelicula.release_date.slice(0,4)})</h2>
        {
        this.state.verMas 
        ? <p>{this.props.datosPelicula.overview}</p> 
        : <p>{this.props.datosPelicula.overview.slice(0, 100)} [...]</p>
        }
        <a onClick={() => this.masMenosInfo()}> {this.state.verMas ? "Ver menos" : "Ver mas"} </a>
      </article>
    );
  }
}

export default TodasPeliculasCard;