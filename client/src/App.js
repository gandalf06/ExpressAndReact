import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';

class App extends Component {
  componentDidMount(){
    this.callApi()
    .then(res => this.setState({testingState: res.express, date: new Date()}))
    .catch(err => console.log(err))
  }
  
  constructor(props) {
    super(props);
    this.state = {
      testingState: "",
      date: new Date()
  }

  this.crazyClick = this.crazyClick.bind(this)

  this.callApi = async () => {
    const response = await fetch('/api/mensagem');
    const body = await response.json();

    if(response.status !== 200) throw Error(body.message);
  
    return body
  };
}

  crazyClick() {
    this.setState({ testingState: "Tis is a very crazy", date: new Date() })
  }
  render() {
    return (
      <div>
        <h1>{this.state.testingState}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <Button variant="contained" color="primary" onClick={this.crazyClick}>Crazy Click</Button>
      </div>
    );
  }
}

export default App;
