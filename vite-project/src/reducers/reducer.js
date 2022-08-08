import { LOGIN, SIGNUP } from "../types";
import { app } from "../firebase/config";
import { getAuth } from 'firebase/auth';

const SubmitFormReducer = (state = { logged: window.localStorage.getItem('logged') || false}, action) => {

    const auth = getAuth(app);
    //NOTE: I COULDN'T FIGURED OUT HOW TO DO ASYNC AWAIT DATABASE LOGIN HERE, THAT'S WHY THAT CODE AREN'T HERE
    switch (action.type) {
        case LOGIN:
            return state
            break;
        case SIGNUP:
            const logged = action.payload;
            return {
                ...state,
                logged
            }
        default:
            return state;
    }
}

export default SubmitFormReducer;