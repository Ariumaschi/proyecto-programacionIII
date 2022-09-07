import React, { Component } from 'react';
import './MovieDetail.css';

class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: (props.match.params.id),
            movieData: {},
        }
    };
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=0e7a6bf53a9c840b66557a6d28ea5004`)
            .then(response => response.json())
            .then(datosPelicula => this.setState({
                movieData: datosPelicula
            },
                () => console.log(datosPelicula)
            ))
            .catch(error => console.log('El error fue: ' + error))


    }
    render() {
        return (
            <>
                <h1>Movie detail</h1>
                { 
                    <section className='movieDetail'>
                        <article className='data'>
                            <h2 className='detail-title'>{this.state.movieData.title}</h2>

                            <p className='detail-info'>Rating: {this.state.movieData.popularity}</p>

                            <p className='detail-info'>Release date: {this.state.movieData.release_date}</p>

                            <p className='detail-info'>{this.state.movieData.overview}</p>
                        </article>
                    </section>

                }
            </>
        )
    }
}

export default MovieDetail