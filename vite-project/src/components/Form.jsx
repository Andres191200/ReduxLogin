import { useState } from 'react';
import { SECTIONS } from '../utils/sections.js';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import '../styles/form.css';

const Form = () => {

    const [section, setSection] = useState([SECTIONS.SIGNUP])


    return (
        <div className="main-container">
            <div className="form-container">
                <div className="welcome-container">
                    <h1 className="welcome">¡ Welcome !</h1>
                    <span>{section == SECTIONS.LOGIN ? 'Log in' : 'Sign up'}</span>
                </div>
                {section == SECTIONS.LOGIN ? <Login /> : <Signup />}
                <div className="signup-container">
                    <span onClick={() => { section == SECTIONS.LOGIN ? setSection(SECTIONS.SIGNUP) : setSection(SECTIONS.LOGIN) }}>{section == SECTIONS.LOGIN ? 'Sign up' : 'Log in'}</span>
                </div>
                <div className="form-submit-button-container">
                    <input type="submit" value={section == SECTIONS.LOGIN ? 'LOGIN' : 'SIGN UP'} />
                </div>
            </div>
        </div>
    )
}

export default Form;