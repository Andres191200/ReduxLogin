import { LOGIN, SIGNUP } from "../types";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const submitFormReducer = (state = {}, action) => {
    const auth = getAuth(app);
    const logged = false;

    switch (action.type) {
        case LOGIN:
            return state
            //CALL FIREBASE METHOD
            break;
        case SIGNUP:
            const { email, password } = action.payload
            //SIGN UP
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    logged = true;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(error)
                    return {
                        ...state,
                        logged: false
                    }
                });
            return {
                ...state,
                logged: true
            }
        default:
            return state;
    }
}

export default submitFormReducer;