import { useState } from "react";
import { useDispatch, useSelector, } from 'react-redux'
import { login as LOGIN } from "../actions";
import '../styles/input.css';
import '../styles/form.css';
import FormInput from "./FormInput";
import { SECTIONS } from "../utils/sections";

const Login = ({ setSection }) => {
    const [loginForm, setLoginForm] = useState({})
    const dispatch = useDispatch()
    const state = useSelector(state => state)


    const login = (event) => {
        event.preventDefault();
        dispatch(LOGIN(loginForm))
    }
    return (
        <>
            <form onSubmit={(event) => login(event)} className="login-form">
                <div className="welcome-container">
                    <h1 className="welcome">¡ Welcome !</h1>
                    <span>Log in</span>
                </div>
                <div className="form-main-input-container">
                    <div className={`form-input-container ${loginForm.username != undefined && loginForm.username != '' && 'filled'}`}>
                        <FormInput type='text' text='Username' name='username' form={loginForm} setForm={setLoginForm} />
                    </div>
                    <div className={`form-input-container ${loginForm.password != undefined && loginForm.password != '' && 'filled'}`}>
                        <FormInput type='text' text='Password' name='password' form={loginForm} setForm={setLoginForm} />
                    </div>
                </div>
                <div className="form-footer">
                    <div className="form-submit-button-container">
                        <input type="submit" value='LOGIN' />
                    </div>
                    <div className="signup-login-switch">
                        <span onClick={() => { setSection(SECTIONS.SIGNUP) }}>Sign up</span>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login;