import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from "../../card/Card";
import CardContent from "../../card/CardContent";


class TutorialDetail extends Component {
    render() {
        if(!this.props.tutorial){
            return <div>Select a Tutorial to get started..</div>
        }

        return(
            <div>
                <h3>Details for : </h3>

                <div> {this.props.tutorial.title}</div>
                <div>  {this.props.tutorial.pages}</div>


            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tutorial: state.activeTutorial
    }
}

export default connect(mapStateToProps)(TutorialDetail)