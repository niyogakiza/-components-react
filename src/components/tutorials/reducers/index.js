import { combineReducers } from 'redux';
import TutorialReducer from './reducer_tutorials';
import ActiveTutorial from './reducer_active_tutorial';


const rootReducer = combineReducers({
    tutorials: TutorialReducer,
    activeTutorial: ActiveTutorial
});

export default rootReducer;