import React, { Component } from 'react';
import Flight from './Flight';
import SeatAvailability from './SeatAvailability';
import axios from 'axios';

class SelectedFlight extends Component {

  constructor(){
    super();
    this.state = {
      flight: {}
    }
  }

  componentDidMount(){
    this.fetchFlight();


    window.setInterval(() =>{
      this.fetchFlight();
    }, 1000);

  }

  fetchFlight(){
    axios.get(`http://localhost:3000/flight/${this.props.match.params.selectedFlight}`)
    .then( res => {
      console.log( 'test ', res );

      this.setState({
        flight: res.data
      });
    })
    .catch( console.warn );
  }

  render(){
    return(
      <div>
        <Flight currentFlight={ this.state.flight }/>
        <SeatAvailability currentFlight={ this.state.flight }/>
      </div>
    );
  }
}//end of SelectedFlight Component


export default SelectedFlight;
