import React, { Component } from "react";
import "./PeliculaPopuCard.css";

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
        <img src={"https://image.tmdb.org/t/p/original/" + this.props.datosPelicula.backdrop_path} alt=""/>
        <h2>{this.props.datosPelicula.title}</h2>
        <p>{this.props.datosPelicula.release_date}</p>
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

export default PeliculaPopuCard;