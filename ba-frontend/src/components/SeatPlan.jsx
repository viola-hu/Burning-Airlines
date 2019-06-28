import React, {Component} from 'react';

class SeatPlan extends Component {

  onClickSeat = (seat) => {
    if (this.props.onClickSeat) {
      this.props.onClickSeat(seat);
    }
  }

  render(){

    if (this.props.seat.length <= 0) {
      return(
        <div>
          Loading...
        </div>
      )
    }
    console.log('occupied seats',this.props.taken); // correct!

    return(
      <div className="container">

        <table className="grid">

          <tbody>
            <tr>
            {this.props.seat.map(seat =>
              <td
              key={seat}
              onClick={ ()=>this.onClickSeat(seat) }
              >
                {
                this.props.taken.length>0
                ?
                this.props.taken.includes(seat)? 'X':'avail'
                :
                'Loading'
                }
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
