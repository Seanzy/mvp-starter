import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    
    this.onChange = this.onChange.bind(this);
  }
  
  onChange(e) {
    this.setState({
      message: e.target.value,
    });
  }
  
  render() {
    return (
      <div>
      <input value={this.state.message} onChange={this.onChange} type="text" placeholder="Enter your message to Sean here" />    
      <p>{this.state.message}</p>
      </div>  
    )
  }  
  
}   

export default Input; 
