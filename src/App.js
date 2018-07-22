import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor (props) {
    super(props)
    this.state =  { 
      movies: []
    }
    
  }
  

  componentDidMount() {

 
    axios.get(`https://api.themoviedb.org/3/genre/878/movies?api_key=676b3c9f60afa891ecd3660a390f6cf4&page=1`)
      .then(res => {
        let moviesRes = res.data.results;

        this.setState({ 
          movies : moviesRes
        })
        console.log(moviesRes);

      })
      
    

    
    
  }

 

  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <SearchBar />
        </header>
        
        <MovieList details={this.state.movies} />
      </div>
    );
  }
}

export default App;
