import React, {Component} from 'react';


class SeatPlan extends Component {

render(){
    console.log('this.props.seat', this.props.seat);

  return(
    <div>
      {this.props.seat.map( seat =>
      <div>
        {seat}
      </div>
      )}
    </div>

  )
}
} // end SeatPlan

export default SeatPlan;
