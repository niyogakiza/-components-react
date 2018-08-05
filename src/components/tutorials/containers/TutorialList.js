import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectTutorial } from "../actions";
import { bindActionCreators } from 'redux';

class TutorialList extends Component {
    renderTutorial(){
        return this.props.tutorials.map((tutorial) => {
            return(
                <li
                    key={tutorial.title}
                    onClick={() => this.props.selectTutorial(tutorial)}
                    className="list-group-item"
                >
                    {tutorial.title}
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                {this.renderTutorial()}

            </ul>
        )
    }
}

function mapStateToProps(state){
    return{
        tutorials: state.tutorials
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectTutorial: selectTutorial }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialList)