import { handleChange } from "../utils/form";
import { useState } from "react";
import '../styles/input.css';
import '../styles/form.css';
import FormInput from "./FormInput";

const Login = () => {
    const [loginForm, setLoginForm] = useState({})

    const login = (e) => {
        e.preventDefault();
        //CALL FIREBASE METHOD
    }
    return (
        <form onSubmit={(e) => login(e)}>
            <div className="form-main-input-container">
                <div className={`form-input-container ${loginForm.username != undefined && loginForm.username != '' && 'filled'}`}>
                    <FormInput type='text' name='username' form={loginForm} setForm={setLoginForm} />
                </div>
                <div className={`form-input-container ${loginForm.password != undefined && loginForm.password != '' && 'filled'}`}>
                    <FormInput type='text' name='password' form={loginForm} setForm={setLoginForm} />
                </div>
            </div>
        </form>
    )
}

export default Login;