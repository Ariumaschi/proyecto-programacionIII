import React, {Component} from 'react';
import FavoritosCard from './FavoritosCard';
import loadingimg from "../../loadingGif.gif";

class Favoritos extends Component{
    constructor() {
        super();
        this.state = {
            peliculas: []
        }
    }

    componentDidMount(){
        let recuperarStorage = localStorage.getItem('favoritos');

        if (recuperarStorage !== null) {
            const favoritos = JSON.parse(recuperarStorage);

            let arrayDeFavoritos = [];

            favoritos.forEach((id) => { 
                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0e7a6bf53a9c840b66557a6d28ea5004`)
                .then(response => response.json())
                .then(data => {
                    arrayDeFavoritos.push(data);

                    this.setState({
                        peliculas: arrayDeFavoritos
                    })
                })
            })
        }
    }

    quitarFav(id){
        let filtro = this.state.peliculas.filter(unaPeli => unaPeli.id !== id)
        this.setState({
            peliculas: filtro
        })        
        //Limpiar de localStorage
        localStorage.clear()
        let idFiltrados = []
        filtro.map((pelicula) => idFiltrados.push(pelicula.id))
        localStorage.setItem('favoritos', JSON.stringify(idFiltrados))
    }

    render(){
        return(
            <section className="contenedor-card">
                {this.state.peliculas.length === 0 ?
                                <img src={loadingimg} alt="Cargando..." />
                                :
                this.state.peliculas.map((data, id) => <FavoritosCard key={data + '_' + id} data={data} quitar={(id) => this.quitarFav(id)}/>)}
            </section>
        )
    }
}

export default Favoritos;