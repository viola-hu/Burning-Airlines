import React, { Component } from 'react';
import Flight from './Flight';
import SeatAvailability from './SeatAvailability';

class SelectedFlight extends Component {
  render(){
    return(
      <div>
        <Flight/>
        <SeatAvailability/>
      </div>
    );
  }
}//end of SelectedFlight Component


export default SelectedFlight;
