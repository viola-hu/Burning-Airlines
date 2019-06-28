import React, {Component} from 'react';

class SeatPlan extends Component {

  onClickSeat(seat){
    this.props.onClickSeat(seat);
  }

  render(){

    if (this.props.seat.length <= 0) {
      return(
        <div>
          Loading...
        </div>
      )
    }

    return(
      <div className="container">

        <table className="grid">

          <tbody>
            <tr>
            {this.props.seat.map(seat =>
              <td
              key={seat}
              onClick={ event => this.onClickSeat(seat)}
              >

                {this.props.taken.indexOf(seat) > -1 ? 'X':'avail'}

              </td>
            )}
            </tr>

          </tbody>
        </table>
      </div>


    )



  }



}

export default SeatPlan
































// import React, {Component} from 'react';
//
//
// class SeatPlan extends Component {
//
// render(){
//     console.log('this.props.seat', this.props.seat);
//
//   return(
//     <div>
//       {this.props.seat.map( seat =>
//       <div>
//         {seat}
//       </div>
//       )}
//     </div>
//
//   )
// }
// } // end SeatPlan
//
// export default SeatPlan;
