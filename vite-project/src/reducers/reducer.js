import { LOGIN, SIGNUP, LOGOUT } from "../types";

const SubmitFormReducer = (state = {}, action) => {

    //NOTE: I COULDN'T FIGURED OUT HOW TO DO ASYNC AWAIT DATABASE LOGIN HERE, THAT'S WHY THAT CODE AREN'T HERE
    switch (action.type) {
        case LOGIN:
            return state
        case SIGNUP:
            const { logged } = action.payload;
            return {
                ...state,
                logged
            }
        case LOGOUT:
            return state;
        default:
            return state;
    }
}

export default SubmitFormReducer;