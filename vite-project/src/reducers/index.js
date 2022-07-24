import {combineReducers} from 'redux';
import submitFormReducer from './reducer';

const reducer = combineReducers({submitFormReducer: submitFormReducer})

export default reducer;