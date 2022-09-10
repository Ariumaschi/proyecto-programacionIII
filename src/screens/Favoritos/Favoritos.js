import React, {Component} from 'react';
import FavoritosCard from './FavoritosCard';

class Favoritos extends Component{
    constructor() {
        super();
        this.state = {
            peliculas: []
        }
    }

    componentDidMount(){
        let recuperarStorage = JSON.parse(localStorage.getItem('favoritos'))

        recuperarStorage.forEach((id) => { 
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0e7a6bf53a9c840b66557a6d28ea5004`)
        .then(response => response.json())
        .then(data => this.setState({
            peliculas: this.state.peliculas.concat(data)
        })
        )})
    }

    render(){
        return(
            <section>
                {this.state.peliculas.map((data, id) => <FavoritosCard key={data + '_' + id} data={data} />)}
            </section>
        )
    }
}

export default Favoritos;