import React, {Component} from 'react';
import TodasPeliculasCard from './TodasPeliculasCard'
import './TodasPeliculas.css'

class TodasPeliculas extends Component{
    constructor(){
        super()
        this.state = {
           peliculas:[], //aparecer personajes
           nextUrl:'',
           page: 2
        }
    }

    componentDidMount(){
        //BUscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0e7a6bf53a9c840b66557a6d28ea5004&language=en-US&page=1')
        .then( res => res.json())
        .then( data => this.setState({
                peliculas: data.results
            },() => console.log(this.state.peliculas)
            ))
        .catch()
    }

    verMas(){
        this.setState({
            page: this.state.page + 1
        })
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0e7a6bf53a9c840b66557a6d28ea5004&language=en-US&page=' + this.state.page)
        .then( res => res.json())
        .then( data => this.setState({
                peliculas: data.results
            },() => console.log(this.state.peliculas)
            ))
        .catch()
    }

    render(){
        return(
            <React.Fragment >
                <section className="contenedor-card">
                    {
                        this.state.peliculas.map((pelicula, idx) => <TodasPeliculasCard key={pelicula + idx} datosPelicula={pelicula} />)
                    }  
                </section>
                <div className="cont-vermas">
                <button onClick={() => this.verMas()} className="vermaspelis">Ver Más</button>
                </div>
            </React.Fragment>
        )
    }
}
export default TodasPeliculas;