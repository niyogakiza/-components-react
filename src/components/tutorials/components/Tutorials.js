import React, { Component } from 'react';

import TutorialList from '../containers/TutorialList';
import TutorialDetails from '../containers/TutorialDetail';


class Tutorials extends Component {
    render() {
        return (
            <div>
                <TutorialList />
                <TutorialDetails />
            </div>
        )
    }
}

export default Tutorials