import { combineReducers } from 'redux';

function bagReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_TO_BAG': {
            return state.concat(action.item);
        }
        default:
            return state;
    }
}

export const reducer = combineReducers({
    bag: bagReducer
});
