import { useState } from "react";
import { useDispatch, useSelector,  } from 'react-redux'
import { login as LOGIN } from "../actions";
import '../styles/input.css';
import '../styles/form.css';
import FormInput from "./FormInput";

const Login = () => {
    const [loginForm, setLoginForm] = useState({})
    const dispatch = useDispatch()  
    const state = useSelector(state => state)


    const login = (event) => {
        event.preventDefault();
        dispatch(LOGIN(loginForm))
    }
    return (
        <form onSubmit={(event) => login(event)}>
            <div className="form-main-input-container">
                <FormInput type='text' name='username' form={loginForm} setForm={setLoginForm} />
                <FormInput type='text' name='password' form={loginForm} setForm={setLoginForm} />
            </div>
            <div className="form-submit-button-container">
                <input type="submit" value='LOGIN' />
            </div>
        </form>
    )
}

export default Login;