import React, { Component } from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: (props.match.params.id),
            movieData: {
                genres:[]
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

        let favoritos = []
        let storage = JSON.stringify(localStorage.getItem('favoritos'))

        if (storage !== null) {

            favoritos = storage

            if (favoritos.includes(this.state.id)) {
                this.setState({
                    añadirSacar: true
                })
            }
        }
    }

    añadirFav(id) {

        let favoritos = []
        let favStorage = localStorage.getItem('favoritos')

        if (favStorage !== null) {
            let storage = JSON.parse(favStorage)
            favoritos = storage
        }

        if (favoritos.includes(id)) {
            favoritos = favoritos.filter(ID => ID !== id)
            this.setState({
                añadirSacar: false
            })
        } else {
            favoritos.push(id)
            this.setState({
                añadirSacar: true
            })
        }

        let favsToString = JSON.stringify(favoritos)
        localStorage.setItem('favoritos', favsToString)
        console.log(localStorage);
    }

    render() {
        return (

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
                   <p className='fav' onClick={() => this.añadirFav(this.state.movieData.id)}>{this.state.añadirSacar ? '<3' : '</3'}</p>
                </section>
                
            </article>
        )
    }

}

export default MovieDetail