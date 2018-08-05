import React, { Component } from 'react';
import Card from "./components/card/Card";
import Tutorials from './components/tutorials/components/Tutorials'
import './components/card/styledCard.css'

class App extends Component {
    constructor(props){
        super(props);
    }


  render() {
    return (
        <div className="body">
            <div>
                <Card numCards={6} />
            </div>
            <div className="alex">
                <Card numCards={3}/>
            </div>
            <div className="body">
                <Card numCards={6}/>
            </div>
            <div className="alex1">
                <Tutorials />

            </div>
            <div className="body">

            </div>
            <div className="alex2">

            </div>
            <div className="body">

            </div>
        </div>


    );
  }
}

export default App;
