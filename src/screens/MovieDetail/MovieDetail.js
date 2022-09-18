import React, { Component } from 'react';
import './MovieDetail.css';
import loadingimg from "../../loadingGif.gif";
class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: (props.match.params.id),
            movieData: {
                genres: []
            },
            añadirSacar: false
        }
    };

    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=0e7a6bf53a9c840b66557a6d28ea5004`)
            .then(response => response.json())
            .then(datosPelicula => this.setState({
                movieData: datosPelicula
            },
                () => console.log(datosPelicula)
            ))
            .catch(error => console.log('El error fue: ' + error))

        let storage = JSON.stringify(localStorage.getItem('favoritos'))

        if (storage.includes(this.state.id)) {
            this.setState({
                añadirSacar: true
            })
        }
    }

    añadirFav(id) {

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
            <>
                {this.state.movieData.genres.length === 0 ?
                    <img src={loadingimg} alt="Cargando..." />
                    :
                    <article className='detailArticle'>
                        <h1 className='movieDetail'>Detalle de pelicula: {this.state.movieData.title} </h1>
                        <div>
                            <img className='imgDetail' src={`https://image.tmdb.org/t/p/w342/${this.state.movieData.poster_path}`} alt='Imagen' />
                        </div>

                        <section className='data'>

                            <p className='dataDetail'>Rating: {this.state.movieData.popularity}</p>

                            <p className='dataDetail'>Fecha de estreno: {this.state.movieData.release_date}</p>

                            <p className='dataDetail'>Sinopsis: {this.state.movieData.overview}</p>

                            <ul className='dataDetail'>
                                Generos:
                                {
                                    this.state.movieData.genres.map((Genero) => <li className='genero'>{Genero.name}</li>)
                                }
                            </ul>
                            <button className="agregarSacar" onClick={() => this.añadirFav(this.state.movieData.id)}>{this.state.añadirSacar ? 'Sacar' : 'Agregar'}</button>
                        </section>

                    </article>
                }
            </>
        )
    }

}

export default MovieDetail