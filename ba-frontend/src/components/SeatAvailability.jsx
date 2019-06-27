import React, { Component } from 'react';

class SeatAvailability extends Component {

  constructor(props){
    super(props);
    this.state = {
      allSeats: this.numOfSeats(),
      takenSeats: this.compareSeats()

    }
  };

  numOfSeats = () => {
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

    console.log('all seats array:',seatNums);
    return seatNums;
  };


  compareSeats = () => {

    //extract an array from the passed-down reservations' seats

    // fake an array now, but got stuck with any .method... i'm stuck now....
    // const takenSeats = ['A1','A2','B1','B2'];



  //   //Hi Amanda,
  //   // I've tried to test the passed down reservations information.
  //   // it seems it's working if you only console.log it out,
  //   // but once using any array method, it's getting the same error!
  //   // TypeError: Cannot read property e.g.'length' of undefined
  //   // I've also tried a for loop but it's not working....


  //   console.log('what is this?',this.props.currentFlight.reservations); //WORKING
  //   let reservationsArray = this.props.currentFlight.reservations;
  //   console.log('reservationsArray',reservationsArray.length); //NOT WORKING

  //
  //
  //
  //
  //   // // const fullSeats = this.state.allSeats;
    // let reservationsArray = this.props.currentFlight.reservations; // array of reservation objects
    // console.log('this is reservations array',reservationsArray);
    // let takenSeats = reservationsArray.map( reserv => reserv.seat ); // array of taken seats
  //   // console.log('type of reservationsArray',typeof(reservationsArray));
  //   // // console.log(reservationsArray.length);
  //   // // let takenSeats = [];
  //   // // for (let i = 0; i < reservationsArray.length; i++) {
  //   //   takenSeats.push(  reservationsArray[i].seat )
  //   // }
    // console.log('taken seats:',takenSeats);
  //   // // return takenSeats
  //
  //   // this.setState({
  //   //   takenSeats: takenSeats,
  //   // })
  }



  render(){
    console.log('this is state.allSeats',this.state.allSeats); //WORKING








    // const reservations = (this.props.currentFlight.reservations).map( item => item.seat);
    // console.log(reservations);
    // let arraySeats = reservations.map( item => item.seat);
    const arr = [{a:1},{a:2}];
    const a = arr.map(item => item.a);
    console.log(a);
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
