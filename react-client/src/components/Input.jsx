import React from 'react';
import $ from 'jquery';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    
    //did you bind your method? 
    this.onChange = this.onChange.bind(this);
    this.click = this.click.bind(this);
  }
  
  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  
  click() {
    console.log(this.state.message)
    $.ajax({
      type: 'POST',
      url: '/items',
      success: function() {
        console.log('SUCCESSFUL POST', this.state.message);
      },
      error: function(err) {
        console.log('error happened', err); 
      } 
    })
  }
  
  render() {
    return (
      <div>
      <input value={this.state.message} onChange={this.onChange} type="text" placeholder="Enter your message to Sean here" />    
      <p>{this.state.message}</p>
      <button onClick={this.click}>Send</button>
      </div>  
    )
  }  
  
}   

export default Input; 
