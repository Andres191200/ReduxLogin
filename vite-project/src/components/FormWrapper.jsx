import { useState } from 'react';
import { SECTIONS } from '../utils/sections.js';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import '../styles/form.css';

const FormWrapper = () => {

    const [section, setSection] = useState([SECTIONS.LOGIN])

    return (
        <div className="main-container">
            <div className="form-container">
                <Login setSection={setSection} />
                <Signup setSection={setSection} visible={section == SECTIONS.SIGNUP && true} />
            </div>
        </div>
    )
}

export default FormWrapper;