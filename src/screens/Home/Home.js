import React, {Component} from 'react';
import PeliculaPopuCard from '../../components/PeliculaPopuCard/PeliculaPopuCard';
import './Home.css'

class Home extends Component{
    constructor(){
        super()
        this.state = {
           peliculas:[], //aparecer personajes
           nextUrl:''
        }
    }
    componentDidMount(){
        //Buscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0e7a6bf53a9c840b66557a6d28ea5004&language=en-US&page=1')
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
                        this.state.peliculas.map((pelicula, idx) => <PeliculaPopuCard key={pelicula + idx} datosPelicula={pelicula} />)
                    }  
                </section>
            </React.Fragment>
        )
    }
}
export default Home;