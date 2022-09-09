import React, { Component } from 'react';
import Billboard from '../../components/Billboard/Billboard';
import PeliculaPopuCard from '../../components/PeliculaPopuCard/PeliculaPopuCard';
import './Home.css'
import Form from '../../components/Form/Form'
import { Link } from 'react-router-dom'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            key: '0e7a6bf53a9c840b66557a6d28ea5004',
            popularMovies: [], //aparecer personajes
            cartelMovies: [],
            nextUrl: '',
            valor: '',
            peliculasBuscadas: []


        }
    }
    componentDidMount() {
        //Buscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key)
            .then(res => res.json())
            .then(data => this.setState({
                popularMovies: data.results
            }, () => console.log(this.state.popularMovies)
            ))
            .catch()

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.key)
            .then(res => res.json())
            .then(data => this.setState({
                cartelMovies: data.results
            }))
            .catch()

    }
    guardarPeliculasBuscadas(buscado) {
        this.setState({
            peliculasBuscadas: buscado//Las películas que te pasa elform
        })
    }

    render() {
        return (
            <React.Fragment>
                <Form />

                <h1 className="h1"> Más Populares </h1>
                <section className="contenedor-card">
                    {
                        this.state.popularMovies.map((pelicula, idx) => <PeliculaPopuCard key={pelicula + idx} datosPelicula={pelicula} />)
                    }
                    <div className="cont-vermas">
                        <Link className="Link" to='/todas'> Ver Todas </Link>
                    </div>
                </section>
                <h1 className="h1">En cartelera</h1>
                <section className="contenedor-card">
                    {
                        this.state.cartelMovies.map((cartelMovie, idx) => <Billboard key={cartelMovie + idx} datosPelicula={cartelMovie} />)
                    }
                    <div className="cont-vermas">
                        <Link className="Link" to='/todas'> Ver Todas </Link>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}
export default Home;