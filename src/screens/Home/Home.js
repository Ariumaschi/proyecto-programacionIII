import React, {Component} from 'react';
import PeliculaPopuCard from '../../components/Peliculas/PeliculaPopuCard';

class Home extends Component{
    constructor(){
        super()
        this.state={
           peliculas:[], //aparecer personajes
            nextUrl:''
        }
    }
    componentDidMount(){
        //BUscamos datos
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=0e7a6bf53a9c840b66557a6d28ea5004&language=en-US&page=1 ')
           
        .then( res => res.json())
        .then( data => this.setState({
                peliculas: data.results
            },()=>console.log(this.state.peliculas)
            ))
            .catch()
    }
    render(){
        return(
            <React.Fragment>
              {
                this.state.peliculas.map((pelicula, idx) => <PeliculaPopuCard key={pelicula.original_title + idx} datosPelicula={pelicula} />)
              }
            </React.Fragment>
        )
    }


}
export default Home