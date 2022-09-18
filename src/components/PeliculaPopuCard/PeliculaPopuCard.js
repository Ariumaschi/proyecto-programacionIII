import React, { Component } from "react";
import "./PeliculaPopuCard.css";
import { Link } from 'react-router-dom'


class PeliculaPopuCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verMas: false,
      favorito: false
    };
  }

  componentDidMount(){
    let favoritos = JSON.stringify(localStorage.getItem('favoritos'))

    if (favoritos !== null) {
      if (favoritos.includes(this.props.datosPelicula.id)){
        this.setState({
            favorito: true
        })
      }
    }
  }

  masMenosInfo() {
    this.setState({
      verMas: !this.state.verMas
    });
  }

  añadirSacar(id) {

    let favoritos = []
    let favStorage = localStorage.getItem('favoritos')

    if (favStorage !== null) {
        let storage = JSON.parse(favStorage)
        favoritos = storage
    }

    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(ID => ID !== id)
        this.setState({
            favorito: false
        })
    } else {
        favoritos.push(id)
        this.setState({
            favorito: true
        })
    }

    let favsToString = JSON.stringify(favoritos)
    localStorage.setItem('favoritos', favsToString)
    console.log(localStorage);
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
       <div> <Link onClick={() => this.masMenosInfo()} to='#'> {this.state.verMas ? "Ver menos" : "Ver mas"} </Link>
        <Link  to={`/movies/id/${this.props.datosPelicula.id}`}> Detalle </Link>
        </div>
        { 
          this.state.favorito ?
          <button className="agregarSacar" onClick={() => this.añadirSacar(this.props.datosPelicula.id)}>Sacar</button>
          :
          <button className="agregarSacar" onClick={() => this.añadirSacar(this.props.datosPelicula.id)}>Agregar</button>
        }
      </article>
    );
  }
}

export default PeliculaPopuCard;