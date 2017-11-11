import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Input from './components/Input.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      messages: []
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }
  
  click() {
    console.log('got here'); // successful
    //run post request with message
    
  };

  render () {
    return (<div>
      <h1>Seanzy's Messenger</h1>
      <List items={this.state.items}/>
      <Input />
      <button onClick={this.click}>Send</button>
      
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));