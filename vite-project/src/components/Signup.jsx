import { useState } from "react";
import { useDispatch, useSelector,  } from 'react-redux'
import { signup as SIGNUP } from "../actions";
import '../styles/input.css';
import '../styles/form.css';
import FormInput from "./FormInput";


const Signup = () => {
    const [signUpForm, setSignUpForm] = useState({})
    const dispatch = useDispatch()
    
    const state = useSelector(state => state)

    const signup = (event) => {
        event.preventDefault();
        dispatch(SIGNUP(signUpForm))
    }

    return (
        <form onSubmit={(event) => signup(event)}>
            <div className="form-main-input-container">
                <FormInput type='text' name='username' form={signUpForm} setForm={setSignUpForm} />
                <FormInput type='text' name='password' form={signUpForm} setForm={setSignUpForm} />
            </div>
            <div className="form-submit-button-container">
                <input type="submit" value='SIGN UP' />
            </div>
        </form>
    )

}

export default Signup;