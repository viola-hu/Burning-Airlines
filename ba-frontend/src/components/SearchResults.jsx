import React, { Component } from 'react';

  class SearchResults extends Component {
    render() {
      console.log('hi', this.props.searchResults);
      return(
        <div>
          <h2>SearchResults</h2>
          <table>
            <thead>
              <tr>
                <th>DATE</th>
                <th>FLIGHT</th>
                <th>FROM>TO</th>
                <th>PLANE</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.searchResults.map( flight =>
                <tr key={flight.id}>
                  <td>{flight.date}</td>
                  <td>{flight.flight_number}</td>
                  <td>{flight.from}>{flight.to}</td>
                  <td>{flight.airplane.name}</td>
                </tr>
                )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;
