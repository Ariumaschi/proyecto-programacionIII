import React, {Component} from 'react';
import TodasPeliculasCard from './TodasPeliculasCard';
import loadingimg from "../../loadingGif.gif";
import './TodasPeliculas.css'

class TodasPeliculas extends Component{
    constructor(){
        super()
        this.state = {
           peliculas:[], //aparecer personajes
           nextUrl:'',   
           pelis2: [],
           valor: '',
            siguientePag: ''   
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
                peliculas: this.state.peliculas.concat(data.results)
            },() => console.log(this.state.peliculas)
            ))
        .catch()
    }
    //FILTRO

    evitarSubmit(e) {
        e.preventDefault();
    }
    controlarCambios(e) {
        this.setState({
          valor: e.target.value,},
           () => {  
            if (e.target.value !== ''){
         let result = this.state.peliculas.filter((unaPelicula) => {
          return unaPelicula.title.toLowerCase().includes(e.target.value)
        }) 
    console.log(result);
    this.setState({pelis2: result})/* ,() => console.log(this.state.data2))  */ 
    }

        }
        )
      }
    render(){
        return(
            <React.Fragment >

                <form onSubmit={(e) => this.evitarSubmit(e)}>
                    <input type="text" onChange={(e) => this.controlarCambios(e)} placeholder = '    Buscar..'/>
                </form>
                
            <section className="contenedor-card">
        {this.state.peliculas.length === 0 ?
            <img src={loadingimg} alt="Cargando..." />
              :
             this.state.peliculas.map((pelicula, idx) => <TodasPeliculasCard key={pelicula + idx} datosPelicula={pelicula} />)
             }  
            </section>
                <div className="cont-vermas">
                <button onClick={() => this.verMas()} className="vermaspelis">Ver Más</button>
                </div>
        <section/>
            </React.Fragment>
        )
    }
}
export default TodasPeliculas;