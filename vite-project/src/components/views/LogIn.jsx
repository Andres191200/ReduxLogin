import { useState } from 'react';
import '../../styles/login.css';

const Login = () => {
    const [form, setForm] = useState({})

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

    return (
        <div className="main-container">
            <div className="login-form-container">
                <form className="login-form" onSubmit={(e) => login(e)}>
                    <div className="username-password-input-container">
                        <div className="username-input-container">
                            <input type="text" name="username" className="username-login" onChange={(e) => handleChange(e)} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="password-input-container">
                            <input type="password" name="password" className="password-login" onChange={(e) => handleChange(e)} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="login-button-container">
                        <input type="submit" value="login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;