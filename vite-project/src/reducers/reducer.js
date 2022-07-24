import { LOGIN, SIGNUP } from "../types";

const submitFormReducer = (state = {}, action) =>{
    console.log(action.type)
    switch(action.type){
        case LOGIN:
            console.log(action.payload);
            //CALL FIREBASE METHOD
            break;
        case SIGNUP:
            console.log(action.payload);
            //CALL FIREBASE METHOD
            break;
        default:
            return state;      
    }
}

export default submitFormReducer;