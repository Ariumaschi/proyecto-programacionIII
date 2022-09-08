import React ,{ Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            peliculasFiltradas: [],
            key:'0e7a6bf53a9c840b66557a6d28ea5004',
            valor:'',
            peliculas:[],
        }
    }
    preventRecarga(e) {
        e.preventDefault();
       
    };
    guardarCambios(e) {//obtiene el valor del imput que sube el usuario
        this.setState({ valor: e.target.value })

    }
   busqueda(){
    fetch('https://api.themoviedb.org/3/search/movie?api_key=' + this.state.key + '&query=' + this.state.valor)
    .then(data => data.json())
    .then(info => {
        this.setState({
            peliculas: info.results
        })
    });

   }


    render(){
        return(
    <form onSubmit={(e) => this.preventRecarga(e)}>
    <input type='text' onChange={(e) => this.guardarCambios(e)} value={this.state.valor} />
    <button onClick={()=> this.busqueda()} className="form" type="submit">Buscar</button>
    </form>

        )
    }
}

export default Form