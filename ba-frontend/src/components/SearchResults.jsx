import React, { Component } from 'react';

class SearchResults extends Component {
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
                <td>{flight.flight_number}</td>
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
