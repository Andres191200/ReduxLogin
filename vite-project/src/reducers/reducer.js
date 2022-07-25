import { LOGIN, SIGNUP } from "../types";

const submitFormReducer = (state = {}, action) =>{
    switch(action.type){
        case LOGIN:
            return state
            //CALL FIREBASE METHOD
            break;
        case SIGNUP:
            return state
            //CALL FIREBASE METHOD
            break;
        default:
            return state;      
    }
}

export default submitFormReducer;