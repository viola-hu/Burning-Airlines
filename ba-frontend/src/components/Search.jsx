
import React, { Component } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import SearchResults from './SearchResults';
import SearchForm from './SearchForm';
import Flight from './Flight';

// const FLIGHT_URL = 'http://localhost:3000/flights'

class Search extends Component {

  constructor(){
    super();
    this.state = {
      results: []
    };
  }

  // componentDidMount(){
  // this.fetchFlights();
  // }

  fetchFlights(from, to){

  axios.get( `http://localhost:3000/flights/${from}/${to}.json` )
  .then( res => {
    console.log( res );
    this.setState({ results: res.data })

  })
  .catch( console.warn );

  } //end of fetchflights

saveSearch = ( from, to ) => {
  console.log('Search.saveSearch(); from = ', from, 'to = ', to);
  this.fetchFlights(from, to);

}


render(){
  return(
    <div>

      <h2>Burning Airlines Search Component</h2>

      <SearchForm onSearchSubmit={ this.saveSearch }/>
      <SearchResults searchResults={ this.state.results }/>
      
    </div>
  );
}
}

export default Search;
