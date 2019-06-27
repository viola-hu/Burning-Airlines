import React, { Component } from 'react';


const Flight = function( props ) {

  // let day = props.currentFlight.date
  // let date = day.split('/').reverse().join('/')

  return(
    <div>

      <p><strong>DATE: </strong>{props.currentFlight.date}<strong>FLIGHT NUMBER: </strong>{props.currentFlight.flight_number} <strong>ROUTE: </strong> {props.currentFlight.from} > {props.currentFlight.to}</p>

    </div>
  );
}

export default Flight;
