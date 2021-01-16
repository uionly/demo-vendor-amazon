import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

class Chase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const data = this.state.value
    console.log(data)  // Can I print data in the output?
    // I want the Output on submit and not onChange event
  };
// problm {1}  onchange is giving results before submit button is clicked
// problm {2}  also string in the input is updating itself with the results same as the output

  handleChange = (e) => {
      e.preventDefault()
      const newValue = e.target.value
      const splitValue = newValue.split(' ')
      const arryValue = Array.from(new Set(splitValue)).toString().replaceAll(',', ' ')
      this.setState({
        value: arryValue
      }, () =>{
        console.log(this.state.value)
      })
  };
  render() {
    return (
      <Jumbotron>
        <form onSubmit={this.handleSubmit}>
       <div>
       <label>
          Name:
          <input
            type='text'
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type='submit' value='Submit' />
       </div>
       <div>
       <label>
            Output : 
            <p>{this.state.value}</p>
            {/* I want the Output on submit and not onChange event */}
        </label>
       </div>
      </form>
      </Jumbotron>
    );
  }
}

export default Chase;