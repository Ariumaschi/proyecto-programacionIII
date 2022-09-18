import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../HomePeliculaCard/HomePeliculaCard.css';


class TodasPeliculasCard extends Component {
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
    let storage = JSON.parse(localStorage.getItem('favoritos'))

    if (storage.includes(id)) {
        storage = storage.filter(ID => ID !== id)
        this.setState({
            favorito: false
        })
    } else {
        storage.push(id)
        this.setState({
            favorito: true
        })
    }
    
    localStorage.setItem('favoritos', JSON.stringify(storage))
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
        <Link onClick={() => this.masMenosInfo()}> {this.state.verMas ? "Ver menos" : "Ver mas"} </Link>
        <Link  to={`/movies/id/${this.props.datosPelicula.id}`}> Detalle </Link>
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

export default TodasPeliculasCard;