import React, { Component } from 'react';

  class SearchForm extends Component {

    constructor(props){
      super(props);

      this.state = {
        from: '',
        to: ''
      };

    }

    handleInput1 = (event) => {
      event.persist();
      this.setState({ from: event.target.value });
    }
    handleInput2 = (event) => {
      event.persist();
      this.setState({ to: event.target.value });
    }

    handleSubmit =(event) => {
    event.preventDefault();
    this.props.onSearchSubmit( this.state.from, this.state.to )
    }



    render(){
      return(
        <div>
          <h2>SearchForm</h2>
          <form onSubmit={ this.handleSubmit }>
            <input type="text" placeholder="From" onChange={ this.handleInput1}/>
            <br/>
            <input type="text" placeholder="To" onChange={ this.handleInput2}/>
            <input type="submit" value="Search Flights" />
          </form>
        </div>
      );
    }
  }

  export default SearchForm;
