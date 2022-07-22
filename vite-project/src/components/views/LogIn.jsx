import { useState } from 'react';
import '../../styles/login.css';
import { SECTIONS } from '../../utils/sections.js';

const Login = () => {
    const [form, setForm] = useState({})
    const [section, setSection] = useState([SECTIONS.SIGNUP])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        //CALL FIREBASE METHOD
    }

    return(
        <div className="main-container">
            <div className="login-form-container">
                <div className="welcome-container">
                    <h1 className="welcome">¡ Welcome !</h1>
                    <span>{section == SECTIONS.LOGIN ? 'Sign up' : 'Log in'}</span>
                </div>
                {section == SECTIONS.LOGIN ?( <form className="login-form" onSubmit={(e) => login(e)}>
                    <div className="username-password-input-container">
                        <div className={`username-input-container ${form.username != undefined && form.username.length > 0 && 'filled'}`}>
                            <input type="text" name="username" className='username-login' placeholder=" " onChange={(e) => handleChange(e)} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className={`password-input-container ${form.password != undefined && form.password.length > 0 && 'filled'}`}>
                            <input type="password" name="password" className="password-login" placeholder=" " onChange={(e) => handleChange(e)} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="login-button-container">
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>) : (<form><h1>signup form</h1></form>)}
                <div className="signup-container">
                    <span onClick={() => { section == SECTIONS.LOGIN ? setSection(SECTIONS.SIGNUP) : setSection(SECTIONS.LOGIN) }}>{section == SECTIONS.LOGIN ? 'Sign up' : 'Log in'}</span>
                </div>
            </div>
        </div>
    )
}

export default Login;