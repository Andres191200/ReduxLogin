import { useState } from "react";
import '../styles/input.css';
import '../styles/form.css';
import FormInput from "./FormInput";


const Signup = () => {
    const [signUpForm, setSignUpForm] = useState({})

    return (
        <form>
            <div className="form-main-input-container">
                <div className={`form-input-container ${signUpForm.username != undefined && signUpForm.username != '' && 'filled'}`}>
                    <FormInput type='text' name='username' form={signUpForm} setForm={setSignUpForm} />
                </div>
                <div className={`form-input-container ${signUpForm.password != undefined && signUpForm.password != '' && 'filled'}`}>
                    <FormInput type='text' name='password' form={signUpForm} setForm={setSignUpForm} />
                </div>
            </div>
        </form>
    )

}

export default Signup;