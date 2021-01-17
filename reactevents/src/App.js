import React, {Component} from 'react';
import './App.css';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      message: "ready"
    }
  }

  render() {
    return (
      <div className="m-2">
        <div className="h4 bg-primary text-white text-center p-2">
          { this.state.message}
        </div>
        <div className="text-center">
          <button className="btn btn-primary" onClick={ () => {this.setState({message:"Clicked!!"})}}>
          Click me
          </button>
        </div>
      </div>
    )
  }
}
