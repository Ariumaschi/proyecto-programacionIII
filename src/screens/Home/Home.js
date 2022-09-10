import React, { Component } from 'react';
import Billboard from '../../components/Billboard/Billboard';
import PeliculaPopuCard from '../../components/PeliculaPopuCard/PeliculaPopuCard';
import './Home.css'
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
            resultadosPelicula: []
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
    evitarSubmit(e) {
        e.preventDefault();
    }

    controlarCambios(e) {
          this.setState({
            valor: e.target.value,
        }, () => {
            if(e.target.value.length !== 0){
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
                    <input type="text" onChange={(e) => this.controlarCambios(e)} placeholder = 'Buscar'/>
                </form>
                
            {this.state.valor.length === 0 ?
       
    
        
                <React.Fragment>
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
                :
                <React.Fragment>
                     <h1 className="h1"> Resultados de busqueda</h1>
                    <section className="contenedor-card">
                    {
                        this.state.resultadosPelicula.map((pelicula, idx) => <PeliculaPopuCard key={pelicula + idx} datosPelicula={pelicula} />)
                    }
                    </section>
               </React.Fragment>
                }
            </React.Fragment>
        )
    }
}
export default Home;