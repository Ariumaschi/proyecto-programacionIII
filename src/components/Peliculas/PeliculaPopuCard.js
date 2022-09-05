import React, { Component } from 'react';
import './PeliculaPopuCard.css'

class PeliculaPopuCard extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <article className='character-card'>
                <h2>{this.props.datosPelicula.title}</h2>
                <p>{this.props.datosPelicula.overview}</p>
                <img src={'https://image.tmdb.org/t/p/original/' + this.props.datosPelicula.backdrop_path
                } alt="" />



            </article>

        )
    }

}

export default PeliculaPopuCard