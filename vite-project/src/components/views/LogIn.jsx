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

    const login = (e) =>{
        e.preventDefault();

        //CALL FIREBASE METHOD
    }

    return (
        <div className="main-container">
            <div className="login-form-container">
                <form className="login-form" onSubmit={(e) => login(e)}>
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onChange={(e) => handleChange(e)} />

                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" onChange={(e) => handleChange(e)} />

                    <input type="submit" value="login"/>
                </form>
            </div>
        </div>
    )
}

export default Login;