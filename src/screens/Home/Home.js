import React, { Component } from 'react';
import HomePeliculaCard from '../../components/HomePeliculaCard/HomePeliculaCard';
import './Home.css'
import { Link } from 'react-router-dom'
import loadingimg from "../../loadingGif.gif";

class Home extends Component {
    constructor() {
        super()
        this.state = {
            popularMovies: [], //aparecer personajes
            cartelMovies: [],
            resultadosPelicula: [],
            valor: '',
            añadirSacar: false
        }
    }
    componentDidMount() {
        //Buscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0e7a6bf53a9c840b66557a6d28ea5004')
            .then(res => res.json())
            .then(data => this.setState({
                popularMovies: data.results
            }, () => console.log(this.state.popularMovies)
            ))
            .catch()

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=0e7a6bf53a9c840b66557a6d28ea5004')
            .then(res => res.json())
            .then(data => this.setState({
                cartelMovies: data.results
            }))
            .catch()

        let favoritos = []
        let storage = JSON.stringify(localStorage.getItem('favoritos'))

        if (storage !== null) {

            favoritos = storage

            if (favoritos.includes()) {
                this.setState({
                    añadirSacar: true
                })
            }
        }
    }

    evitarSubmit(e) {
        e.preventDefault();
    }

    controlarCambios(e) {
        this.setState({
            valor: e.target.value,
        }, () => {
            if (e.target.value.length !== 0) {
                fetch('https://api.themoviedb.org/3/search/movie?api_key=' + this.state.key + '&query=' + this.state.valor)
                    .then(data => data.json())
                    .then(info => {
                        this.setState({
                            resultadosPelicula: info.results
                        })
                    })
            }
        })
    }

    render() {
        return (
            <React.Fragment>

                <form onSubmit={(e) => this.evitarSubmit(e)}>
                    <input type="text" onChange={(e) => this.controlarCambios(e)} placeholder='    Buscar..' value={this.state.value}/>
                </form>

                {this.state.valor.length === 0 ?
                    <React.Fragment>
                        <h1 className="h1"> Más Populares </h1>
                        <section className="contenedor-card">
                            {this.state.popularMovies.length === 0 ?
                                <img src={loadingimg} alt="Cargando..." />
                                :
                                this.state.popularMovies.map((pelicula, idx) => <HomePeliculaCard key={pelicula + idx} datosPelicula={pelicula} />)
                            }

                        </section>
                        <div className="cont-vermas">
                            <Link className="Link" to='/todas'> Ver Todas </Link>
                        </div>
                        <h1 className="h1">En cartelera</h1>
                        <section className="contenedor-card">
                            {
                                this.state.cartelMovies.map((pelicula, idx) => <HomePeliculaCard key={pelicula + idx} datosPelicula={pelicula} />)
                            }
                            <div className="cont-vermas">
                                <Link className="Link" to='/todas'> Ver Todas </Link>
                            </div>
                        </section>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <h1 className="h1"> Resultados de busqueda</h1>

                        <section className="contenedor-card">
                            {
                                this.state.resultadosPelicula.map((pelicula, idx) => <HomePeliculaCard key={pelicula + idx} datosPelicula={pelicula} añadirSacar={this.state.añadirSacar} />)
                            }
                        </section>
                    </React.Fragment>
                }
            </React.Fragment>
        )
    }
}
export default Home;
