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
      messages: [],

    }
    
  this.componentDidMount = this.componentDidMount.bind(this);
     
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => { //messageData
        this.setState({
          items: data,
        })
        
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Seanzy's Messenger</h1>
      <List items={this.state.items}/>
      <div>{this.state.items[0]}</div>
      <Input />
            
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));