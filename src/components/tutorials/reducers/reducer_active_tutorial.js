export default function (state = null, action) {
    switch (action.type){
        case 'TUTORIAL_SELECTED':
            return action.payload;
        default:
            return state;
    }

}