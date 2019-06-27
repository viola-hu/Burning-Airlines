import React, { Component } from 'react';

class SeatAvailability extends Component {
  constructor(props){
    super(props)
    this.state = {
      allSeats: this.numSeats(),
      takenSeats: this.compareSeats()
    }
  }

  numSeats(){
    const seatNums = [];
    const columnsArray = ['A', 'B', 'C', 'D', 'E'];
    // replace num with {airplane.columns}
    const columns = 3;
    const rows = 10;

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
      seatNums.push((i+1)+columnsArray[j]);
      }
    }
    return seatNums;
  }

  compareSeats = () => {
    const allSeats = this.state.allSeats;
    const reservations = this.props.currentFlight.reservations;
    console.log(reservations);
    const arraySeats = reservations.map( a => a.seat);
    console.log(arraySeats);
  }

  render(){
    const reservations = (this.props.currentFlight.reservations).map( item => item.seat);
    console.log(reservations);
    // let arraySeats = reservations.map( item => item.seat);
    // const arr = [{a:1},{a:2}];
    // const a = arr.map(item => item.a);
    // console.log(a);
    // let arraySeats = reservations.map( a => a.seat);
    // console.log(arraySeats);

    //replace null with {airplane.rows}
    // const rows = Array(10).fill(null);


    return(
      <div>




      </div>
    );
  }
}

export default SeatAvailability;


// <% @airplane.rows.times do |i| %>
//   <tr>
//    <th scope="row"><%= i+1 %></th>
//    <% @airplane.columns.times do |i| %>
//      <td></td>
//    <% end %>
//  </tr>
// <% end %>


// {<% @airplane.columns.times do |i| %>
//   <td></td>
// }
// <table id="book-seat">
//   <thead>
//     <tr>
//       <th scope="col"></th>
//       { columnName.map( letter =>
//         <th scope="col" key="{letter}">{ letter }</th>
//       )}
//     </tr>
//   </thead>
//     <tbody>
//
//     { rows.map( (elem, i) =>
//     <tr key={i+1} index={i+1}>
//      <th scope="row" key={i+1}>{i + 1}</th>
//      { columnName.map( (elem, i) =>
//         <td index={columnsArray[i]}></td>
//      )}
//    </tr>
//  )}
//
//
//
//   </tbody>
// </table>
