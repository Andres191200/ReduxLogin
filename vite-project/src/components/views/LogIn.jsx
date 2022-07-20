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
                <div>
                    <h1 className="welcome">¡ Welcome !</h1>
                    <span>Log in</span>
                </div>
                <form className="login-form" onSubmit={(e) => login(e)}>
                    <div className="username-password-input-container">
                        <div className={`username-input-container ${form.username!=null && form.username.length > 0 && 'filled'}`}>
                            <input type="text" name="username" className='username-login' placeholder=" " onChange={(e) => handleChange(e)} />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className={`password-input-container ${form.username!=null && form.password.length > 0 && 'filled'}`}>
                            <input type="password" name="password" className="password-login" placeholder=" " onChange={(e) => handleChange(e)} />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="login-button-container">
                        <input type="submit" value="LOGIN" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;