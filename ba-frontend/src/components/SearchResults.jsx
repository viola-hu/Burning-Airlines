import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends Component {
  // constructor(){
  //   super();
  //   this.state={
  //     clickedFlight:
  //   }
  // }


  render() {
    console.log('hi', this.props.searchResults);
    return(
      <div>
        <h2>SearchResults</h2>
        <table>
          <tr>
            <th>DATE</th>
            <th>FLIGHT</th>
            <th>FROM>TO</th>
            <th>PLANE</th>

          </tr>

          {
            this.props.searchResults.map( flight =>
              <tr>
                <td>{flight.date}</td>
                <td><Link to={`/flight/${flight.id}`}>{flight.flight_number}</Link></td>
                <td>{flight.from}>{flight.to}</td>
                <td>{flight.airplane_id}</td>
              </tr>
            )
          }
        </table>
      </div>
    );
  }
}

export default SearchResults;
