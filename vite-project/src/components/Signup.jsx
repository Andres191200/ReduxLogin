import { useContext, useState } from "react";
import { useDispatch } from 'react-redux'
import { signup as SIGNUP } from "../actions";
import '../styles/input.css';
import '../styles/form.css';
import FormInput from "./FormInput";
import useIsLogged from "../customHooks/useIsLogged";
import { SECTIONS } from "../utils/sections";
import { app } from "../firebase/config";
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import UserContext from "../context/userContext";

const Signup = ({ visible, setSection }) => {

    //THIS CODE SHOULD GO INSIDE REDUCER BUT IDK HOW TO ASYNC AWAIT REDUCER :c
    const { logged, setLogged } = useIsLogged();
    // const {user, setUser} = useContext(UserContext)
    const [signUpForm, setSignUpForm] = useState({})
    const dispatch = useDispatch()
    

    const signup = async (event) => {
        const auth = getAuth(app);
        const { username, email, password } = signUpForm
        event.preventDefault();

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        if (userCredentials) {
            const userInfo = {...userCredentials, username}
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo))
            setLogged(true); 
            // setUser(userInfo)
            dispatch(SIGNUP({logged}))
        }
    }

    return (
        <>
            <form onSubmit={(event) => signup(event)} className={`signup-form ${visible ? 'visible' : 'hidden'} `}>
                <div className="welcome-container">
                    <h1 className="welcome">¡ Welcome !</h1>
                    <span>Sign up</span>
                </div>
                <div className='form-main-input-container'>
                    <div className={`form-input-container ${signUpForm.username != undefined && signUpForm.username != '' && 'filled'}`}>
                        <FormInput type='text' text='Username' name='username' form={signUpForm} setForm={setSignUpForm} />
                    </div>
                    <div className={`form-input-container ${signUpForm.email != undefined && signUpForm.email != '' && 'filled'}`}>
                        <FormInput type='text' text='E-mail' name='email' form={signUpForm} setForm={setSignUpForm} />
                    </div>
                    <div className={`form-input-container ${signUpForm.password != undefined && signUpForm.password != '' && 'filled'}`}>
                        <FormInput type='password' text='Password' name='password' form={signUpForm} setForm={setSignUpForm} />
                    </div>
                    <div className={`form-input-container ${signUpForm.confirmpassword != undefined && signUpForm.confirmpassword != '' && 'filled'}`}>
                        <FormInput type='password' text='Confirm password' name='confirmpassword' form={signUpForm} setForm={setSignUpForm} />
                    </div>
                </div>
                <div className="form-footer">
                    <div className="form-submit-button-container">
                        <input type="submit" value='SIGN UP' />
                    </div>
                    <div className="signup-login-switch">
                        <span onClick={() => { setSection(SECTIONS.LOGIN) }}>Log in</span>
                    </div>
                </div>
            </form>

        </>
    )

}

export default Signup;