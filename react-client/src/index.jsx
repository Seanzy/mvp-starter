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
    return (
      <div>
        <h1>Seanzy's Messenger</h1>
        <List items={this.state.items}/>
        <Input />
        <a href='https://api.clockworksms.com/http/send.aspx?key=131ee2110d1a8194acb1379bd91ae8fc8554591c&to=19257055654&content=You+have+received+a+new+message+from'><b>Click here to notify Sean of your message.</b></a>   
        <div>
        PLEASE BE SURE TO LEAVE YOUR CONTACT INFORMATION IN THE MESSAGE
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// <div>{this.state.items[0]}</div> was efter <List> component