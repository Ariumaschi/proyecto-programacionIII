import React, {Component} from 'react';
import Billboard from '../../components/Billboard/Billboard';
import PeliculaPopuCard from '../../components/PeliculaPopuCard/PeliculaPopuCard';
import './Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state = {
            key:'0e7a6bf53a9c840b66557a6d28ea5004',
            popularMovies:[], //aparecer personajes
            cartelMovies: [],
            nextUrl:'',

        
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=' + this.state.key)
        .then( res => res.json())
        .then( data => this.setState({
            popularMovies: data.results
            },() => console.log(this.state.popularMovies)
            ))
        .catch()

        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.state.key)
        .then( res => res.json())
        .then( data => this.setState({
            cartelMovies: data.results
            }))
        .catch()

    }
    render(){
        return(
            <React.Fragment>
                 
                <h1 className="h1"> Más Populares </h1>
                <section className="contenedor-card">
                {
                    this.state.popularMovies.map((pelicula, idx) => <PeliculaPopuCard key={pelicula + idx} datosPelicula={pelicula} />)
                }  
                </section>
                <h1 className="h1">En cartelera</h1>
                <section className="contenedor-card">
                {
                    this.state.cartelMovies.map((cartelMovie, idx) => <Billboard key={cartelMovie + idx} datosPelicula={cartelMovie} />)
                }  
                </section>

            </React.Fragment>
        )
    }
}
export default Home;